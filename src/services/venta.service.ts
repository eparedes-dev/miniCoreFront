import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ventaService{

    private apiUrl = 'http://localhost:3000';
    constructor(private http: HttpClient) { }

    getVentas() {
        return this.http.get(`${this.apiUrl}/Ventas`);
      }
      
}