export class Vaga {
  public get salario(): number {
    return this._salario;
  }
  public set salario(value: number) {
    this._salario = value;
  }
  //atributos
  // private id:number;
  // private nome:string;
  // private foto: string;
  // private descricao: string;
  // private salario: number;

  // //construtor
  // constructor(id:number, nome:string, foto:string, descricao:string, salario:number ){
  //   this.id = id,
  //   this.nome = nome,
  //   this.descricao = descricao,
  //   this.salario = salario
  // }
  //metodo abreviado de criação de uma classe
  constructor(
    private id: number,
    private nome: string,
    private foto: string,
    private descricao: string,
    private _salario: number
  ) {}

  //construir os métodos públicos, usando os métodos de acessos (getter set)
  //usar abreviador dos getter set. seleciona e aperta na luz
  public getId(): number {
    return this.id;
  }
  getNome(): string {
    return this.nome;
  }
  setNome(nome: string): void {
    this.nome = nome;
  }
  getfoto(): string {
    return this.foto;
  }
  setfoto(foto: string): void {
    this.foto = foto;
  }
  getdescricao(): string {
    return this.descricao;
  }
  setdescricao(descricao: string): void {
    this.descricao = descricao;
  }
  getsalario(): number {
    return this.salario;
  }
  setsalario(salario: number): void {
    this.salario = salario;
  }
  //conversão BD <-> obj
  toMap():{[key:string]:any}{
    return {
      id: this.id,
      nome: this.nome,
      foto: this.foto,
     descricao: this.descricao,
     salario:this.salario
    }
  }
  //fromMap : BD => obj
  static fromMap(map:any):Vaga{
    return new Vaga(
      map.id,
      map.nome,
      map.foto,
      map.descricao,
      map.salario
    );
  }
  }


