import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute,NavigationEnd } from '@angular/router';

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
  currentPage: string
  constructor(private route:ActivatedRoute, private router:Router) {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.currentPage = this.route.root.firstChild.snapshot.data['name']
      }
    });
  }

  ngOnInit() {}

}
