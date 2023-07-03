import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { VendedoresComponent } from "./components/vendedores/vendedores.component";
import { VentasComponent } from "./components/ventas/ventas.component";

const routes: Routes = [
    {path: '',redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'vendedores', component: VendedoresComponent},
    {path: 'ventas', component: VentasComponent}

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }


