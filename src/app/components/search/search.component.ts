import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Restaurant } from './../../Restaurant';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() onSearchPostcode: EventEmitter<Restaurant> = new EventEmitter

    postcode: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    //simple verification that search field is not empty
    if(!this.postcode) {
      alert('Please Type a Postcode')
      return;
    }

    const searchPostcode = {
      postcode: this.postcode,
    }

    this.onSearchPostcode.emit(searchPostcode);

    this.postcode='';
  }

}
