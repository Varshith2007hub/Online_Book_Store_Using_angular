import { Component, OnInit } from '@angular/core';
import {  Router } from "@angular/router";
import { BookService } from '../book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private rs:BookService) { }

  Books!:any[];
  ngOnInit(): void {
    this.rs.getBooks().subscribe
    (
      (response)=>{
        this.Books=response;
      },
      (error)=>
      {
        console.log(error);
      }
    )
   }
  navigate(id:number){
    console.log(id);
    this.router.navigate([`/detail/${id}`]);
  }
  Addtocart(book:any)
  {
    this.rs.addtocart(book).subscribe((res=>{
      console.log("book added");
      this.router.navigate(['/cart'])
    }))
  }
  }
