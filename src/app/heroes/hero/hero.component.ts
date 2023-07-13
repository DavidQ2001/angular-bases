import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name :string = 'Iroman';
  public age: number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;

  }

  changeHero():void{
    this.name = 'Acuaman';
  }

  changeAge():void{
    this.age = 33;

  }

  resetForm():void{
    this.name = 'Ironman';
    this.age = 45;
  }

}