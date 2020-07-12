import { Component, OnInit } from '@angular/core';
import { AuthLoginInfo } from 'src/app/auth/login-info';
import { AuthService } from 'src/app/auth/auth.service';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  username: string;
  private loginInfo: AuthLoginInfo;
  roles: string[];
  authority: string;
  info: { token: any; username: any; authorities: any; };

  constructor(private authService: AuthService, 
    private tokenStorage: TokenStorageService,
    private route:Router) { }

  ngOnInit() {
    
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.username = this.tokenStorage.getUsername();
    }

    this.info = {
      token: this.tokenStorage.getToken(),
      username: this.tokenStorage.getUsername(),
      authorities: this.tokenStorage.getAuthorities()
    };
  }

  

  onSubmit() {
    console.log(this.form);
   
    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.username = this.tokenStorage.getUsername();

        if (this.tokenStorage.getToken()) {
          this.roles = this.tokenStorage.getAuthorities();
          this.roles.every(role => {
            if (role === 'ROLE_ADMIN') {
               this.authority = 'admin';
               this.route.navigate(['/admin']);
                } 
             else{
              this.authority = 'user';
              this.route.navigate(['/clothes']);

             }
           
          });
        }
        this.tokenStorage.reloadPage();

      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }


 
}
