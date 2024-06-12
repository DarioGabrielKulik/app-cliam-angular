import { Component } from '@angular/core';
import { ClimaService } from '../../service/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
imgUrl = '../../../assets/icono.png'
ciudad:string = '';
jquery:boolean = false;
loading:boolean = false;
temperatura:string = '';
humedad:string = '';
clouds:string = '';
errores:boolean = false;
constructor(private _climaService:ClimaService){}

obtenerClima(){
  this.loading = true;
  this._climaService.getClima(this.ciudad).subscribe(data => {
    this.loading = false;
    this.errores = false;
    this.temperatura = data.main.temp
    this.humedad = data.main.humidity
    this.clouds = data.wind.deg
    this.jquery = true;
    console.log(data)
  }, error =>{
    this.loading = false;
    this.errores = true; 
  });
}


}
