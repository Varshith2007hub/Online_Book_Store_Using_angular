import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-morebooks',
  templateUrl: './morebooks.component.html',
  styleUrls: ['./morebooks.component.css']
})
export class MorebooksComponent implements OnInit {

  constructor(private rs:BookService) { }
  Books!:any[];
  ngOnInit(): void {
    this.rs.getBooks1().subscribe
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
   navigate(){
     
   }
  }

