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
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { interceptorProvider } from './servicios/interceptor-service';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion/edit-educacion.component';
import { EditAcercaComponent } from './componentes/acerca/edit-acerca.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { EditbannerComponent } from './componentes/navbar/editbanner.component';


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
    FooterComponent,
    HomeComponent,
    LoginComponent,
    EditExperienciaComponent,
    EditEducacionComponent,
    EditAcercaComponent,
    EditbannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    
  ],
  providers: [EdicionService,
  interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
