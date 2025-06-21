export class Curriculo {
  // método abreviado de criação de uma classe
  constructor(
    private id: number,
    private LinkedIn: string,
    private foto: string,
    private CPF: number,
    private experiência: string,
    private Formacao: string
  ) {}

  // métodos publicos( get set)
  public getId(): number {
    return this.id;
  }

  getLinkedIn(): string {
    return this.LinkedIn;
  }
  setLinkedIn(LinkedIn: string): void {
    this.LinkedIn = this.LinkedIn;
  }

  getfoto(): string {
    return this.foto;
  }
  setFoto(foto: string): void {
    this.foto = foto;
  }
  getCPF(): number {
    return this.CPF;
  }
  setCPF(CPF: number): void {
    this.CPF = this.CPF;
  }
  getexperiência(): string {
    return this.experiência;
  }
  setexperiência(experiência: number): void {
    this.experiência = this.experiência;
  }
  getFormacao(): string {
    return this.Formacao;
  }
  setFormacao(Formacao: string): void {
    this.Formacao = Formacao;
  }
}
