import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  //atributos
  nome: string = "";
  email: string = "";
  telefone: string = "";
  idade : number | null = null;
<<<<<<< HEAD
  profissao : string = "";
=======
  profissao: string = "";
>>>>>>> c4eecf554652774b349986992c6f6f04ffc98ba4

  //métodos
  limparDados(){
    this.nome = "";
    this.email = "";
    this.telefone = "";
    this.idade = null;
    this.profissao = "";
  }

  enviarDados(){
    const erros: string[] = [];

    //validação do nome
    if(this.nome.trim().length<3){
      erros.push("Nome Inválido!");
    }
<<<<<<< HEAD
    //validar o email
    if(!this.email.trim().includes("@")){
      erros.push("Email Inválido!");
    }
    //validar o telefone
    if(!this.telefone.trim()){
      erros.push("Telefone Inválido!");
    }
    if(this.idade===null || this.idade<18){
      erros.push("Idade Inválida");
    }
    //validar profissao
    if(!this.profissao.trim()){
      erros.push("Profissão Inválida");
=======
    //validação do email
    if(!this.email.trim().includes("@")){
      erros.push("Email Inválido!");
    }
    //validação do telefone
    if(!this.telefone.trim()){
      erros.push("Telefone Inválido!");
    }
    //validação de idade
    if(this.idade===null || this.idade<18){
      erros.push("Idade Inválida!");
    }
    //validação profissão
    if(!this.profissao.trim()){
      erros.push("Profissão Inválida!");
>>>>>>> c4eecf554652774b349986992c6f6f04ffc98ba4
    }

    //enviar
    if(erros.length>0){
<<<<<<< HEAD
      alert(`Erros no Formulário\n ${erros.join("\n")}`);
      return;
    } else{
      alert("Formulário Enviado com Sucesso");
      this.limparDados();
    }

  }

=======
      alert(`Erros no Formulário: \n ${erros.join("\n")}`);
      return;
    }else{
      alert("Formulário Enviado com Sucesso");
      this.limparDados();
    }
  }
>>>>>>> c4eecf554652774b349986992c6f6f04ffc98ba4
}
