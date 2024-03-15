import { Component, Output, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { v4 as uuid } from 'uuid';
import { Character } from './../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-character.component.html',
  styles: ``
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter = new EventEmitter<Character>();

  public character: Character = {
    id: uuid(),
    name: '',
    power: 0
  };
  emitCharacter():void{
    console.log(this.character);
    if ( this.character.name.length === 0 ) return;
    this.onNewCharacter.emit(this.character)

    this.character = {name:'', power:0 }
  }
}
