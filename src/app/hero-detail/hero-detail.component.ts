import { Component, OnInit, Input } from '@angular/core'; // пояснить про Input, в доке нихуя не понятно
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  
  constructor() { }

  ngOnInit(): void {
  }

}
