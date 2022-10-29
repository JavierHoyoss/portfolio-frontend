import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Banner } from 'src/app/clase/banner';
import { BannerService } from 'src/app/servicios/banner.service';
import { ImageService } from 'src/app/servicios/image.service';

@Component({
  selector: 'app-editbanner',
  templateUrl: './editbanner.component.html',
  styleUrls: ['./editbanner.component.css']
})
export class EditbannerComponent implements OnInit {

  banner: Banner= null;

  constructor(private bannerService:BannerService,private activatedRouter: ActivatedRoute,
    private router: Router,public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.bannerService.detail(id).subscribe(
      data =>{
        this.banner = data;
      }, err =>{
        alert("Error al modificar la imagen del banner");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.banner.img = this.imageService.url
      this.bannerService.update(id, this.banner).subscribe(
        data => {
          this.router.navigate(['']);
        }, err =>{
           alert("Error al modificar la imagen del banner");
           this.router.navigate(['']);
        }
      )
  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name ="banner_" + id;
    this.imageService.uploadImageBanner($event,name)
  }

}
