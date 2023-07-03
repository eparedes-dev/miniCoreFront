import { Component } from '@angular/core';
import { ventaService } from 'src/services/venta.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent {
  ventas: any = [];

  constructor( private ventaService: ventaService) {}

  ngOnInit(): void {
    this.ventaService.getVentas().subscribe(
      res => {
        this.ventas = res;
      },
      err => console.log(err)
    );
  }
}
