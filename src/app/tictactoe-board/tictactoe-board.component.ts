import { Component, OnInit, EventEmitter } from '@angular/core';
import { WinnerDataService } from '../winner-data.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { kMaxLength } from 'buffer';
import { GameData } from '../game-data';

@Component({
  selector: 'app-tictactoe-board',
  templateUrl: './tictactoe-board.component.html',
  styleUrls: ['./tictactoe-board.component.css']
})
export class TictactoeBoardComponent implements OnInit {
  winnerData:GameData[];
  onInitialized = new EventEmitter<TictactoeBoardComponent>();
  boardState: string[];
  xIsNextPiece = true;
  selectedSquare:boolean[];
  isWin = false;
  isPaused = false;
  winner:string;
  xname:string;
  oname:string;

  applyForm = new FormGroup({
    xName: new FormControl(''),
    oName: new FormControl('')
  });

  constructor(public data: WinnerDataService){
    this.boardState = ['','','','','','','','',''];
    this.selectedSquare = [true,false,false,false,false,false,false,false,false];
  }

  ngOnInit(){

  }

  submitNames(){
    this.xname = this.applyForm.value.xName!;
    this.oname = this.applyForm.value.oName!;

  }

  submitWinner(){
    console.log(this.oname,this.xname,this.winner);
    this.data.addWinner(this.xname,this.oname,this.winner);
    this.winnerData = this.data.getWinner();
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
      this.isPaused = true;
    }
    else if(gesture == "Two Hands Pointing"){
      this.isPaused= false;
    }
    else if(gesture == "Open Hand and Closed Hand"){
      this.boardState = ['','','','','','','','',''];
      this.isWin=false;
      this.xIsNextPiece = true;
    }
    else if(gesture == "Pointing Hand and Closed Hand"){
      this.placePiece();
    }
  }

  select(direction:string){
    if(this.isWin || this.isPaused){
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
      if(winner == 'x'){
        this.winner = this.xname;
      }
      else{
        this.winner = this.oname;
      }
    this.submitWinner();


    }
  }

  


}
