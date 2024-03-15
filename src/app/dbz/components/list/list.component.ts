import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { Console } from 'console';

@Component({
  selector: 'dbz-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{
    name:'Trunks',
    power: 10
  }]

  @Output()
  onDelete = new EventEmitter<string>();

  OnDeleteCharacter(CharacterIndex: string | undefined) : void {
    debugger;
    this.onDelete.emit(CharacterIndex);
  }
}
