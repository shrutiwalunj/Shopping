import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ClothListComponent } from './components/cloth-list/cloth-list.component';
import { ClothesCategoryComponent } from './components/clothes-category/clothes-category.component';
import { ClothesService } from './services/clothes.service';
import { RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SearchComponent } from './components/search/search.component';
import { ClothDetailsComponent } from './components/cloth-details/cloth-details.component';
import {NgxPaginationModule} from 'ngx-pagination'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WishlistDetailsComponent } from './components/wishlist-details/wishlist-details.component';
import { FirstpageComponent } from './components/firstpage/firstpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';


const routes: Routes = [ 
  {path: 'checkout' , component : CheckoutComponent},
  {path: 'wishlist-details' , component : WishlistDetailsComponent},
  {path: 'cart-details' , component : CartDetailsComponent},
  {path: 'clothes/:id' , component : ClothDetailsComponent},
  {path: 'clothes' , component : FirstpageComponent}, 
  {path: 'search/:keyword' , component : ClothListComponent},
  {path: 'category/:id' , component : ClothListComponent},
  {path: '' ,redirectTo : '/clothes' , pathMatch : 'full'},
  {path: '**' , component : PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ClothListComponent,
    ClothesCategoryComponent,
    PageNotFoundComponent,
    SearchComponent,
    ClothDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    WishlistDetailsComponent,
    FirstpageComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    NgbModule,
    NgxPaginationModule,
    ReactiveFormsModule,
   NgxSpinnerModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    RouterModule,
    SearchComponent
  ],
  providers: [
    ClothesService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
