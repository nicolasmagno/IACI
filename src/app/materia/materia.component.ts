import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MateriasService } from '../services/materias.service';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {

  materia:any = []
  aprobada = 'Aprobada'

  constructor(private _ruta:ActivatedRoute, private materiaService: MateriasService) { }

  ngOnInit(): void {

    this._ruta.params.subscribe(params => {
      
      let materia = params['materia']

      this.materiaService.materia(materia).subscribe(res => {

        this.materia = res['data'][0]
        console.log(this.materia.aprobada)
        
        if(this.materia.aprobada == 'false'){
          this.aprobada = 'Sin aprobar'
        }

      })

    })

  }

}
