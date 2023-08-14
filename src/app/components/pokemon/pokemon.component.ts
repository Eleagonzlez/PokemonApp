import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {

  pokemones:any = [] 

  constructor(private PokemonService: PokemonService){
    this.PokemonService.getPokemones().subscribe((resp:any) => {
      this.pokemones = resp.results;
    });
  }

}
