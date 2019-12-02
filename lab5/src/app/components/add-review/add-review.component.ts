import { Component, OnInit } from '@angular/core';
import { AddReviewService } from '../../services/add-review.service'
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  constructor(private router: Router, private route:ActivatedRoute,
     private _addReviewService:AddReviewService, private _authService:AuthService) { }

  ngOnInit() {
  }
  //objId = this.route.snapshot.paramMap.get('objID')
  addReview(form:NgForm) {
    var objID = this.route.snapshot.paramMap.get('objID')
    console.log(objID)
    this._addReviewService.addNewReview(form.value, objID).subscribe((res) => {
      console.log(res);
    })
  }

}
