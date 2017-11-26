import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

   categories = [];
  constructor(private _categoryService : CategoryService) {

 	 
   }

  ngOnInit() {
  this.categories = this._categoryService.getCategoryList();
 
  }

}
