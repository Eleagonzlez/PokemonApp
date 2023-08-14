import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = environment.url;
  
  constructor(private http:HttpClient) { }

  getPokemones(){
   return  this.http.get(`${this.baseUrl}`);
  }
  
}
