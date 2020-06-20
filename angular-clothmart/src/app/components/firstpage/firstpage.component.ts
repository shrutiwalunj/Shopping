import { Component, OnInit } from '@angular/core';
import { Clothes } from 'src/app/common/clothes';
import { ClothesService } from 'src/app/services/clothes.service';
import { ActivatedRoute } from '@angular/router';
import { NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/common/cart-item';
import { NgxSpinnerService } from 'ngx-spinner';
import { WishlistService } from 'src/app/services/wishlist.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'; 
import { ClothesCategory } from 'src/app/common/clothes-category';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {
  p: number = 1;
  clothes: Clothes[];
  currentCategoryId: number = 1;
  searchMode: Boolean = false;
  previousCategory: number = 1;
  show:boolean;
  msg: String;
  currentPage: number = 1;
  pageSize: number = 5;
  totalRecords: number = 0;
  clothesCategory: ClothesCategory[];

  constructor(private _clothService: ClothesService,
    private _activatedRoute: ActivatedRoute,
    private _cartService: CartService,
      private _spinnerService: NgxSpinnerService,
     ) {
    
      }

  ngOnInit(): void {
   
  this.listClothCategory();
  }
  listClothCategory(){
    this._clothService.getClothesCategory().subscribe(
      data =>this.clothesCategory=data
    )
  }
 
  
 
  
}
