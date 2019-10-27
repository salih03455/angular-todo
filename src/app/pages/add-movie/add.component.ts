import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as Actions from '../../store/actions/actions';
import { Store } from '@ngrx/store';
import { InitialStateInt } from 'src/app/store/reducers/movie.reducer';
import { Movie } from '../../models/movie.model'

/* Aşağıdan açılır popup: */
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-add-component',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddMovieComponent implements OnInit {

  movieType: string;
  movieName: string;
  movieRate: number;

  constructor(private store: Store<InitialStateInt>, private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }

  ngOnInit() {}

  generateId () {
    return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase()
  }

  addMovie () {
    const movie:Movie = {
      id: this.generateId(),
      movieType: this.movieType,
      movieName: this.movieName,
      movieRate: this.movieRate,
    }
    this.store.dispatch({ type: Actions.MOVIE_ADD, payload: movie })
    this.openBottomSheet()
  }

}

@Component({
  selector: 'bottom-sheet',
  templateUrl: 'bottom-sheet.html',
})
export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
