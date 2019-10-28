import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-theme-settings',
  templateUrl: './theme-settings.component.html',
  styleUrls: ['./theme-settings.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ThemeSettingsComponent implements OnInit {

  constructor() {}

  settings:boolean = false

  ngOnInit() {}

  toggleSettings() {
    this.settings = !this.settings
  }

}
