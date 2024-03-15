import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-heros-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'IronMan';
  public  age: number = 52;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }
  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }
  ChangeName():void{
    this.name = 'spiderman';
  }

  ChangeAge(newAge:number):void{
    this.age = newAge;
  }
}
