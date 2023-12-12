import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tictactoe-board',
  templateUrl: './tictactoe-board.component.html',
  styleUrls: ['./tictactoe-board.component.css']
})
export class TictactoeBoardComponent implements OnInit {
  onInitialized = new EventEmitter<TictactoeBoardComponent>();
  boardState: string[];
  xIsNextPiece = true;
  selectedSquare:boolean[];
  isWin = false;


  constructor(){
    this.boardState = ['','','','','','','','',''];
    this.selectedSquare = [true,false,false,false,false,false,false,false,false];
  }

  ngOnInit(){

  }

  addState(i: number, value:string){
    this.boardState[i]=value;

  }

  parseCommand(gesture:string){
    if(gesture == "Open Hand"){
      this.select('r');
    }
    else if(gesture == "Two Open Hands"){
      this.select('l');
    }
    else if(gesture == "Closed Hand"){
      this.select('u');
    }
    else if(gesture == "Two Closed Hands"){
      this.select('d');
    }
    else if(gesture == "Hand Pointing"){
      this.placePiece();
    }
    else if(gesture == "Two Hands Pinching"){
      this.boardState = ['','','','','','','','',''];
      this.isWin=false;
    }
  }

  select(direction:string){
    if(this.isWin){
      return;
    }
    let selected = this.selectedSquare.indexOf(true);
    this.selectedSquare[selected]=false;
    if(direction=='r'){
      selected += 1;
    }
    else if(direction=='l'){
      selected-= 1;
    }
    else if(direction=='u'){
      selected -=3;
    }
    else if(direction=='d'){
      selected +=3;
    }
    if(selected>8){
      selected = selected-9;
    }
    else if(selected<0){
      selected = 9+selected;
    }
    this.selectedSquare[selected]=true;
    
  }
  checkWinner() {
    // Check rows
    for (let i = 0; i < 9; i += 3) {
        if (this.boardState[i] !== '' && this.boardState[i] === this.boardState[i + 1] && this.boardState[i] === this.boardState[i + 2]) {
            return this.boardState[i];
        }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
        if (this.boardState[i] !== '' && this.boardState[i] === this.boardState[i + 3] && this.boardState[i] === this.boardState[i + 6]) {
            return this.boardState[i];
        }
    }

    // Check diagonals
    if (this.boardState[0] !== '' && this.boardState[0] === this.boardState[4] && this.boardState[0] === this.boardState[8]) {
        return this.boardState[0];
    }
    if (this.boardState[2] !== '' && this.boardState[2] === this.boardState[4] && this.boardState[2] === this.boardState[6]) {
        return this.boardState[2];
    }

    return null; // No winner yet
  }



  placePiece(){

    let selected = this.selectedSquare.indexOf(true);
    if(this.boardState[selected] == ''){
      this.boardState[selected] = this.xIsNextPiece ? 'x': 'o';
      this.xIsNextPiece = !this.xIsNextPiece;
    }

    let winner = this.checkWinner();
    if(winner){
      console.log('winner: ' + winner );
      this.isWin = true;
    }

  }

  


}
