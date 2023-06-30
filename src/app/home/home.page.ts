import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import {
  NumericValueAccessor,
  ToastController,
} from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public url = 'https://dog.ceo/api/breeds/image/random';
  public imagem = '';
  public result: any = {};
  dados: any = {};

  cadastrando = {
    nome: '',
    idade: '',

  };

  LabelBotao = 'Cadastrar';

  constructor(
    public mensagem: ToastController,
    public nav: NavController,
    private http: HttpClient


  ) { }
  ionViewDidEnter() {
    this.limpadados();
  }

  cadastrar() {
    console.log(this.cadastrando.nome);
    if (
      this.cadastrando.nome == '' ||
      this.cadastrando.idade == ''
    ) {
      this.exibeToast('Preencha os campos necessários', 'danger');
    } else {
      this.salvamento();
      this.nav.navigateForward('cadastrados')
    }
  }


  async salvamento() {
    localStorage.setItem('nome', this.cadastrando.nome);
    localStorage.setItem('idade', this.cadastrando.idade);
    localStorage.setItem('imagem', await this.gerar());
    console.log(this.cadastrando);

  }

  limpadados() {
    this.LabelBotao = 'Cadastrar';
    this.cadastrando.nome = '';
    this.cadastrando.idade = '';
  }

  async exibeToast(msg: string, cor: string) {
    const toast = await this.mensagem.create({
      message: msg,
      duration: 1500,
      position: 'top',
      animated: true,
      color: cor,
    });

    toast.present();
  }

  gerar() {
    return new Promise<string>(async (resolve, reject) => {
      try {
        const resp = await this.consultaApi().toPromise()
        this.result = resp
        resolve(this.result.message)
      }
      catch (error) {
        reject(error)
      }
    })
}

  consultaApi() {
    return this.http.get(this.url);
  }



}
