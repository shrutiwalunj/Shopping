import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { Clothes } from '../common/clothes';
import { ClothesCategory } from '../common/clothes-category';
import { SearchComponent } from '../components/search/search.component';
import { ClothDetailsComponent } from '../components/cloth-details/cloth-details.component';


@Injectable({
  providedIn: 'root'
})
export class ClothesService {

  private baseUrl="http://localhost:8080/api/v1/clothes";
  private categoryUrl="http://localhost:8080/api/v1/category";

  constructor(private httpClient: HttpClient) { }

  
 
  getClothes(theCategoryId : number, currentPage: number,pageSize: number) : Observable<GetResponseCloth>{
    
      const searchUrl = `${this.baseUrl}/search/categoryid?id=${theCategoryId}&page=${currentPage}&size=${pageSize}`;
      return this.httpClient.get<GetResponseCloth>(searchUrl);
      
  }

  searchClothes(keyword: String, currentPage: number,pageSize:number): Observable<GetResponseCloth>{
    
    const searchUrl = `${this.baseUrl}/search/searchbykeyword?name=${keyword}&page=${currentPage}&size=${pageSize}`;
    return this.httpClient.get<GetResponseCloth>(searchUrl);
  }

  private getClothList(searchUrl: string): Observable<Clothes[]> {
    return this.httpClient.get<GetResponseCloth>(searchUrl).pipe(map(response => response._embedded.clothes));
  }

  getClothesCategory(): Observable<ClothesCategory[]>{
    
    return this.httpClient.get<GetResponseClothesCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.category)

    );
  }
  
  get(clothId: number): Observable<Clothes>{
    const clothDetailsUrl = `${this.baseUrl}/${clothId}`;
    return this.httpClient.get<Clothes>(clothDetailsUrl);
  }

}

interface GetResponseCloth{
  _embedded:{
    clothes:Clothes[];
  },
  page:{
    //number of recorsd in each page
    size: number;
    //total number of records in database
    totalElements:number;
    //total number of pages, starts from 0 index
    totalPages:number;
    //current page
    number:number;
  }
}
interface GetResponseClothesCategory{
  _embedded:{
    category :ClothesCategory[];
  }
}