import { Component, OnInit } from '@angular/core';
import { ArticuloFamilia, ArticulosFamilias } from '../../models/articulo-familia';
import { MockArticulosFamiliasService } from "../../services/mock-articulos-familias.service";
import { ArticulosFamiliasService } from "../../services/articulos-familias.service";

@Component({
  selector: 'app-articulos-familias',
  templateUrl: './articulos-familias.component.html',
  styleUrls: ['./articulos-familias.component.css'],
  providers: [ArticulosFamiliasService, MockArticulosFamiliasService]
})
export class ArticulosFamiliasComponent implements OnInit {
  Items: ArticuloFamilia[] = [];
  Titulo = "Articulos Familias"

  constructor(
    // trae array del modelo
    private articulosFamiliasService:  MockArticulosFamiliasService
    // trae el array desde una webapi
    //private articulosFamiliasService:  ArticulosFamiliasService
  ) { }

  ngOnInit() {
    this.GetFamiliasArticulos();
  }

    GetFamiliasArticulos() {
    this.articulosFamiliasService.get().subscribe(
      {
          next: ArticulosFamilias => this.Items = ArticulosFamilias,
          //error: err => window.alert(err.statusText)
      }
      );
  }

}



 // ngOnInit() {
 //   this.GetFamiliasArticulos();
 // }

   // GetFamiliasArticulos() {
 //   this.articulosFamiliasService.get().subscribe((res:ArticuloFamilia[]) => {this.Items = res;});
// }
