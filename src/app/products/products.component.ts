import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from './products.service';
import {CreateNewAutocompleteGroup, SelectedAutocompleteItem, NgAutocompleteComponent} from "ng-auto-complete";

import * as _ from 'underscore';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {

  @ViewChild(NgAutocompleteComponent) public completer: NgAutocompleteComponent;

  fullImagePath: string;

  allProducts: any[];

  // array of all items to be paged
  private allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  product: any;

  products: any[];

  filteredProducts: any[];

  constructor(private productService: ProductsService) { 
  	this.fullImagePath = '/assets/images/obe.jpg'
  }

  Selected(item: SelectedAutocompleteItem) {
        console.log(item);
  }

  ngOnInit() {
  	this.productList();
  }

  productList() {
    this.productService.getProducts().then(response => {
      console.log("Got response:", response.data);
      
      this.allProducts = response.data;
      this.setPage(1, this.allProducts);
    }).catch(error => {
      console.log("Got error:", error);
    }).then(response => {
      console.log("Another response:", response);
    }).catch(error => {
      console.log("Got another error:", error);
    });
  }

    setPage(page: number, allPro) {
      console.log('all pagessss', allPro);
      if (page < 1 || page > this.pager.totalPages) {
          return;
      }

      
      // get pager object from service
      this.pager = this.productService.getPager(allPro.length, page);
      console.log('all producs', this.pager);


      // get current page of items
      this.pagedItems = allPro.slice(this.pager.startIndex, this.pager.endIndex + 1);

      console.log('pagedItem', this.pager);
  }

  filterProducts(event) {
    let query = event.query;
    console.log('query', query);
    this.productService.getProducts().then(products => {
    console.log('filtered products', products);
        this.filteredProducts = this.filterProduct(query, products);
    });
    console.log('filtered products', this.filteredProducts);
  }

  filterProduct(query, products: any[]):any[] {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered : any[] = [];
    console.log('products inside method', products);
    //debugger;
    for(let i = 0; i < products['data'].length; i++) {
        let product = products['data'][i];
        if(product.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(product);
        }
    }
    return filtered;
  }

  listProducts(event) {
    let searchResults : any [] = [];
    let productName = event.name;
    for(let i = 0; i < this.allProducts.length; i++) {
      let product = this.allProducts[i];
      if(product.name.toLowerCase().indexOf(productName.toLowerCase()) == 0) {
        searchResults.push(product);
      }
    }  
    this.pagedItems = [];
    for(let i = 0; i < searchResults.length; i++) {
      let searchRes = searchResults[i];
      {
        this.pagedItems.push(searchRes); 
      }
    }     
  }

  onChangeSort(event) {
    let searchResults : any [] = [];
    console.log('eventss', event.target.value);
    let selectedValue = event.target.value;  
    for(let i = 0; i < this.allProducts.length; i++) {
      let product = this.allProducts[i];
      if(product.category_type.toLowerCase().indexOf(selectedValue.toLowerCase()) == 0) {
        searchResults.push(product);
      }
    }  
    this.pagedItems = [];
    for(let i = 0; i < searchResults.length; i++) {
      let searchRes = searchResults[i];
      {
        this.pagedItems.push(searchRes); 
      }
    }
  }

}
