import { Injectable } from '@angular/core';
import { Review } from '../models/review';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddReviewService {

  selectedReview: Review | {}={}
  reviews: Review[]
  private addReviewURL = "http://localhost:8080/api/authUser/add-review/"
  constructor(private _http:HttpClient) { }

  addNewReview(review: Review, objID) {
    return this._http.post(this.addReviewURL + `${objID}`, review)
  }
}
