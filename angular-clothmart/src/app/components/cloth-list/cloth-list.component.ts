import { Component, OnInit } from '@angular/core';
import { Clothes } from 'src/app/common/clothes';
import { ClothesService } from 'src/app/services/clothes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cloth-list',
  // templateUrl: './cloth-list.component.html',
  templateUrl: './cloth-grid.component.html',
  styleUrls: ['./cloth-list.component.css']
})
export class ClothListComponent implements OnInit {

  clothes: Clothes[];
  currentCategoryId: number;
 

  constructor(private _clothService: ClothesService,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(() => {
      this.listClothes();
    })
  }

  listClothes() {
    const hasCategoryId: boolean = this._activatedRoute.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      this.currentCategoryId = + this._activatedRoute.snapshot.paramMap.get('id');
    }
    else
      this.currentCategoryId = 0;

    this._clothService.getClothes(this.currentCategoryId).subscribe(
      data => this.clothes = data
    )
  }
  config: Clothes;

}

