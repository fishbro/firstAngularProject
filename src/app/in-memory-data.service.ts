import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 1, name: 'Super Kek'},
      {id: 2, name: 'Super Pek'},
      {id: 3, name: 'Igor Nikolaev'},
      {id: 4, name: 'Vipjem Za Lubov'},
      {id: 5, name: 'Kak Prekrasny Sejchas Tvoi Glaza'},
      {id: 6, name: 'Stul'},
      {id: 7, name: 'Stol'},
      {id: 8, name: 'Devyat'},
      {id: 9, name: 'Dumbledor'},
      {id: 10, name: 'Semyon'}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}