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

const routes: Routes = [ 
  {path: 'clothes/:id' , component : ClothDetailsComponent},
  {path: 'clothes' , component : ClothListComponent}, 
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
    ClothDetailsComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    NgbModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes)
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
