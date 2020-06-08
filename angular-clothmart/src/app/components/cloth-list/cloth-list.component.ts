import { Component, OnInit } from '@angular/core';
import { Clothes } from 'src/app/common/clothes';
import { ClothesService } from 'src/app/services/clothes.service';

@Component({
  selector: 'app-cloth-list',
 // templateUrl: './cloth-list.component.html',
  templateUrl: './cloth-grid.component.html',
  styleUrls: ['./cloth-list.component.css']
})
export class ClothListComponent implements OnInit {

  clothes: Clothes[];

  constructor(private _clothService: ClothesService ) { }

  ngOnInit(): void {
    this.listClothes();
  }
listClothes()
{
this._clothService.getClothes().subscribe(
data => this.clothes=data
)
}
config: Clothes;

}

