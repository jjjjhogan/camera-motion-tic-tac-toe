import { Injectable } from '@angular/core';
import { GameData } from './game-data';

@Injectable({
  providedIn: 'root'
})
export class WinnerDataService {
  winnerData:GameData[] = [];


  constructor() {}

  addWinner(name1:string, name2:string, winner:string){
    this.winnerData.push(new GameData(name1,name2,winner));
  }

  getWinner(){
    return this.winnerData;
  }

  clearWinner(){
    this.winnerData = [];
  }
}



