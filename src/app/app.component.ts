import { Component } from '@angular/core';
import { Product } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  total: number = 0;
  newProduct = {
    id: '',
    name: '',
    price: ''
  }
  name = '';
  sortOrign = 'desc';

  products: Product[] = [{
    id: 1,
    name: 'Product 1',
    price: 100
  }, {
    id: 2,
    name: 'Product 2',
    price: 50
  }, {
    id: 3,
    name: 'Product 3',
    price: 50
  }]
  sortClick() {
    this.sortOrign = this.sortOrign === 'asc' ? 'desc' : 'asc';
  }
  sendProduct() {
    console.log(this.newProduct);
    this.products.push(this.newProduct);
  }
  deleteProduct(i: number) {
    this.products.splice(i, 1);
  }
totalCart() {
  let total = 0;
  this.products.forEach((product) => {
  total = product.price;
  });
  this.total = total;
}
  
}
