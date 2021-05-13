import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, } from 'rxjs'
import { Restaurant } from '../Restaurant';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiUrl = 'https://uk.api.just-eat.io/restaurants/bypostcode'

  constructor(private http:HttpClient) { }

  getRestaurants(restaurant: Restaurant): Observable<Restaurant[]> {
    //appends the postcode to the api url to get a response
    return this.http.get(this.apiUrl + "/" + restaurant.postcode)
      .pipe(map((response: Response) => <Restaurant[]><unknown>response.json()));
  }
}

