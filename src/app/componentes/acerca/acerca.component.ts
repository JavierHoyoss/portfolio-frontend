import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/clase/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {
  persona: persona=new persona("","","");

  constructor(public personaService:PersonaService) {

   }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data=> {this.persona=data})
  }

}
