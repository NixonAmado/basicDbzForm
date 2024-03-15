import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: 'app-counter',
  template: `
  <h1>
        Counter ({{ counter }})
    </h1>

    <button (click)="IncreaseBy()"> SUMAR 1</button>
    <button (click)="Reset()"> SUMAR 1</button>
    <button (click)="DecreseBy(2)"> RESTAR 1</button>
`
  })
export class CounterComponent{
  public counter:number = 10;
  IncreaseBy() : void {
    this.counter += 1;
  }
  DecreseBy(value:number):void {
    this.counter -= value;
  }
  Reset():void{
    this.counter = 10;
  }
}
