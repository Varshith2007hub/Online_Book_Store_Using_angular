import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  url1: string="http://localhost:3000";
  getBooks(){
    return this.http.get<any[]>(this.url1+"/books");
  }
  getBooks1(){
    return this.http.get<any[]>(this.url1+"/books1");
  }
  getBook(id:number){
    return this.http.get<any>(this.url1+"/books/"+id);
  }
  addtocart(book:any){
    return this.http.post<any>(this.url1+"/cart",book);
  }
  getcart(){
    return this.http.get<any[]>(this.url1+"/cart");
  }
  getcontact(){
    return this.http.get<any>(this.url1+"/contactinfo");
  }
  addtoorders(books:any[]){
    return this.http.post<any[]>(this.url1+"/orders",books)
  }
  deletecart(id:number){
    console.log(id);
    return this.http.delete(this.url1+"/cart/"+id);
  }
  getorders(){
    return this.http.get<any[]>(this.url1+"/orders");
  }
}
