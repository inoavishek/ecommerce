import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
	getProducts(){
    return [{productId:1,productName:'Product title1',productDescription:'Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',productPrice:21.00}
  ,{productId:1,productName:'Product title1',productDescription:'Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',productPrice:21.00}
  ,{productId:1,productName:'Product title1',productDescription:'Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',productPrice:21.00}
  ,{productId:1,productName:'Product title1',productDescription:'Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',productPrice:21.00}
  ,{productId:1,productName:'Product title1',productDescription:'Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',productPrice:21.00}
  ,{productId:1,productName:'Product title1',productDescription:'Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',productPrice:21.00}];
	} 

  getProductsByCategoryId(id)  {
    let products=[{productId:1,productName:'Product title2',productDescription:'Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',productPrice:21.00}
  ,{productId:1,productName:'Product title2',productDescription:'Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',productPrice:22.00}
  ,{productId:1,productName:'Product title3',productDescription:'Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',productPrice:23.00}
  ,{productId:1,productName:'Product title4',productDescription:'Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',productPrice:24.00}
  ,{productId:1,productName:'Product title1',productDescription:'Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',productPrice:25.00}
  ,{productId:1,productName:'Product title1',productDescription:'Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',productPrice:26.00}];
   return products;

  }

}
