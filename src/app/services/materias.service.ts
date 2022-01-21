import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  urlMateria = 'https://crustal-calories.000webhostapp.com/webServices/unq/materia.php?materia='
  urlModifMateria = 'https://crustal-calories.000webhostapp.com/webServices/unq/cambiarDatos.php'

  constructor(private http: HttpClient) { }


  materias(url){
    return this.http.get(url)
  }

  progreso(url){
    return this.http.get(url)
  }

  infoMateria(url){
    return this.http.get(url)
  }

  areas(url){
    return this.http.get(url)
  }

  org(url){
    return this.http.get(url)
  }

  materia(materia){
    return this.http.get(this.urlMateria + materia)
  }

  modificarMateria(datoPost){
    return this.http.post(this.urlModifMateria, datoPost)
  }

}
