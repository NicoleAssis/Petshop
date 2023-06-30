import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastradosPageRoutingModule } from './cadastrados-routing.module';

import { CadastradosPage } from './cadastrados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastradosPageRoutingModule
  ],
  declarations: [CadastradosPage]
})
export class CadastradosPageModule {}
