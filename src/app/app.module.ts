import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PokemonComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
