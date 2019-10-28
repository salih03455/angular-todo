import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';
import { InitialStateInt } from '../store/reducers/movie.reducer';
import * as MovieActions from '../store/actions/movie.actions';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  currentPage: string
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private store: Store<InitialStateInt>
  ){
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.currentPage = this.route.root.firstChild.snapshot.data['name']
      }
    });
  }

  ngOnInit() {}

  selectMovieType(event) {
    this.store.dispatch({ type: MovieActions.FILTER, payload: event.value })
  }

}
