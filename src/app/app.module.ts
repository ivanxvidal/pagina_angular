import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MiComponente } from './componentes/mi_componente/mi_componente.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';

@NgModule({
  declarations: [AppComponent, MiComponente, PeliculasComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
