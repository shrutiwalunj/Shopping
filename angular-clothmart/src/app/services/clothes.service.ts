import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { Clothes } from '../common/clothes';
import { ClothesCategory } from '../common/clothes-category';

@Injectable({
  providedIn: 'root'
})
export class ClothesService {

  private baseUrl="http://localhost:8080/api/v1/clothes";
  private categoryUrl="http://localhost:8080/api/v1/category";

  constructor(private httpClient: HttpClient) { }


 
 
  getClothes(theCategoryId : number) : Observable<Clothes[]>{
    if(theCategoryId!=0){
      const searchUrl = `${this.baseUrl}/search/categoryid?id=${theCategoryId}`;
    return this.httpClient.get<GetResponseCloth>(searchUrl).pipe(
      map(response => response._embedded.clothes)
    );
    }
    else
    return this.httpClient.get<GetResponseCloth>(this.baseUrl).pipe(
      map(response => response._embedded.clothes)

    );
  }

  getClothesCategory(): Observable<ClothesCategory[]>{
    
    return this.httpClient.get<GetResponseClothesCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.category)

    );
  }


}
interface GetResponseCloth{
  _embedded:{
    clothes:Clothes[];
  }
}
interface GetResponseClothesCategory{
  _embedded:{
    category :ClothesCategory[];
  }
}