import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { InitialStateInt } from 'src/app/store/reducers/movie.reducer';
import { Movie } from '../../models/movie.model'
import * as Actions from '../../store/actions/actions';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListMovieComponent implements OnInit {
  movieList$: Observable<Array<any>>
  displayedColumns: string[] = ['name', 'rate', 'rateChange'];

  constructor(private store: Store<InitialStateInt>) {}

  ngOnInit() {
    this.movieList$ = this.store.select('store', 'movieList')
  }

  deleteMovie(event) {
    //const newMovieList = this.movieList$.subscribe(par => par.filter(a => a['id'] != event.target.id))
    //console.log(newMovieList)
    this.store.dispatch({ type: Actions.MOVIE_DELETE, payload: event.target.id })
  }
}