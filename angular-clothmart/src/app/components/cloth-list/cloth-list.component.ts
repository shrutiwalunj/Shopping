import { Component, OnInit } from '@angular/core';
import { Clothes } from 'src/app/common/clothes';
import { ClothesService } from 'src/app/services/clothes.service';
import { ActivatedRoute } from '@angular/router';
import { NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';

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

  //new properties for server side paging
  currentPage: number = 1;
  pageSize: number = 1;
  totalRecords: number = 0;


  constructor(private _clothService: ClothesService,
    private _activatedRoute: ActivatedRoute,
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
      this.clothes = data._embedded.clothes;
      //page number starts from 1
      this.currentPage = data.page.number + 1;
      this.totalRecords = data.page.totalElements;
      this.pageSize = data.page.size;
    }
  }
  config: Clothes;

}

