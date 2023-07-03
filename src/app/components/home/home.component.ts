import { Component } from '@angular/core';
import { ventaService } from 'src/services/venta.service';
import { VentasResponse } from 'src/models/ventaResponse.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  ventas: any = [];
  montoTotal: number = 0;
  fechaInicio: Date | null = null;
  fechaFin: Date | null = null;

  constructor(private ventaService: ventaService) {}


  

  obtenerVentasPorFecha() {
    console.log('Entra');
    console.log(this.fechaInicio);
    console.log(this.fechaFin);

    if (this.fechaInicio && this.fechaFin) {
      const fechaInicioString = this.fechaInicio.toString();
      const fechaFinString = this.fechaFin.toString();
  
      this.ventaService.getVentasByFecha(fechaInicioString, fechaFinString)
        .subscribe((data: VentasResponse) => {
          this.ventas = data.ventas;
          this.montoTotal = data.montoTotal;
          console.log('Ventas:', this.ventas);
          console.log('Monto Total:', this.montoTotal);
        }, error => {
          console.error('Error al obtener las ventas:', error);
        });
    } else {
      console.log('Las fechas son nulas');
    }
    
  }

}
