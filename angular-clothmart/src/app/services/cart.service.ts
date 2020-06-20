import { Injectable } from '@angular/core';
import { CartItem } from '../common/cart-item';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 

  cartItems: CartItem[] = [];
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();
  constructor() { }

  addToCart(theCartItem: CartItem) {
    //check whether the item is already in the cart
    let alreadyExistsInCart: boolean = false;
    let existingCartItem: CartItem = undefined;

    if (this.cartItems.length > 0) {
      //find item in cart based on the id
      existingCartItem = this.cartItems.find(tempCartItem => tempCartItem.id === theCartItem.id);

      alreadyExistsInCart = existingCartItem != undefined;
    }

    if(alreadyExistsInCart){
      //increment the quantity
      existingCartItem.quantity++;
    }else{
      //add item to the array
      this.cartItems.push(theCartItem);
    }

    this.calculateTotalPrice();


  }
  
  calculateTotalPrice() {
    let totalPriceValue: number=0;
    let totalQuantityValue: number=0;

    for(let currentCartItem of this.cartItems){
      totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice;
      totalQuantityValue += currentCartItem.quantity ;
    }
    console.log(`total price: ${totalPriceValue}, tota qty: ${totalQuantityValue}`);

    //publish the events
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    
  }
  decrementQuantity(cartItem: CartItem) {
    cartItem.quantity--;
    if(cartItem.quantity === 0){
      this.remove(cartItem);
    }else{
      this.calculateTotalPrice();
    }
   
  }

  //remove method
  remove(cartItem:CartItem){
    const itemIndex = this.cartItems.findIndex(tempCartItem => tempCartItem.id === cartItem.id);
 
    if(itemIndex >-1){
      this.cartItems.splice(itemIndex,1);
      this.calculateTotalPrice();
    }
   }
   
}
