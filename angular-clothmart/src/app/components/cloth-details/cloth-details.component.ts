import { Component, OnInit } from '@angular/core';
import { Clothes } from 'src/app/common/clothes';
import { ActivatedRoute } from '@angular/router';
import { ClothesService } from 'src/app/services/clothes.service';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-cloth-details',
  templateUrl: './cloth-details.component.html',
  styleUrls: ['./cloth-details.component.css']
})
export class ClothDetailsComponent implements OnInit {

  cloth: Clothes=new Clothes();
  constructor(private _activatedRoute: ActivatedRoute,
              private _clothService : ClothesService,
              private _cartService: CartService,
              private _wishlistService: WishlistService) { }

  ngOnInit(){
    this._activatedRoute.paramMap.subscribe(
      ()=>{
        this.getClothInfo();
      }
    )
  }

  getClothInfo(){
    const id: number = +this._activatedRoute.snapshot.paramMap.get('id');
    this._clothService.get(id).subscribe(
      data => {
        this.cloth=data;
      }
    )
  }

  addToCart(){
    const cartItem = new CartItem(this.cloth);
    this._cartService.addToCart(cartItem);
  }
  addToWishList(){
    const wishlist = new CartItem(this.cloth);
    this._wishlistService.addToWishList(wishlist);
  }
}
