import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VentasResponse } from 'src/models/ventaResponse.model';

@Injectable({
    providedIn: 'root'
})

export class ventaService{

    private apiUrl = 'http://localhost:3000';
    constructor(private http: HttpClient) { }

    getVentas() {
        return this.http.get(`${this.apiUrl}/Ventas`);
      }

      getVentasByFecha(fechaInicio: string, fechaFin: string) {
        return this.http.post<VentasResponse>(`${this.apiUrl}/ventas/fecha`, { fechaInicio, fechaFin });
      }
      
}