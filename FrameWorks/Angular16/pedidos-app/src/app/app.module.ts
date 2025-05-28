import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteFormComponent } from './section/cliente-form/cliente-form.component';
<<<<<<< HEAD
import { PedidoFormComponent } from './section/pedido-form/pedido-form.component';
import { ProdutoFormComponent } from './section/produto-form/produto-form.component';
=======
import { ProdutoFormComponent } from './section/produto-form/produto-form.component';
import { PedidoFormComponent } from './section/pedido-form/pedido-form.component';
>>>>>>> c4eecf554652774b349986992c6f6f04ffc98ba4
import { PedidosListComponent } from './section/pedidos-list/pedidos-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ClienteFormComponent,
<<<<<<< HEAD
    PedidoFormComponent,
    ProdutoFormComponent,
=======
    ProdutoFormComponent,
    PedidoFormComponent,
>>>>>>> c4eecf554652774b349986992c6f6f04ffc98ba4
    PedidosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
