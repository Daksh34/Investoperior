import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquityFundComponent } from '../MutualFunds/equity-fund/equity-fund.component';
import { HybridFundComponent } from '../MutualFunds/hybrid-fund/hybrid-fund.component';
import { DebtfundComponent } from '../MutualFunds/debtfund/debtfund.component';
import { MutualfundComponent } from '../MutualFunds/mutualfund/mutualfund.component';
import { StockComponent } from '../Stocks/stock/stock.component';
import { MainComponent } from '../Home/main/main.component';
import { HTIIStocksComponent } from '../Stocks/htiistocks/htiistocks.component';
import { Featured1Component } from '../Home/featured1/featured1.component';
import { Featured2Component } from '../Home/featured2/featured2.component';
import { Snapshot1Component } from '../Home/snapshot1/snapshot1.component';
import { Snapshot2Component } from '../Home/snapshot2/snapshot2.component';
import { SystemDashboardComponent, CarouselMasterComponent, TestimonyMasterComponent, PrismoAdvtgComponent } from '../system/system-index';
import { UserDashboardComponent, } from '../user/user-index';

const appRoutes: Routes = [
  {
    path: '',
    component: UserDashboardComponent,
    children: [
      { path: '',  children: [
          { path: '', component: MainComponent },
          { path: 'Featured1', component: Featured1Component },
          { path: 'Featured2', component: Featured2Component },
          { path: 'Sell-Your-Home', component: Snapshot1Component },
          { path: 'best-savings-account-interest-rates', component: Snapshot2Component },
        ] 
      },
      { path: 'home', redirectTo: '/' },

      {
        path: 'mutual-funds', children: [
          { path: '', component: MutualfundComponent },
          { path: 'equity-fund', component: EquityFundComponent },
          { path: 'hybrid-fund', component: HybridFundComponent },
          { path: 'debt-fund', component: DebtfundComponent },
        ]
      },
      { path: 'stocks', children: [
        { path: '', component: StockComponent },
        { path: 'how-to-invest-in-stocks', component: HTIIStocksComponent },
      ]
    
      },
      

    ],
  },
  {
    path: 'administrator',
    component: SystemDashboardComponent,
    children: [
      {
        path: 'setup', children: [
          { path: 'carousel', component: CarouselMasterComponent },
          { path: 'testimony', component: TestimonyMasterComponent },
          { path: 'prismoadvtg', component: PrismoAdvtgComponent }
        ]
      },
    ]
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
