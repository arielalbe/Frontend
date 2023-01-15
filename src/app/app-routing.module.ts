import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewExperienciaComponent } from './Componentes/experiencias/new-experiencia.component';
import { HomeComponent } from './Componentes/home/home.component';
import { LoginComponent } from './Componentes/login/login.component';
import { EditExperienciaComponent } from './Componentes/experiencias/edit-experiencia.component';
import { NeweducacionComponent } from './Componentes/educacion/neweducacion.component';
import { EditeducacionComponent } from './Componentes/educacion/editeducacion.component';
import { NewproyectoComponent } from './Componentes/proyecto/newproyecto.component';
import { EditproyectoComponent } from './Componentes/proyecto/editproyecto.component';
import { NewSkillComponent } from './Componentes/hys/new-skill.component';
import { EditSkillComponent } from './Componentes/hys/edit-skill.component';
import { EditAcercaDeComponent } from './Componentes/acerca-de/edit-acerca-de.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent},
  { path: 'editexp/:id', component: EditExperienciaComponent},
  { path: 'nuevaedu', component: NeweducacionComponent},
  { path: 'editedu/:id', component: EditeducacionComponent},
  { path: 'nuevopro', component: NewproyectoComponent},
  { path: 'editpro/:id', component: EditproyectoComponent},
  { path:'newskill', component: NewSkillComponent},
  { path: 'editskill/:id', component: EditSkillComponent},
  { path: 'editacercade/:id', component: EditAcercaDeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
