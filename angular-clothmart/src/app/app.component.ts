import { Component, OnInit } from '@angular/core';
import { Clothes } from './common/clothes';
import { RouterModule, Routes, Router} from '@angular/router';
import { TokenStorageService } from 'src/app/auth/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

showFiller =false;

  constructor(  private tokenStorage: TokenStorageService,
    private route:Router) { }

  

  ngOnInit() {
    
  }

  logout(){
    this.tokenStorage.signOut();
    this.route.navigate[('/clothes')];
    alert("Logout successful");
    this.reloadPage();
  }
  reloadPage() {
    window.location.reload();
  }

}
