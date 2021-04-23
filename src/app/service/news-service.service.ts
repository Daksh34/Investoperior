import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private _http:HttpClient) { }
  TopHeadnewsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b70b29b718774d3e82fd6a54ae213f8d";
  newsApiUrl = "https://newsapi.org/v2/everything?q=business&apiKey=b70b29b718774d3e82fd6a54ae213f8d"
  Invest = "https://newsapi.org/v2/everything?q=crypto&apiKey=b70b29b718774d3e82fd6a54ae213f8d";
  StockNews = "https://newsapi.org/v2/everything?q=stock&apiKey=b70b29b718774d3e82fd6a54ae213f8d";
  budgetingNews = "https://newsapi.org/v2/everything?q=budgeting&apiKey=b70b29b718774d3e82fd6a54ae213f8d";
  bankingNews = "https://newsapi.org/v2/everything?q=banking&apiKey=b70b29b718774d3e82fd6a54ae213f8d";
  loanNews = "https://newsapi.org/v2/everything?q=loans&apiKey=b70b29b718774d3e82fd6a54ae213f8d";
  

  topHeading():Observable<any>
  {
    return this._http.get(this.TopHeadnewsApiUrl)
  }
  investNews():Observable<any>
  {
    return this._http.get(this.Invest)
  }
  stockNews():Observable<any>
  {
    return this._http.get(this.StockNews)
  }
  budgetNews():Observable<any>
  {
    return this._http.get(this.budgetingNews)
  }
  bankNews():Observable<any>
  {
    return this._http.get(this.bankingNews)
  }
  loansNews():Observable<any>
  {
    return this._http.get(this.loanNews)
  }
  
}
