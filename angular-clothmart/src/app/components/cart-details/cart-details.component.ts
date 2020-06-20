import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(private _cartService: CartService) { }

  ngOnInit(){
    this.cartDetails();
  }
  cartDetails() {
   this.cartItems = this._cartService.cartItems;
   //subscribing to events

   this._cartService.totalPrice.subscribe(
     data => this.totalPrice = data
   ); 

   this._cartService.totalQuantity.subscribe(
    data => this.totalQuantity = data
  ); 
  
  this._cartService.calculateTotalPrice();
  }
//increment quantity
  incrementQuantity(cartItem: CartItem){
    console.log('inc',cartItem);
    this._cartService.addToCart(cartItem);
  }
  //decrement quantity
  decrementQuantity(cartItem: CartItem){
    this._cartService.decrementQuantity(cartItem);
  }

  //remove cart item
  remove(cartItem: CartItem){
    this._cartService.remove(cartItem);
  }
}
