import { Component, OnInit } from '@angular/core';
import { Clothes } from 'src/app/common/clothes';
import { ClothesService } from 'src/app/services/clothes.service';
import { ActivatedRoute } from '@angular/router';
import { NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/common/cart-item';
import { NgxSpinnerService } from 'ngx-spinner';
import { WishlistService } from 'src/app/services/wishlist.service';
import { WishlistItem } from 'src/app/common/wishlist-item';

@Component({
  selector: 'app-cloth-list',
  // templateUrl: './cloth-list.component.html',
  templateUrl: './cloth-grid.component.html',
  styleUrls: ['./cloth-list.component.css']
})
export class ClothListComponent implements OnInit {

  p: number = 1;
  clothes: Clothes[];
  currentCategoryId: number = 1;
  searchMode: Boolean = false;
  previousCategory: number = 1;
  show:boolean;
  msg: String;
  //new properties for server side paging
  currentPage: number = 1;
  pageSize: number = 5;
  totalRecords: number = 0;


  constructor(private _clothService: ClothesService,
              private _activatedRoute: ActivatedRoute,
              private _cartService: CartService,
              private _wishlistService: WishlistService,
              private _spinnerService: NgxSpinnerService,
               _config:NgbPaginationConfig) { 
               _config.maxSize=3;
              _config.boundaryLinks  = true;
    }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(() => {
      this.listClothes();
    })
  }


  listClothes() {
    //starts the loader or spinner
    this._spinnerService.show();
    this.searchMode = this._activatedRoute.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      //do search work
      this.handleSearchClothes();

    } else {
      //display clothes based on category
      this.handleListClothes();
    }
  }

  handleListClothes() {
    const hasCategoryId: boolean = this._activatedRoute.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      this.currentCategoryId = + this._activatedRoute.snapshot.paramMap.get('id');
    }
    else
      this.currentCategoryId = 1;

    //setting page to 1 if user navigate to different category
    if (this.previousCategory != this.currentCategoryId) {
      this.currentPage = 1;
    }
    this.previousCategory = this.currentCategoryId;

    this._clothService.getClothes(this.currentCategoryId,
                                 this.currentPage - 1,
                                  this.pageSize)
      .subscribe(this.processPaginate());
  }

  handleSearchClothes() {
    const keyword: string = this._activatedRoute.snapshot.paramMap.get('keyword');
    this._clothService.searchClothes(keyword,
                                      this.currentPage -1,
                                      this.pageSize)
                                      .subscribe(this.processPaginate());
  }

  updatePageSize(pageSize: number) {
    this.pageSize = pageSize;
    this.currentPage = 1;
    this.listClothes();
  }

  processPaginate() {
    return data => {
      //stops loader or spinner
    
      this._spinnerService.hide();
      this.clothes = data._embedded.clothes;
      //page number starts from 1
      this.currentPage = data.page.number + 1;
      this.totalRecords = data.page.totalElements;
      this.pageSize = data.page.size;
  
    }
  }

  addToCart(cloth: Clothes){
    console.log(`cloth name: ${cloth.name}, and price : ${cloth.unitPrice}`);
    const cartItem = new CartItem(cloth);
    this._cartService.addToCart(cartItem);

  }
  addToWishList(cloth: Clothes){
    console.log(`cloth name: ${cloth.name}, and price : ${cloth.unitPrice}`);
    const wishlistItem = new CartItem(cloth);
   this.show= this._wishlistService.addToWishList(wishlistItem);
    //message
      
  }

  //remove wishlist item
  remove(wishlistItem: WishlistItem){
   this.show = this._wishlistService.remove(wishlistItem);
  }
 
  config: Clothes;

}

