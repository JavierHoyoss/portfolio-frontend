import { Component, OnInit, Input} from '@angular/core';
import { Experiencia } from '../../clase/experiencia';
import { EdicionService } from '../../servicios/edicion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {
  @Input() experiencia: Experiencia | undefined;
  experiencias: Experiencia[] = [];

  title: string | undefined;
  description: string | undefined;  
  experienciaseleccionada: Experiencia | undefined;

  constructor(public edicionService:EdicionService) {
    
   }

  ngOnInit(): void {
    this.experiencias = this.edicionService.mostrar();
  }

  agregar(newTitle: HTMLInputElement, newDescription: HTMLTextAreaElement) {
    this.edicionService.agregar({
      title: newTitle.value,
      description: newDescription.value,
      id: this.experiencias.length + 1
    })
    newTitle.value = '';
    newDescription.value = '';
    return false;
  }

  borrar(experiencia: Experiencia) {
    if(confirm('¿Estás seguro de eliminar estos datos?')) {
      this.edicionService.borrar(experiencia);
    }
  }
  editar(experiencia: Experiencia){
    }
    

  
  }