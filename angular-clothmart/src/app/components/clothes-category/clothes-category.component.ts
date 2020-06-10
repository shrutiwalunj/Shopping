import { Component, OnInit } from '@angular/core';
import { ClothesCategory } from 'src/app/common/clothes-category';
import { ClothesService } from 'src/app/services/clothes.service';

@Component({
  selector: 'app-clothes-category',
  templateUrl: './clothes-category.component.html',
  styleUrls: ['./clothes-category.component.css']
})
export class ClothesCategoryComponent implements OnInit {

  clothesCategory: ClothesCategory[];
  constructor(private _clothservice : ClothesService) { }

  ngOnInit(){
    this.listClothCategory();

  }
   
  listClothCategory(){
    this._clothservice.getClothesCategory().subscribe(
      data =>this.clothesCategory=data
    )
  }

}
