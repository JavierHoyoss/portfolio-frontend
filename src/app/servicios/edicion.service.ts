import { Injectable } from '@angular/core';
import { Experiencia } from '../clase/experiencia';

@Injectable({
  providedIn: 'root'
})
export class EdicionService {
  experiencias: Experiencia[] = [];

  constructor() {
    this.experiencias= [
        {title: "laboratorio", description:"trabaje ahi"},
        {title: "laboratorios1232", description:"trabaje ahi1231321"}
    ];

  }

  mostrar() {
    if(localStorage.getItem('experiencias') === null) {
      this.experiencias = [];
    } else {
     this.experiencias = JSON.parse(localStorage.getItem('experiencias') || '{}');
    }
    return this.experiencias;
  }

  agregar(experiencia: Experiencia) {
    this.experiencias.push(experiencia);
    let experiencias = [];
    if(localStorage.getItem('experiencias') === null) {
      experiencias = [];
      experiencias.push(experiencia);
      localStorage.setItem('tasks', JSON.stringify(experiencias));
    } else {
      experiencias = JSON.parse(localStorage.getItem('experiencias') || '{}');
      experiencias.push(experiencia); 
      localStorage.setItem('experiencias', JSON.stringify(experiencias));
    }
  }

  borrar(experiencia: Experiencia) {
    for (let i = 0; i < this.experiencias.length; i++) {
      if (experiencia == this.experiencias[i]) {
        this.experiencias.splice(i, 1);
        localStorage.setItem('experiencias', JSON.stringify(this.experiencias));
      }
    }
  }
}