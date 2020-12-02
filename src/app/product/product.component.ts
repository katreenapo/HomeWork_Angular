import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
@Input() product: Product;
@Output() onButton = new EventEmitter<Product>()
  constructor() { }

  ngOnInit(): void {
  }
  addToCart() {
this.onButton.emit(this.product);

  }
}
