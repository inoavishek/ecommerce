import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

	products = [];
  itemDisplayType = 'grid';

  constructor(private _productService : ProductService) {

 	 
   }

  ngOnInit() {
  this.products = this._productService.getProducts();
 
  }


  changeItemDisplay(event,type) { 
      this.itemDisplayType = type; 
   } 

}
