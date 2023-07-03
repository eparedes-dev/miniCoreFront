import { Component } from '@angular/core';
import { vendedorService } from 'src/services/vendedor.service';


@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.component.html',
  styleUrls: ['./vendedores.component.css']
})

export class VendedoresComponent {
  vendedores: any = [];

  constructor( private vendedorService: vendedorService) {}

  ngOnInit(): void {
    this.vendedorService.getVendedores().subscribe(
      res => {
        this.vendedores = res;
      },
      err => console.log(err)
    );
  }


}
