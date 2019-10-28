import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { InitialStateInt } from 'src/app/store/reducers/movie.reducer';
import { Movie } from '../../models/movie.model'
import * as Actions from '../../store/actions/actions';

/* Aşağıdan açılır popup: */
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

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
    this.movieList$ = this.store.select('store', 'movieList')
  }

  deleteMovie(event) {
    this.openBottomSheet()
    //this.store.dispatch({ type: Actions.MOVIE_DELETE, payload: event.target.id })
  }

  increase(event, rate) {
    rate +=1
    this.store.dispatch({ type: Actions.RATE_CHANGE, payload: {id: event.target.id, rate} })
  }

  decrease(event, rate) {
    rate -=1
    this.store.dispatch({ type: Actions.RATE_CHANGE, payload: {id: event.target.id, rate} })
  }
}



@Component({
  selector: 'bottom-sheet',
  templateUrl: 'bottom-sheet.html',
})
export class BottomSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}