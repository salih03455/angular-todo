import { Component, OnInit, ViewEncapsulation } from '@angular/core';

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
  foods: Food[] = [
    {value: 'azalan', viewValue: 'Puana Göre (Azalan)'},
    {value: 'artan', viewValue: 'Puana Göre (Artan)'}
  ];
  constructor() {}

  ngOnInit() {}
}
