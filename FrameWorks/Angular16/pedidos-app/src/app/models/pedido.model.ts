import { Cliente } from "./cliente.model";
import { Produto } from "./produto.model";

export class Pedido{
  constructor(
    public id: number,
<<<<<<< HEAD
    public cliente:Cliente,
    public produtos:Produto[],
    public desconto:number
  ){}
=======
    public cliente: Cliente,
    public produtos: Produto[],
    public desconto: number
  ){}

>>>>>>> c4eecf554652774b349986992c6f6f04ffc98ba4
  //método
  calcularTotal():number {
    const total = this.produtos.reduce(
      (acc,p) => acc +p.preco,0
    );
    return total - (total*(this.desconto/100));
  }
}
