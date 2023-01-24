import { Component } from '@angular/core';
import {Hero, HEROES} from "../classes/hero";
import {HeroService} from "../services/hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  constructor(private heroService: HeroService) {
  }

  heroes: Hero[]

  getHeroes():void{
    this.heroes = this.heroService.getHeroes()
  }

  selectedHero: Hero | undefined;
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  ngOnInit(){
    this.getHeroes()
  }
}
