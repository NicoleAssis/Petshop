import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-cadastrados',
  templateUrl: './cadastrados.page.html',
  styleUrls: ['./cadastrados.page.scss'],
})
export class CadastradosPage implements OnInit {
  public url = 'https://dog.ceo/api/breeds/image/random';
  public imagem = '';
  public result:any = {};

  cadastrando = {
    nome: '',
    idade: '',
    imagem: '',

  
    
  };

 
  
  constructor(
    private http: HttpClient,
    public nav: NavController,
    public alerta: AlertController,
  ) {
    
   }

  ngOnInit() {
    this.carregaDados();
  }
  carregaDados(){
    this.cadastrando.nome=localStorage.getItem("nome")!;
    this.cadastrando.nome=localStorage.getItem("idade")!;
    this.cadastrando.nome=localStorage.getItem("imagem")!;
  }

  IonViewDidEnter(){
    this.carregaDados();
  }
  
  ExcluirDados(){
    this.nav.navigateRoot('/');
  }
  async voltar(){
    this.nav.navigateRoot('/')
  }


}
