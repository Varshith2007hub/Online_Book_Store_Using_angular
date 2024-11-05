import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  sum:number= 0;
  avg:number=0;
  address:any;
  constructor(private rs:BookService,private http:HttpClient,private router:Router) { }
   cart!:any[];
  ngOnInit(): void {
    this.rs.getcart().subscribe((res=>{
      this.cart=res;
      //console.log(this.cart)
      for(var i=0;i<this.cart.length;i++)
      {
        this.sum=this.sum+this.cart[i].bookPrice;
      }
      console.log(this.sum);
      this.avg=this.sum/100;
      console.log(this.avg);
    }))
    this.rs.getcontact().subscribe((res=>{
      this.address=res;
      console.log(this.address);
    }))
  }
  update(cart1:any[]){
    for(var i=0;i<cart1.length;i++){
      this.rs.addtoorders(cart1[i]).subscribe((res)=>{
           console.log("updated")
      })}
      for(var i=0;i<cart1.length;i++){
      this.rs.deletecart(cart1[i].id).subscribe((res)=>{
        console.log("deleted");
      })
      this.router.navigate(['myorders'])
    }
  }
  deletebooks(id:number){
    this.rs.deletecart(id).subscribe((res)=>{
      console.log("deleted book")
      this.router.navigate(['/cart'])
    })
  }

}
