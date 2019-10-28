import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AddMovieComponent, BottomSheet } from './add.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

@NgModule({
  imports: [ BrowserModule, MatRadioModule, MatInputModule, MatButtonModule, FormsModule, MatBottomSheetModule, MatIconModule],
  declarations: [ AddMovieComponent, BottomSheet ],
  entryComponents: [ BottomSheet ]
})

export class AddMovieModule {}