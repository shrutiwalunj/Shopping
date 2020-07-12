import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/auth/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public roles: string[];
  public authority: string;
  info: any;
  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.info = {
      token: this.tokenStorage.getToken(),
      username: this.tokenStorage.getUsername(),
      authorities: this.tokenStorage.getAuthorities()
    };

    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if(role === 'ROLE_USER') 
        {
          this.authority = 'user';
          return false;
        }
       else 
       return true;
      });
    }
  }
}
