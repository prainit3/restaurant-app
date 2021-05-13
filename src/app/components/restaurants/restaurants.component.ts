import { Component, OnInit } from '@angular/core';
import { SearchService } from './../../services/search.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  //takes the postcode entered in the form field and sends it to the service
  getRestaurants(restaurant) {
    this.searchService.getRestaurants(restaurant).subscribe(restaurant);
  }

}
