import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {

  constructor(private http:HttpClient,private rs:BookService) { }
  orders!:any[]
  ngOnInit(): void {
    this.rs.getorders().subscribe((res)=>{
      this.orders=res;
    })
  }

}
