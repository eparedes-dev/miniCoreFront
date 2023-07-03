import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class vendedorService{

    private apiUrl = 'http://localhost:3000';
    constructor(private http: HttpClient) { }

    getVendedores() {
        return this.http.get(`${this.apiUrl}/Vendedores`);
      }
      
}