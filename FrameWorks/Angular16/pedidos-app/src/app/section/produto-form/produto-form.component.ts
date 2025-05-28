import { Component } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
<<<<<<< HEAD
  styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent {
  nome : string = '';
  preco : number = 0;

  constructor(private dadosService:DadosService){}
    //método
    salvarProduto(){
      const produto = new Produto(
        this.dadosService.getProdutos().length+1,
        this.nome,
        this.preco
      )
      this.dadosService.addProduto(produto);
      this.nome="";
      this.preco=0;
      alert("Produto Cadastrado com Sucesso!!!")
    }
=======
  styleUrls: ['./produto-form.component.scss'],
})
export class ProdutoFormComponent {
  nome: string = '';
  preco: number = 0;

  constructor(private dadosServices: DadosService) {}

  //método
  salvarProduto() {
    const produto = new Produto(
      this.dadosServices.getProdutos().length + 1,
      this.nome,
      this.preco
    );
    this.dadosServices.addProduto(produto);
    this.nome = '';
    this.preco = 0;
    alert("Produto Cadastrado com Sucesso!!!")
  }
>>>>>>> c4eecf554652774b349986992c6f6f04ffc98ba4
}
