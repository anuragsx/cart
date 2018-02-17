import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

	cartItems: any ;

	fullImagePath: string;

  constructor() {
  	this.fullImagePath = '/assets/images/obe.jpg';
  }

  ngOnInit() {
  	this.cartItems = JSON.parse(localStorage.getItem("productStored"));

  	//const cartsJson: any   = JSON.parse(this.cartItems);
  	console.log('itemsInCart', this.cartItems);
  }

  maxLines(item) {
  	return Array(item.max_lines).fill(1)
  }

}
