import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaComponent } from './componentes/acerca/edit-acerca.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion/edit-educacion.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'editexp/:id', component:EditExperienciaComponent},
  {path:'editeducacion/:id', component:EditEducacionComponent},
  {path:'editacerca/:id', component:EditAcercaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
