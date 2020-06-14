import { Component, OnInit } from '@angular/core';
import { Clothes } from 'src/app/common/clothes';
import { ActivatedRoute } from '@angular/router';
import { ClothesService } from 'src/app/services/clothes.service';

@Component({
  selector: 'app-cloth-details',
  templateUrl: './cloth-details.component.html',
  styleUrls: ['./cloth-details.component.css']
})
export class ClothDetailsComponent implements OnInit {

  cloth: Clothes=new Clothes();
  constructor(private _activatedRoute: ActivatedRoute,
              private _clothService : ClothesService) { }

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

}
