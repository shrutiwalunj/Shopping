import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { WishlistService } from 'src/app/services/wishlist.service';
import { WishlistItem } from 'src/app/common/wishlist-item';
@Component({
  selector: 'app-wishlist-details',
  templateUrl: './wishlist-details.component.html',
  styleUrls: ['./wishlist-details.component.css']
})
export class WishlistDetailsComponent implements OnInit {

  wishlistItems: WishlistItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  constructor(private _wishlistService: WishlistService) { }

  ngOnInit() {
    this.wishlistDetails();
  }
  wishlistDetails() {
    this.wishlistItems = this._wishlistService.wishlist;
    //subscribing to events
 
    this._wishlistService.totalPrice.subscribe(
      data => this.totalPrice = data
    ); 
 
    this._wishlistService.totalQuantity.subscribe(
     data => this.totalQuantity = data
   ); 
   
   this._wishlistService.calculateTotalPrice();
  }
  //remove wishlist item
  remove(wishlistItem: WishlistItem){
    this._wishlistService.remove(wishlistItem);
  }
}
