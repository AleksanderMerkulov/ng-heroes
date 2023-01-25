import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

import {Hero} from "../classes/hero";
import {HeroService} from "../services/hero.service";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  // hero: Hero

  @Input() hero!:Hero

  constructor(private route: ActivatedRoute,
              private heroService: HeroService,
              private location: Location) {
  }

  ngOnInit(){
    this.getHero()
  }

  getHero(): void{
    const id = Number(this.route.snapshot.paramMap.get('id')!.valueOf())
    this.heroService.getHero(id)
      .subscribe(date => this.hero = date)
  }
}
