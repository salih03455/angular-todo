import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListMovieComponent } from './list-movie.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [ BrowserModule, MatButtonModule, FormsModule, MatTableModule ],
  declarations: [ ListMovieComponent ]
})
export class ListMovieModule {}