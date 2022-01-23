import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private _http:HttpClient) { }
  TopHeadnewsApiUrl = "http://api.mediastack.com/v1/news?access_key=bd108dcfd103f7707511d0414745acf4&sources=cnn,-bbc&countries=us";
  newsApiUrl = "http://api.mediastack.com/v1/news?access_key=bd108dcfd103f7707511d0414745acf4&sources=cnn,-bbc&countries=us"
  Invest = "http://api.mediastack.com/v1/news?access_key=bd108dcfd103f7707511d0414745acf4&keywords=crypto&countries=us";
  StockNews = "http://api.mediastack.com/v1/news?access_key=bd108dcfd103f7707511d0414745acf4&keywords=stocks&countries=us";
  budgetingNews = "http://api.mediastack.com/v1/news?access_key=bd108dcfd103f7707511d0414745acf4&keywords=budgeting&countries=us";
  bankingNews = "http://api.mediastack.com/v1/news?access_key=bd108dcfd103f7707511d0414745acf4&keywords=banking&countries=us";
  loanNews = "http://api.mediastack.com/v1/news?access_key=bd108dcfd103f7707511d0414745acf4&keywords=loans&countries=us";
  
  //bd108dcfd103f7707511d0414745acf4 - hardleydax
  //f0f5279b2e60bef6396bb102bc43630a - dpatel.dp34
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
