import { Injectable } from '@angular/core';
import { Clothes } from '../common/clothes';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
 
  clothid:Clothes;
  baseUrl="http://localhost:8080/category";
  clothesUrl="http://localhost:8080/category/clothes";

  constructor(private http : HttpClient) { }

  public set(clothId: Clothes) {
    this.clothid = clothId;
  }
  public get(){
    return this.clothid;
  }
  public addProducts(clothes : Clothes,theCategoryId:Number):Observable<any>{
    const searchUrl  =`${this.baseUrl}/${theCategoryId}/clothes`;
   return  this.http.post<any>(searchUrl,clothes);
  }
  public getCloth(clothid : Clothes):Observable<any>{
    const clothUrl = `${this.clothesUrl}/${clothid}`;
    return  this.http.get<any>(clothUrl);
   }
  public getallClothes():Observable<any>{
   return  this.http.get<any>(this.clothesUrl);
  }
  public removeCloth(clothid: Clothes):Observable<any> {
    const removeUrl  =`${this.clothesUrl}/${clothid}`;
    return this.http.delete<any>(removeUrl);
   
  }
  public updateCloth(clothes: Clothes,theCategoryId:Number):Observable<any> {
    const clothId = this.clothid;
    const updateUrl  =`${this.baseUrl}/${theCategoryId}/clothes/${clothId}`;
    return this.http.put<any>(updateUrl,clothes);
   
  }
}

