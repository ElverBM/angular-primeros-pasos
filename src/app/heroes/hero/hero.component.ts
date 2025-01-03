import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'batman';
  public age: number = 35;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${ this.name } - ${ this.age }`;
  }


  changeHero():void{
    this.name = 'Spiterman';
  }

  changeAge():void{
    this.age = 25;
  }

  resetForm():void{
    this.name = 'batman';
    this.age = 35;
  }

}
