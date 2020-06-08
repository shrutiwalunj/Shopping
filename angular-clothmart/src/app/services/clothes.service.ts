import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { Clothes } from '../common/clothes';

@Injectable({
  providedIn: 'root'
})
export class ClothesService {

  private baseUrl="http://localhost:8080/api/v1/clothes";
 

  constructor(private httpClient: HttpClient) { }

 
  getClothes(): Observable<Clothes[]>{
    return this.httpClient.get<GetResponseCloth>(this.baseUrl).pipe(
      map(response => response._embedded.clothes)
    )
  }


}
interface GetResponseCloth{
  _embedded:{
    clothes:Clothes[];
  }
}
