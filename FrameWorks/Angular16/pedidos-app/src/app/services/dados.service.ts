import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { Produto } from '../models/produto.model';
import { Pedido } from '../models/pedido.model';

@Injectable({
<<<<<<< HEAD
  providedIn: 'root'
=======
  providedIn: 'root',
>>>>>>> c4eecf554652774b349986992c6f6f04ffc98ba4
})
export class DadosService {
  private clientes: Cliente[] = [];
  private produtos: Produto[] = [];
  private pedidos: Pedido[] = [];

<<<<<<< HEAD
  constructor() { }
=======
  constructor() {}
>>>>>>> c4eecf554652774b349986992c6f6f04ffc98ba4

  //métodos: add -> get
  getClientes(): Cliente[] {
    return this.clientes;
  }
<<<<<<< HEAD
  getProdutos(): Produto[]{
    return this.produtos;
  }
  getPedidos(): Pedido[]{
    return this.pedidos;
  }
 addCliente(cliente:Cliente): void{
  this.clientes.push(cliente);
 }
 addProduto(produto:Produto):void{
  this.produtos.push(produto);
 }
 addPedido(pedido:Pedido):void{
  this.pedidos.push(pedido);
 }

}

=======

  getProdutos(): Produto[]{
    return this.produtos;
  }

  getPedidos(): Pedido[] {
    return this.pedidos;
  }

  addCliente(cliente:Cliente): void{
    this.clientes.push(cliente);
  }

  addProduto(produto:Produto):void{
    this.produtos.push(produto);
  }

  addPedido(pedido:Pedido):void{
    this.pedidos.push(pedido);
  }
}
>>>>>>> c4eecf554652774b349986992c6f6f04ffc98ba4
