import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
<<<<<<< HEAD
  styleUrls: ['./cliente-form.component.scss'],
=======
  styleUrls: ['./cliente-form.component.scss']
>>>>>>> c4eecf554652774b349986992c6f6f04ffc98ba4
})
export class ClienteFormComponent {
  nome: string = "";

<<<<<<< HEAD
  constructor(private dadosService: DadosService) {}

  //método
salvarCliente(){
  const cliente = new Cliente(this.dadosService.getClientes().length+1,this.nome);
  this.dadosService.addCliente(cliente); //adicionando o obj ao meu vetor []
  this.nome="";
  alert('Cliente Salvo com Sucesso!!!');
}
=======
  constructor(private dadosService : DadosService){}

    //método
    salvarCliente(){
      const cliente = new Cliente(this.dadosService.getClientes().length+1,this.nome); //objeto
      this.dadosService.addCliente(cliente); //adicionando o obj no vetor cliente
      this.nome="";
      alert("Usuário Salvo com Sucesso!!!");
    }
>>>>>>> c4eecf554652774b349986992c6f6f04ffc98ba4
}
