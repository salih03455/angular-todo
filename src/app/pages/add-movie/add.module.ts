import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AddMovieComponent } from './add.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ BrowserModule, MatRadioModule, MatInputModule, MatButtonModule, FormsModule],
  declarations: [ AddMovieComponent ]
})
export class AddMovieModule {}