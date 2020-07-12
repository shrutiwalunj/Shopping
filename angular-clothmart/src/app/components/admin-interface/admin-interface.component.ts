import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import { AdminService } from 'src/app/services/admin.service';
import { Clothes } from 'src/app/common/clothes';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ClothesCategory } from 'src/app/common/clothes-category';
import { ClothesService } from 'src/app/services/clothes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-interface',
  templateUrl: './admin-interface.component.html',
  styleUrls: ['./admin-interface.component.css']
})

export class AdminInterfaceComponent implements OnInit {
  clothes: Clothes[] = [];

  constructor(private adminService: AdminService,
    private route:Router) { }

  ngOnInit(): void {
    this.listClothes();
  }
  listClothes(){
    this.adminService.getallClothes().subscribe(
      data => {
        this.clothes=data;
        console.log(this.clothes)
      }
     
    )
  }
  removeCloth(clothid : Clothes){
    this.adminService.removeCloth(clothid).subscribe(
      data => {
        console.log("success")
        window.location.reload();
      },
      error => console.log("error")
    );

  }
  update(clothid : Clothes){
    this.adminService.set(clothid);
    this.route.navigate(['/update']);
    
  }
  
 

}
