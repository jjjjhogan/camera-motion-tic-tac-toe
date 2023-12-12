import { Component, OnInit, ViewChild } from '@angular/core';
import { PredictionEvent } from '../prediction-event';
import { TictactoeBoardComponent } from '../tictactoe-board/tictactoe-board.component';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {
  @ViewChild(TictactoeBoardComponent) Child :TictactoeBoardComponent;
  gesture: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  prediction(event: PredictionEvent){
    this.gesture = event.getPrediction();
    this.Child.parseCommand(this.gesture);
  }

}
