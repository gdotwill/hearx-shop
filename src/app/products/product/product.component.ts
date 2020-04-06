import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../state/products.model';
import { timer } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: `./product.component.html`
})
export class ProductComponent {
  @Input() product: Product;
  @Output() add = new EventEmitter<Product>();
  @Output() subtract = new EventEmitter<Product>();

  buyButton: boolean  = false;
  adjustmentButton: boolean  = true;
  showLoader: boolean = false;

  toggleDisplay() {
    this.buyButton = !this.buyButton;
    timer(2000).subscribe(x => { this.adjustmentButton = !this.adjustmentButton; })
    this.showLoader = true;
    setTimeout(() => {
      this.showLoader = false;
    }, 2000);
  }

  showBuyButton() {
    this.adjustmentButton = !this.adjustmentButton;
    timer(2000).subscribe(x => { this.buyButton = false })
    this.showLoader = true;
    setTimeout(() => {
      this.showLoader = false;
    }, 2000);
  }

}





