import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/clase/educacion';
import { SEducacionService } from 'src/app/servicios/s-educacion.service';
import { TokenService } from 'src/app/servicios/token.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  educaciones: Educacion[] = [];
  nombreE: string = '';
  descripcionE: string = '';

  constructor(
    private sEducacion: SEducacionService,
    private tokenService: TokenService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.sEducacion.lista().subscribe((data) => {
      this.educaciones = data;
    });
  }

  delete(id?: number){
    
    if(id != undefined){
      if(confirm('¿Estás seguro de eliminar estos datos?')) {
      this.sEducacion.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo borrar la educacion");
        }
        
      )
    }
    }
  }
  onCreate(): void{
    const educacion = new Educacion(this.nombreE, this.descripcionE);
    this.sEducacion.save(educacion).subscribe(
      data => {
        alert("Educacion añadida"); 
        this.cargarEducacion();               
      }, err => {
        alert("Falló al añadir educacion");        
      }
    )
  }
}
