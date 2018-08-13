import { Component, OnInit } from '@angular/core';
import {Heroes,Hero} from './hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	
  
  }
	heroes:Hero[] =Heroes;
	
	
	  selectedHero: Hero;
	onSelect(hero: Hero): void {
    	this.selectedHero = hero;
  	}
}
