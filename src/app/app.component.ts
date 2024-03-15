import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './heros/hero/hero.component';
import { CounterComponent } from './Counter/counter.component'; // Importa CounterComponent como un módulo
import { MainPageComponent } from './dbz/pages/main-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent, HeroComponent, MainPageComponent], // Debería ser CounterModule en lugar de CounterComponent
  templateUrl: './app.component.html',
})
export class AppComponent {

}
