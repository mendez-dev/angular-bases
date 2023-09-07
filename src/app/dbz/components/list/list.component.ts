import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }]

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  emitDeleteCharacter(id?: string): void {
    if (!id) return;
    console.log(id);
    this.onDeleteCharacter.emit(id);

  }

}
