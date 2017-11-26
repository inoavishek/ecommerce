import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

  getCategoryList(){
    return [
    {categoryId:1,categoryName:'Category 1',categoryOrder:1},
    {categoryId:2,categoryName:'Category 2',categoryOrder:2},
    {categoryId:3,categoryName:'Category 3',categoryOrder:3},
    {categoryId:4,categoryName:'Category 4',categoryOrder:4},
    {categoryId:5,categoryName:'Category 5',categoryOrder:5}
    ];
	}
  
}
