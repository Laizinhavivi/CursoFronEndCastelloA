import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //solicitações http (GET/POST/PUT/DELETE)
import { Observable } from 'rxjs'; // classe que traduz os dados da API <-> OBJ
import { Vaga } from '../models/vaga.model';

@Injectable({
  providedIn: 'root',
})
export class VagaService {
  //atributos - endereço da API
  private apiUrl = "http://localhost:3007/vagas"; //caminho para API

  constructor(private http: HttpClient) {}
  // ao instanciar o obj da classe , cria-se a conexão com o httpClient

  //métodos de Conexão
  //GET -> obtem a Lista de Vagas a partir da API
  //nome do método()
  getVagas(): Observable<Vaga[]> { //biblioteca da rxjs -> traduzir os dados da API <-> OBJ
    return this.http.get<Vaga[]>(this.apiUrl);
  }

  //POST -> Cadastra uma Vaga na API
  postVaga(vaga: Vaga): Observable<Vaga[]> {
    return this.http.post<Vaga[]>(this.apiUrl, vaga);
  }

  // PUT -> Atualizar Vaga Existente na API
  putVaga(id: any, vaga: Vaga): Observable<Vaga[]> {
    const apiUrlFinal = `${this.apiUrl}/${id}`;
    return this.http.put<Vaga[]>(apiUrlFinal, vaga);
  }

  //DELETE -> Deleta a vaga existente na API
  deleteVaga(id:any): Observable<Vaga[]> {
    const apiUrlFinal = `${this.apiUrl}/${id}`;
    return this.http.delete<Vaga[]>(apiUrlFinal);
  }
}
