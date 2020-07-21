import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { Observable } from "rxjs";
import { ArticuloFamilia } from "../models/articulo-familia";

@Injectable({
  providedIn: "root"
})

export class ArticulosFamiliasService {
  resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    this.resourceUrl = "http://labsys.frc.utn.edu.ar:8080/api/ArticulosFamilias";
  }

  get(): Observable<ArticuloFamilia[]> {
    return this.httpClient.get<ArticuloFamilia[]>(this.resourceUrl);
  }
}
