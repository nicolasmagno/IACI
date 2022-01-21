import { HttpParams } from '@angular/common/http';
import { Component, Inject} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MateriasService } from 'src/app/services/materias.service';

@Component({
  selector: 'app-dialog-materia',
  templateUrl: './dialog-materia.component.html',
  styleUrls: ['./dialog-materia.component.css']
})
export class DialogMateriaComponent {

  materiaForm = new FormGroup({
    'nombre': new FormControl('', [Validators.required]),
    'info': new FormControl('', [Validators.required]),
    'nota': new FormControl('', [Validators.required])
  })

  constructor(public dialogRef: MatDialogRef<DialogMateriaComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private http:MateriasService) {

    this.materiaForm.controls.nombre.setValue(data.nombre)
    this.materiaForm.controls.info.setValue(data.info)
    this.materiaForm.controls.nota.setValue(data.nota)

  }

  onSubmit(){

    const params = new HttpParams()
    .set('id', this.data.id)
    .set('nombre', this.materiaForm.value.nombre)
    .set('info', this.materiaForm.value.info)
    .set('nota', this.materiaForm.value.nota)
  
    this.http.modificarMateria(params).subscribe(res => {

      this.dialogRef.close(true)
      console.log('materia modificada')
      //this.mostrarSnackbar('Trabajo modificado')
    
    }, error => {
      //this.mostrarSnackbar('Ocurrio on error')
      console.log('Error al modificar')
      this.dialogRef.close(false)
    })
  
    
  }

  onNoClick(){
    this.dialogRef.close(false);
  }

}
