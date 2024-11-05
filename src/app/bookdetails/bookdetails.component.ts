import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {

  constructor(private activedrouter:ActivatedRoute,private http:HttpClient,private rs:BookService,private router:Router) { }
  id!:number;
  book:any;
  ngOnInit(): void {
    this.activedrouter.params.subscribe((param=>
      {
        this.id=param['id'];
        console.log(this.id);
        this.rs.getBook(this.id).subscribe(res=>{
          this.book=res;
          console.log(this.book);
        })
      })
      )
      
  }
  Addtocart(book:any)
  {
    this.rs.addtocart(book).subscribe((res=>{
      console.log("book added");
     // this.router.navigate(['/cart'])
     alert("Book added")
    }))
  }
  Addtocart1(book:any)
  {
    this.rs.addtocart(book).subscribe((res=>{
      console.log("book added");
      this.router.navigate(['/cart'])
    }))
  }

}
