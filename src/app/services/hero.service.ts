import { Injectable } from '@angular/core';
import {Hero, HEROES} from "../classes/hero";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[]{
    return HEROES
  }
}
