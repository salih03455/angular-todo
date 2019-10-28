import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ThemeActions from '../store/actions/theme.actions';

@Component({
  selector: 'app-theme-settings',
  templateUrl: './theme-settings.component.html',
  styleUrls: ['./theme-settings.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ThemeSettingsComponent implements OnInit {

  constructor(private store: Store<string>) {}

  settings:boolean = false
  colorList:Array<string> = ['primary', 'accent', 'warn']
  currentColor$: Observable<string>

  ngOnInit() {
    this.currentColor$ = this.store.select('themeStore', 'color')
  }

  toggleSettings() {
    this.settings = !this.settings
  }

  changeThemeColor (event, color) {
    this.currentColor$ = color
    console.log(color)
    this.store.dispatch({ type: ThemeActions.CURRENT_COLOR, payload: color })
  }
}
