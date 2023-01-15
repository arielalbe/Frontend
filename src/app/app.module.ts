import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { AcercaDeComponent } from './Componentes/acerca-de/acerca-de.component';
import { EducacionComponent } from './Componentes/educacion/educacion.component';
import { ExperienciasComponent } from './Componentes/experiencias/experiencias.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { AptitudesComponent } from './Componentes/aptitudes/aptitudes.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NewExperienciaComponent } from './Componentes/experiencias/new-experiencia.component';
import { HomeComponent } from './Componentes/home/home.component';
import { LoginComponent } from './Componentes/login/login.component';
import { EditExperienciaComponent } from './Componentes/experiencias/edit-experiencia.component';
import { NeweducacionComponent } from './Componentes/educacion/neweducacion.component';
import { EditeducacionComponent } from './Componentes/educacion/editeducacion.component';
import { ProyectoComponent } from './Componentes/proyecto/proyecto.component';
import { EditproyectoComponent } from './Componentes/proyecto/editproyecto.component';
import { NewproyectoComponent } from './Componentes/proyecto/newproyecto.component';
import { HysComponent } from './Componentes/hys/hys.component';
import { EditSkillComponent } from './Componentes/hys/edit-skill.component';
import { NewSkillComponent } from './Componentes/hys/new-skill.component';
import { interceptorProvider } from './service/interceptor-service';
import { HeaderFormsComponent } from './Componentes/header-forms/header-forms.component';
import { EditAcercaDeComponent } from './Componentes/acerca-de/edit-acerca-de.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    EducacionComponent,
    ExperienciasComponent,
    FooterComponent,
    AptitudesComponent,
    NewExperienciaComponent,
    HomeComponent,
    LoginComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    ProyectoComponent,
    EditproyectoComponent,
    NewproyectoComponent,
    HysComponent,
    EditSkillComponent,
    NewSkillComponent,
    HeaderFormsComponent,
    EditAcercaDeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
