import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { ClothesService } from 'src/app/services/clothes.service';
import { ClothesCategory } from 'src/app/common/clothes-category';
import { Clothes } from 'src/app/common/clothes';

@Component({
  selector: 'app-add-clothes',
  templateUrl: './add-clothes.component.html',
  styleUrls: ['./add-clothes.component.css']
})
export class AddClothesComponent implements OnInit {
  category: ClothesCategory[];
  clothes = new Clothes();
  selected: Number = 1;


  constructor(private adminService: AdminService, private _clothservice: ClothesService) { }

  ngOnInit(): void {
    this.listClothCategory();
  }
  addProducts() {
    this.adminService.addProducts(this.clothes, this.selected).subscribe(
      data => console.log("sucess"),
      error => console.log("exception")
    )
  }

  listClothCategory() {
    this._clothservice.getClothesCategory().subscribe(
      data => this.category = data
    )
  }

}
