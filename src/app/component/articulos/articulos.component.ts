import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Articulo, Articulos } from "../../models/articulo";
import { ArticuloFamilia, ArticulosFamilias } from "../../models/articulo-familia";
import { MockArticulosService } from "../../services/mock-articulos.service";
import { MockArticulosFamiliasService } from "../../services/mock-articulos-familias.service";

@Component({
  selector: "app-articulos",
  templateUrl: "./articulos.component.html",
  styleUrls: ["./articulos.component.css"]
})
export class ArticulosComponent implements OnInit {
  Titulo = "Articulos";
  TituloAccionABMC = {
    A: "(Agregar)",
    B: "(Eliminar)",
    M: "(Modificar)",
    C: "(Consultar)",
    L: "(Listado)"
  };
  AccionABMC = "L"; // inicialmente inicia en el listado de articulos (buscar con parametros)
  Mensajes = {
    SD: " No se encontraron registros...",
    RD: " Revisar los datos ingresados..."
  };

  Lista: Articulo[] = [];
  RegistrosTotal: number;
  Familias: ArticuloFamilia[] = [];
  SinBusquedasRealizadas = true;
  Pagina = 1; // inicia pagina 1

  // opciones del combo activo
  OpcionesActivo = [
    { Id: null, Nombre: "" },
    { Id: true, Nombre: "SI" },
    { Id: false, Nombre: "NO" }
  ];


  constructor(
    public formBuilder: FormBuilder,
    private articulosService: MockArticulosService,
    private articulosFamiliasService: MockArticulosFamiliasService,
  ) {}

  FormFiltro: FormGroup;
  FormReg: FormGroup;

  ngOnInit() {
    this.FormFiltro = this.formBuilder.group({
      Nombre: [""],
      Activo: [null]
    });
    this.FormReg = this.formBuilder.group({
      IdArticulo: [0],
      Nombre: [""],
      Precio: [null],
      Stock: [null],
      CodigoDeBarra: [""],
      IdArticuloFamilia: [""],
      FechaAlta: [""],
      Activo: [false]
    });

    this.GetFamiliasArticulos();
  }

  GetFamiliasArticulos() {
    
      this.Familias = ArticulosFamilias;
    
  }

  Agregar() {
    this.AccionABMC = "A";
    this.FormReg.reset(this.FormReg.value);
  }
  
  // Buscar segun los filtros, establecidos en FormReg
 Buscar() {
    this.SinBusquedasRealizadas = false;

    this.articulosService
      .get(this.FormFiltro.value.Nombre, this.FormFiltro.value.Activo, this.Pagina)
      .subscribe((res: any) => {
        this.Lista = res.Lista;
        this.RegistrosTotal = res.RegistrosTotal;
      });
  }

  // Obtengo un registro especifico según el Id
  BuscarPorId(Dto, AccionABMC) {
    window.scroll(0, 0); // ir al incio del scroll
    this.AccionABMC = AccionABMC;
  }

  Consultar(Dto) {
    this.BuscarPorId(Dto, "C");
  }

  // comienza la modificacion, luego la confirma con el metodo Grabar
  Modificar(Dto) {
    if (!Dto.Activo) {
      alert("No puede modificarse un registro Inactivo.");
      return;
    }
    this.BuscarPorId(Dto, "M");
  }

  // grabar tanto altas como modificaciones
  Grabar() {
    alert("Registro Grabado!");
    this.Volver();
  }

  ActivarDesactivar(Dto) {
    var resp = confirm(
      "Esta seguro de " +
        (Dto.Activo ? "desactivar" : "activar") +
        " este registro?");
    if (resp === true)
      alert("registro activado/desactivado!");
  }

  // Volver desde Agregar/Modificar
  Volver() {
    this.AccionABMC = "L";
  }

  ImprimirListado() {
    alert('Sin desarrollar...');
  }

}
