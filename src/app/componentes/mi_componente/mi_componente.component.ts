import { Component } from '@angular/core';

@Component({
  selector: 'mi-componente',
  templateUrl: './mi_componente.component.html',
})
export class MiComponente {
  public titulo: string;
  public lorem: string;
  public year: number;

  constructor() {
    this.titulo = 'Hola mundo este es mi componente  >:)';
    this.lorem = 'Lorem mkmkmkm';
    this.year = 2022;
    console.log('Componente mi-compoente Cargado!');
  }
}
