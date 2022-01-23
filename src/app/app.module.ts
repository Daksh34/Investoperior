import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations/';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './user/header/header.component';
import { SystemDashboardComponent, CarouselMasterComponent, TestimonyMasterComponent } from './system/system-index';
import {InputNumberModule} from 'primeng/inputnumber';

import { UserDashboardComponent} from './user/user-index';
import { PrismoAdvtgComponent } from './system/prismo-advtg/prismo-advtg.component';
import { EquityFundComponent } from './MutualFunds/equity-fund/equity-fund.component';
import { HybridFundComponent } from './MutualFunds/hybrid-fund/hybrid-fund.component';
import { MutualfundComponent } from './MutualFunds/mutualfund/mutualfund.component';
import { StockComponent } from './Stocks/stock/stock.component';
import { HTIIStocksComponent } from './Stocks/htiistocks/htiistocks.component';
import { DebtfundComponent } from './MutualFunds/debtfund/debtfund.component';
import { MainComponent } from './Home/main/main.component';
import { FooterComponent } from './user/footer/footer.component';


import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabase, AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment'
import {AngularFirestoreModule} from '@angular/fire/firestore';

import { FirebaseServiceService} from './service/firebase-service.service';
import { NewsServiceService} from './service/news-service.service';
import { TopHeadingComponent } from './News/top-heading/top-heading.component';

import { HttpClientModule } from '@angular/common/http';
import { Featured1Component } from './Home/featured1/featured1.component';
import { Featured2Component } from './Home/featured2/featured2.component';
import { Snapshot1Component } from './Home/snapshot1/snapshot1.component';
import { Snapshot2Component } from './Home/snapshot2/snapshot2.component';
import { Snapshot3Component } from './Home/snapshot3/snapshot3.component';
import { Snapshot4Component } from './Home/snapshot4/snapshot4.component';
import { HTSMIYTComponent } from './SaveMoney/htsmiyt/htsmiyt.component';
import { BGTCIComponent } from './SaveMoney/bgtci/bgtci.component';
import { TWTMMComponent } from './MakeMoney/twtmm/twtmm.component';
import { TPTJComponent } from './MakeMoney/tptj/tptj.component';
import { LearnComponent } from './Resources/learn/learn.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SystemDashboardComponent,
    UserDashboardComponent,
    CarouselMasterComponent,
    TestimonyMasterComponent,
    PrismoAdvtgComponent,
    EquityFundComponent,
    HybridFundComponent,
    MutualfundComponent,
    StockComponent,
    HTIIStocksComponent,
    DebtfundComponent,
    MainComponent,
    FooterComponent,
    TopHeadingComponent,
    Featured1Component,
    Featured2Component,
    Snapshot1Component,
    Snapshot2Component,
    Snapshot3Component,
    Snapshot4Component,
    HTSMIYTComponent,
    BGTCIComponent,
    TWTMMComponent,
    TPTJComponent,
    LearnComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputNumberModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    HttpClientModule
  ],
  providers: [FirebaseServiceService,NewsServiceService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
