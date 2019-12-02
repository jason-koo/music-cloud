import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class ShowReviewsService {

  selectedReview: Review;
  reviews: Review[]
  private showReviewsURL = "http://localhost:8080/api/open/show-reviews"
  constructor(private _http:HttpClient) { }

  getReviews(objID) {
    return this._http.get(this.showReviewsURL + `/${objID}`)
  }
}
