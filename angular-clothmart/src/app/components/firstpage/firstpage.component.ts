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
     ) {}

  ngOnInit(): void {
  this.listClothCategory();
  this.handleListClothes();
  }
  listClothCategory(){
    this._clothService.getClothesCategory().subscribe(
      data =>this.clothesCategory=data
    )
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

  updatePageSize(pageSize: number) {
    this.pageSize = pageSize;
    this.currentPage = 1;
    this.handleListClothes();
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
  
 
  
}
