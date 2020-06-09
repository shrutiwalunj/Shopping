import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ClothListComponent } from './components/cloth-list/cloth-list.component';
import { ClothesService } from './services/clothes.service';
import { RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [ 
  {path: 'clothes' , component : ClothListComponent},
  {path: 'category/:id' , component : ClothListComponent},
  {path: '' ,redirectTo : '/clothes' , pathMatch : 'full'},
  {path: '**' , component : PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ClothListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ClothesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
