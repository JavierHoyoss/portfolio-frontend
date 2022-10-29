import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/clase/banner';
import { BannerService } from 'src/app/servicios/banner.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogged= false;

  banner:Banner=null;

  constructor(public bannerService: BannerService,private tokenService:TokenService) { }

  ngOnInit(): void {
    this.cargarBanner();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }
  
  cargarBanner(): void {
    this.bannerService.detail(1).subscribe((data) => {
      this.banner = data;
    });
  }

}
