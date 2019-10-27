import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { InitialStateInt } from 'src/app/store/reducers/movie.reducer';


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
}