import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-review',
  templateUrl: './order-review.component.html',
  styleUrls: ['./order-review.component.css']
})
export class OrderReviewComponent implements OnInit {

  fullImagePath: string;
  
  constructor() { 
  	this.fullImagePath = '/assets/images/obe.jpg';
  }

  ngOnInit() {
  }

}
