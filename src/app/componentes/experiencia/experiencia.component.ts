import { Component, OnInit, Input} from '@angular/core';
import { Experiencia } from '../../clase/experiencia';
import { EdicionService } from '../../servicios/edicion.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {
  @Input() experiencia: Experiencia | undefined;
  experiencias: Experiencia[] = [];

  title: string | undefined;
  description: string | undefined;  

  constructor(public edicionService:EdicionService) {
    
   }

  ngOnInit(): void {
    this.experiencias = this.edicionService.mostrar();
  }

  agregar(newTitle: HTMLInputElement, newDescription: HTMLTextAreaElement) {
    this.edicionService.agregar({
      title: newTitle.value,
      description: newDescription.value,
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
  ///agregarExperiencia(experiencia: Experiencia) {
    //console.log(experiencia);
    //this.edicionService.agregarExperiencia(experiencia);

  //}
}