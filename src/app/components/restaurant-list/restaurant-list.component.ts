import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './../../Restaurant';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  @Input() restaurant: Restaurant

  constructor() { }

  ngOnInit(): void {
  }

}
