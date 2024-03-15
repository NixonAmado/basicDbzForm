import { Component } from '@angular/core';
import { ListComponent } from '../components/list/list.component';
import { AddCharacterComponent } from '../components/add-character/add-character.component';
import { dbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  standalone: true,
  imports: [ListComponent, AddCharacterComponent],
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor( private dbzService: dbzService ){}
  get characters() : Character[]  {
    return [...this.dbzService.characters]
  }
  onDeleteCharacter(id: string ) : void {
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter( character : Character ) : void{
    this.dbzService.AddCharacter(character);
  }
}
