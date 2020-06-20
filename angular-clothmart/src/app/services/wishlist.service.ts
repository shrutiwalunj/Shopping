import { Injectable } from '@angular/core';
import { CartItem } from '../common/cart-item';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {


  wishlist: CartItem[] = [];
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();
  msg: String;
  show: boolean = false;

  constructor() { }

  addToWishList(theWishlistItem: CartItem) {
    //check whether the item is already in the wishlist
    let alreadyExistsInWishlist: boolean = false;
    let existingWishlistItem: CartItem = undefined;
    

    if (this.wishlist.length > 0) {
      //find item in cart based on the id
      existingWishlistItem = this.wishlist.find(tempCartItem => tempCartItem.id === theWishlistItem.id);

      alreadyExistsInWishlist = existingWishlistItem != undefined;
    }

    if (alreadyExistsInWishlist) {
      this.show = true;
      
    } else {
      //add item to the array
      this.wishlist.push(theWishlistItem);
    }
    return this.show;

    this.calculateTotalPrice();
  }
  calculateTotalPrice() {
    let totalPriceValue: number=0;
    let totalQuantityValue: number=0;

    for(let currentWishlistItem of this.wishlist){
      totalPriceValue += currentWishlistItem.quantity * currentWishlistItem.unitPrice;
      totalQuantityValue += currentWishlistItem.quantity ;
    }
    console.log(`total price: ${totalPriceValue}, tota qty: ${totalQuantityValue}`);

    //publish the events
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    
  }
   //remove method
   remove(wishlistItem:CartItem){
    const itemIndex = this.wishlist.findIndex(tempwishlistItem => tempwishlistItem.id === wishlistItem.id);
 
    if(itemIndex >-1){
      this.wishlist.splice(itemIndex,1);
      this.calculateTotalPrice();
    }
   }
}
