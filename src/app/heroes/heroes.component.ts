import { Component } from '@angular/core';
import {Hero, HEROES} from "../classes/hero";
import {HeroService} from "../services/hero.service";
import {MessageService} from "../services/message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  heroes: Hero[]

  constructor(private heroService: HeroService,
              private messageService: MessageService) {
  }

  ngOnInit(){
    this.getHeroes()
  }

  getHeroes():void{
    this.heroService.getHeroes()
      .subscribe((heroes => this.heroes = heroes))
  }

  // selectedHero: Hero | undefined;
  // onSelect(hero: Hero): void{
  //   this.selectedHero = hero;
  //   this.messageService.add(`Selected hero: ${hero.name}`)
  // }

}
