import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { ClothesService } from 'src/app/services/clothes.service';
import { ClothesCategory } from 'src/app/common/clothes-category';
import { Clothes } from 'src/app/common/clothes';

@Component({
  selector: 'app-update-clothes',
  templateUrl: './update-clothes.component.html',
  styleUrls: ['./update-clothes.component.css']
})
export class UpdateClothesComponent implements OnInit {
  category: ClothesCategory[];
  clothes = new Clothes();
   Cloth=new Clothes();
  selected: Number = 1;
  clothid : Clothes;
  constructor(private adminService: AdminService, private _clothservice: ClothesService) { }

  ngOnInit(): void {
    this.listClothes();
    this.listClothCategory();
  }

  listClothes(){
    this.clothid = this.adminService.get();
    console.log(this.clothid);
    this.adminService.getCloth(this.clothid).subscribe(
      data => {
        this.Cloth = data
        console.log(this.Cloth)
      }
     
    )
  }
  listClothCategory() {
    this._clothservice.getClothesCategory().subscribe(
      data => this.category = data
    )
  }
  updateProducts() {
    this.adminService.updateCloth(this.clothes,this.selected).subscribe(
      data => console.log("sucess"),
      error => console.log("exception")
    )
  }
}
