import { Component, OnInit } from '@angular/core';
import { WinnerDataService } from '../winner-data.service';
import { GameData } from '../game-data';

@Component({
  selector: 'app-winner-panel',
  templateUrl: './winner-panel.component.html',
  styleUrls: ['./winner-panel.component.css']
})
export class WinnerPanelComponent implements OnInit {
  winnerData:GameData[];
  constructor(public winners: WinnerDataService){

  }

  ngOnInit(){
    this.winnerData = this.winners.getWinner();

  }

}
