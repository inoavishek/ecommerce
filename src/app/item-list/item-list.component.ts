import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  private sub:any;
  private id:any;
	private products = [];
  itemDisplayType = 'grid';

  constructor(private _productService : ProductService, private route: ActivatedRoute) {

 	 
   }

  ngOnInit() {

          // Subscribe to route params
      this.sub = this.route.params.subscribe(params => {

        this.id = params['id'];

       // Retrieve Pet with Id route param
        
    });


if(this.id>0)
{
  this.products = this._productService.getProductsByCategoryId(this.id);

} else {
  this.products = this._productService.getProducts();
}
  
 
  }


  changeItemDisplay(event,type) { 
      this.itemDisplayType = type; 
   } 

}
