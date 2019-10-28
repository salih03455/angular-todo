import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListMovieComponent, BottomSheet } from './list-movie.component';
import { FormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

@NgModule({
  imports: [ BrowserModule, MatButtonModule, FormsModule, CdkTableModule, MatTableModule, MatIconModule, AppRoutingModule, MatBottomSheetModule ],
  declarations: [ ListMovieComponent, BottomSheet ],
  entryComponents: [ BottomSheet ]
})
export class ListMovieModule {}