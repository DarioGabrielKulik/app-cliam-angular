import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  constructor(private http:HttpClient) {
   }

   getClima(ciudad:string):Observable<any>{
   let url:string = 'https://api.openweathermap.org/data/2.5/weather?q='+ ciudad +'&appid=';
   let key:string = 'd82440d6a3a1d5fee9a0a24660c03728';
    const URL = url + key;
    return this.http.get(URL);
   }
}
