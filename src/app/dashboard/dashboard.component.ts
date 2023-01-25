import { Component } from '@angular/core';
import {HeroService} from "../services/hero.service";
import {Hero} from "../classes/hero";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private heroService: HeroService) {
  }

  heroes:Hero[]

  ngOnInit(){
    this.heroService.getHeroes()
      .subscribe(data => {
        this.heroes = data.slice(0, 5)
      })
  }
}
