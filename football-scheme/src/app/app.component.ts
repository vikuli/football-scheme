import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
  CdkDragPreview,
} from '@angular/cdk/drag-drop';
import { Player } from './interfaces/player.interface';
import { Players } from './consts/players.const';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CdkDropList, CdkDrag, CdkDragPreview],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  players: Player[] = Players;

  fieldPosition1: Player[] = [];
  fieldPosition2: Player[] = [];
  fieldPosition3: Player[] = [];
  fieldPosition4: Player[] = [];
  fieldPosition5: Player[] = [];
  fieldPosition6: Player[] = [];
  fieldPosition7: Player[] = [];
  fieldPosition8: Player[] = [];
  fieldPosition9: Player[] = [];
  fieldPosition10: Player[] = [];
  fieldPosition11: Player[] = [];

  drop(event: CdkDragDrop<Player[]>) {
    console.log({ event });
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      if (this.checkLengthContainer(event)) {
        transferArrayItem(
          event.container.data,
          event.previousContainer.data,
          event.currentIndex ? 0 : 1,
          event.previousContainer.data.length
        );
      }
    }
  }

  dropToList(event: CdkDragDrop<Player[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  checkLengthContainer(event: CdkDragDrop<Player[]>) {
    return event.container.data.length > 1;
  }
}
