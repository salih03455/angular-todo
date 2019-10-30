import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: 'layout.component.html'
})
export class LayoutComponent implements OnInit {
  @Input() currentColor: string;
  constructor() {

  }

  ngOnInit() { 

  }

}