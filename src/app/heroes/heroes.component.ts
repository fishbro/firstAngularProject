import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[]; // не понятно что это
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  // getHeroes(): void { //synchronosly
  //   this.heroes = this.heroService.getHeroes();
  // }

  getHeroes(): void { //asynchronosly
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
