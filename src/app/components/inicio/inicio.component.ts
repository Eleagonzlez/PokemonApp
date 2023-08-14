import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  
  pokemones:any = [];
  
  constructor(private pokemonService:PokemonService){
    
      this.pokemonService.getPokemones().subscribe( (resp:any) => {
        console.log(resp.results);
        this.pokemones = resp.results;
      }) ;
  }

}
