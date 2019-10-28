import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { InitialStateInt } from 'src/app/store/reducers/movie.reducer';
import * as MovieActions from '../../store/actions/movie.actions';

/* Aşağıdan açılır popup: */
import { MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListMovieComponent implements OnInit {
  movieList$: Observable<Array<any>>
  displayedColumns: string[] = ['name', 'rate', 'rateChange'];

  constructor(private store: Store<InitialStateInt>, private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheet);
  }

  ngOnInit() {
    this.movieList$ = this.store.select('movieStore', 'sort')
  }

  deleteMovie(event, movie) {
    this._bottomSheet.open(BottomSheet, {
      data: movie
    });
  }

  increase(event, rate) {
    rate +=1
    this.store.dispatch({ type: MovieActions.RATE_CHANGE, payload: {id: event.target.id, rate} })
  }

  decrease(event, rate) {
    rate -=1
    this.store.dispatch({ type: MovieActions.RATE_CHANGE, payload: {id: event.target.id, rate} })
  }
}

@Component({
  selector: 'bottom-sheet',
  templateUrl: 'bottom-sheet.html',
})
export class BottomSheet {
  constructor(private store: Store<InitialStateInt>, private _bottomSheetRef: MatBottomSheetRef<BottomSheet>, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {}

  isDelete(event: MouseEvent, data, status): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
    status && this.store.dispatch({ type: MovieActions.MOVIE_DELETE, payload: data.id })
  }
}