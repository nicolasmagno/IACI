import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './inicio/inicio.component';
import { RootNavComponent } from './root-nav/root-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DialogMateriaComponent } from './dialogs/dialog-materia/dialog-materia.component';
import { ReactiveFormsModule } from '@angular/forms';

//angular material
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { MateriasService } from './services/materias.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MateriaComponent } from './materia/materia.component';
import { AdminComponent } from './admin/admin.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RootNavComponent,
    EstadisticasComponent,
    MateriaComponent,
    AdminComponent,
    DialogMateriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressBarModule,
    NgxChartsModule,
    MatIconModule,
    MatDialogModule,
    MatListModule
  ],
  providers: [MateriasService],
  entryComponents:[DialogMateriaComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
