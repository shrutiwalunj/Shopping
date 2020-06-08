import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ClothListComponent } from './components/cloth-list/cloth-list.component';
import { ClothesService } from './services/clothes.service';

@NgModule({
  declarations: [
    AppComponent,
    ClothListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ClothesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
