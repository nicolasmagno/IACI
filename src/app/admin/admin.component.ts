import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogMateriaComponent } from '../dialogs/dialog-materia/dialog-materia.component';
import { MateriasService } from '../services/materias.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  materias:any[] = []
  busqueda = ''

  constructor(private http:MateriasService, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.cargarMaterias()

  }

  cargarMaterias(){
    this.http.materias('https://crustal-calories.000webhostapp.com/webServices/unq/materias.php').subscribe(res => {
      this.materias = res['data']
    })
  }

  dialogMateria(materia){

    const dialog = this.dialog.open(DialogMateriaComponent, {
      data: {id: materia.id, nombre: materia.nombre, info: materia.info, nota: materia.nota}
    })

    dialog.afterClosed().subscribe(result => {
      
      if(result){
        this.cargarMaterias()
      }

    });

  }

}


