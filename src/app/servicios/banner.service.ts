import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Banner } from '../clase/banner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  URL = environment.URL + 'banner/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Banner[]>{
    return this.httpClient.get<Banner[]>(this.URL + 'list');
  }

  public detail(id: number): Observable<Banner>{
    return this.httpClient.get<Banner>(this.URL + `detail/${id}`);
  } 

  public update(id: number, banner: Banner): Observable<any>{
    return this.httpClient.put<any>(this.URL + `editar/${id}`, banner);
  }
}
