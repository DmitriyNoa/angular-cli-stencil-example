import { Component } from '@angular/core';
import { products } from '../mocks/products'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public products: any = products;
  public likedProducts: any = [];

  public onProductLiked(evt: any) {
    this.likedProducts.push(evt.detail);
  }
}
