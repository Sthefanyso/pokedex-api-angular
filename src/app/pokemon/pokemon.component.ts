import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
    title = 'pokemon';
    pokemon: Pokemon = {} as Pokemon; 
    id: number = 1;
    id_max: number = 1008;

    constructor(private PokemonService: PokemonService){}

    ngOnInit(): void {
      this.loadPokemon();
    }
    loadPokemon(){
      this.PokemonService.getPokemonID(this.id).subscribe(
        {
          next: pokemon => this.pokemon = pokemon
        }
      );
    }

    ProximoPokemon(){
      if(this.id < this.id_max){
        this.id ++;
      }
      else{
        this.id = 1;
      }
      this.loadPokemon();
    }

    PokemonAnterior(){
      if(this.id > 1){
        this.id --;
      }
      else{
        this.id = this.id_max;
      }
      this.loadPokemon();
    }
    
    imagePokemon(): string{
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.id}.png`;;
    }

    abilitiesPokemon(){
      return this.pokemon.abilities.map(a => a.ability.name).join(' | ');
    }
   
    typesPokemon(){
      return this.pokemon.types.map(a => a.type.name).join(' | ');
    }

    NameStatsPokemon(){
      let name = this.pokemon.stats.map(a => a.stat.name);
      return name;
    }
    NumberStatsPokemon(){
      let number = this.pokemon.stats.map(a => a.base_stat);
      return number;
    }
   


  }


