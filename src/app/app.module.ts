import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './componentes/header/header.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { EdicionService } from './servicios/edicion.service';
import { FormsModule } from '@angular/forms';
import { HardsoftskillComponent } from './componentes/hardsoftskill/hardsoftskill.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaComponent,
    NavbarComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardsoftskillComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [EdicionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
