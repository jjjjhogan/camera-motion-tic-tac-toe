import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiComponent } from './ui/ui.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HandtrackerComponent } from './handtracker/handtracker.component';
import { TictactoeBoardComponent } from './tictactoe-board/tictactoe-board.component';
import { TictactoeSquareComponent } from './tictactoe-square/tictactoe-square.component';
import { WinnerPanelComponent } from './winner-panel/winner-panel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UiComponent,
    HomePageComponent,
    HandtrackerComponent,
    TictactoeBoardComponent,
    TictactoeSquareComponent,
    WinnerPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
