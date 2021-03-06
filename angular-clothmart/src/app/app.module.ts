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

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminInterfaceComponent } from './components/admin-interface/admin-interface.component';
import { AddClothesComponent } from './components/add-clothes/add-clothes.component';
import { UpdateClothesComponent } from './components/update-clothes/update-clothes.component';


const routes: Routes = [ 
  {path: 'login' , component : LoginComponent},
  {path: 'admin' , component : AdminInterfaceComponent},
  {path: 'update' , component : UpdateClothesComponent},

  {path: 'addClothes' , component : AddClothesComponent},
  {path: 'profile' , component : ProfileComponent},
  {path: 'register' , component : RegisterComponent},
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
    FirstpageComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AdminInterfaceComponent,
    AddClothesComponent,
    UpdateClothesComponent
    
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
    FormsModule
  ],
  exports: [
    RouterModule,
    SearchComponent,
    FormsModule
  ],
  providers: [
    ClothesService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
