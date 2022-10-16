import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/clase/persona.model';
import { ImageService } from 'src/app/servicios/image.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-edit-acerca',
  templateUrl: './edit-acerca.component.html',
  styleUrls: ['./edit-acerca.component.css']
})
export class EditAcercaComponent implements OnInit {
  persona: persona= null;

  constructor(private personaService:PersonaService,private activatedRouter: ActivatedRoute,
    private router: Router,public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
      this.personaService.detail(id).subscribe(
        data =>{
          this.persona = data;
        }, err =>{
          alert("Error al modificar los datos de la persona");
          this.router.navigate(['']);
        }
      )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.imageService.url
      this.personaService.update(id, this.persona).subscribe(
        data => {
          this.router.navigate(['']);
        }, err =>{
           alert("Error al modificar los datos de la persona");
           this.router.navigate(['']);
        }
      )
  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name ="perfil_" + id;
    this.imageService.uploadImage($event,name)
  }

}
