import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { PRODUCTS } from '../initial-products';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product = PRODUCTS;
  private newProduct: Product[] = [
    {quantity:3, name: 'pallab'}
  ];

  constructor() { }

  ngOnInit() {
  }
   addProduct() {
        this.product.push(this.newProduct)
        this.newProduct = {};
    }

}