import { Component, OnInit } from '@angular/core';
import { MateriasService } from '../services/materias.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  busqueda = ''
  materias:any[] = []
  progreso:any = []

  constructor(private http:MateriasService) {

    this.http.materias('https://crustal-calories.000webhostapp.com/webServices/unq/materias.php').subscribe(res => {
      this.materias = res['data']
    })


    this.http.progreso('https://crustal-calories.000webhostapp.com/webServices/unq/progreso.php').subscribe(res => {
      this.progreso = res['data'][0]
      console.log(this.progreso)
    })

  }

  ngOnInit(): void {
  }

}
