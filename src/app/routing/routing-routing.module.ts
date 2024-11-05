import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookdetailsComponent } from '../bookdetails/bookdetails.component';
import { CartComponent } from '../cart/cart.component';
import { EditaddressComponent } from '../editaddress/editaddress.component';
import { HomeComponent } from '../home/home.component';
import { MorebooksComponent } from '../morebooks/morebooks.component';
import { MyordersComponent } from '../myorders/myorders.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    children:[
      {
        path:"more",
        component:MorebooksComponent
      }
    ]
  },
  {
    path:"myorders",
    component:MyordersComponent
  },
  {
    path:"detail/:id",
    component:BookdetailsComponent
  },
  {
    path:"cart",
    component:CartComponent,
    children:[
      {
        path:"editaddress",
        component:EditaddressComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
