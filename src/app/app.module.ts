import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyordersComponent } from './myorders/myorders.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { RoutingModule } from './routing/routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MorebooksComponent } from './morebooks/morebooks.component';
import { CartComponent } from './cart/cart.component';
import { EditaddressComponent } from './editaddress/editaddress.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyordersComponent,
    BookdetailsComponent,
    MorebooksComponent,
    CartComponent,
    EditaddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
