import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tictactoe-square',
  templateUrl: './tictactoe-square.component.html',
  styleUrls: ['./tictactoe-square.component.css']
})
export class TictactoeSquareComponent implements OnInit {
  selectedPiece: string;


  constructor(){
    this.selectedPiece = '( )';
  }
  ngOnInit(): void {
    
  }
}
