import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { InicioComponent } from './inicio/inicio.component';
import { MateriaComponent } from './materia/materia.component';


const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'estadisticas', component: EstadisticasComponent},
  {path: 'materia/:materia', component:MateriaComponent},
  {path: 'panel-admin', component:AdminComponent},
  {path:'', component:InicioComponent},
  {path:'**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
