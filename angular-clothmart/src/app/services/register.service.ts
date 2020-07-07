import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../common/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private loginUrl="http://localhost:8080/login";
  private registerUrl="http://localhost:8080/registeruser";

  constructor(private httpClient: HttpClient) { }

  public loginUserFromRemote(user: User):Observable<any>{
    return this.httpClient.post(this.loginUrl, user);
  }
  public registerUserFromRemote(user: User):Observable<any>{
    return this.httpClient.post(this.registerUrl, user);
  }
}
