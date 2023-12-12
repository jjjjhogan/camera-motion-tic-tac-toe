import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tictactoe-square',
  templateUrl: './tictactoe-square.component.html',
  styleUrls: ['./tictactoe-square.component.css']
})
export class TictactoeSquareComponent implements OnInit {
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();
  @Input() state: string;
  @Output() stateChange = new EventEmitter<string>();



  constructor(){
  }
  ngOnInit(): void {
    console.log(this.state);
    
  }

}
