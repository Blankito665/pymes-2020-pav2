import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';  
import { ReactiveFormsModule } from "@angular/forms";
import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { ArticulosFamiliasComponent } from './component/articulos-familias/articulos-familias.component';
import { MockArticulosFamiliasService } from './services/mock-articulos-familias.service';
import { ArticulosFamiliasService } from './services/articulos-familias.service';
import { MenuComponent } from './component/menu/menu.component';
import { ArticulosComponent } from './component/articulos/articulos.component';
import { MockArticulosService } from './services/mock-articulos.service';
import { ArticulosService } from './services/articulos.service';
import { ModalDialogComponent } from './component/modal-dialog/modal-dialog.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule,ReactiveFormsModule, NgbPaginationModule,  RouterModule.forRoot([
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
      { path: 'articulosfamilias', component: ArticulosFamiliasComponent },
      { path: 'articulos', component: ArticulosComponent }
    ])
 ],
  declarations: [ AppComponent, HelloComponent, InicioComponent, ArticulosFamiliasComponent, MenuComponent, ArticulosComponent, ModalDialogComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MockArticulosFamiliasService, ArticulosFamiliasService, MockArticulosService, ArticulosService]
})
export class AppModule { }
