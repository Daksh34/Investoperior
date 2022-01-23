import { Component, OnInit, AfterViewInit, ElementRef, Input, ViewChild } from '@angular/core';
import { FirebaseServiceService } from '../../service/firebase-service.service';
import { NewsServiceService } from '../../service/news-service.service';
import { DatePipe } from '@angular/common';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [DatePipe]
})


export class MainComponent implements AfterViewInit, OnInit {

  
  @Input() symbol: string = '';
  settings: any = {};
  settingsNSE: any = {};
  settingsNASDAQ: any = {};
  settingsGLOBAL: any = {};
  
  widgetId: string = '';
  step: number = 0;

  // wanted to be able to hide the widget if the symbol passed in was invalid (don't love their sad cloud face)
  //addedededededededede
  @ViewChild('containerDiv', { static: false }) containerDiv: ElementRef;
  @ViewChild('containerDivBSE', { static: false }) containerDivBSE: ElementRef;
  @ViewChild('containerDivNASDAQ', { static: false }) containerDivNASDAQ: ElementRef;
  @ViewChild('containerDivGlobal', { static: false }) containerDivGlobal: ElementRef;

  homedtls: any;
  image1: string;
  title1: string;
  image2: string;
  title2: string;
  currentDate:Date;

  myDate = new Date();
  constructor(private _elRef: ElementRef, public fireservice: FirebaseServiceService,private _services:NewsServiceService,
    private datePipe: DatePipe,private httpClient: HttpClient) {
    //this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    this.currentDate = new Date();
  }

  investNews:any=[];
  stockNews:any=[];
  budgetNews:any=[];
  bankNews:any=[];
  loansNews:any=[];

  ngAfterViewInit() {
    // need to do this in AfterViewInit because of the Input
    setTimeout(() => {
      //this.widgetId = `${this.symbol}_fundamnetals`;

      // postMessage listener for handling errors
      if (window.addEventListener) {
        window.addEventListener('message', (e: any) => {
          if (e && e.data) {
            console.log(e);
            const payload = e.data;
            // if the frameElementId is from this component, the symbol was no good and we should hide the widget
            if (payload.name === 'tv-widget-no-data' && payload.frameElementId === this.widgetId) {
              this.containerDiv.nativeElement.style.display = 'none';
            }
          }
        },
          false,
        );
      }


      this.settings = {
        symbol: [
          {
            "proName": "FOREXCOM:SPXUSD",
            "title": "S&P 500"
          },
          {
            "proName": "FOREXCOM:NSXUSD",
            "title": "Nasdaq 100"
          },
          {
            "proName": "FX_IDC:INRUSD",
            "title": "INR/USD"
          },
          {
            "proName": "BITSTAMP:BTCUSD",
            "title": "BTC/USD"
          },
          {
            "proName": "BITSTAMP:ETHUSD",
            "title": "ETH/USD"
          }
        ],
        "showSymbolLogo": true,
        "colorTheme": "light",
        "isTransparent": true,
        "displayMode": "adaptive",
        "locale": "en"
      };
      this.settingsNSE = {
        "colorTheme": "light",
        "dateRange": "12M",
        "exchange": "BSE",
        "showChart": true,
        "locale": "in",
        "largeChartUrl": "",
        "isTransparent": true,
        "showSymbolLogo": false,
        "width": "350",
        "height": "500",
        "plotLineColorGrowing": "rgba(33, 150, 243, 1)",
        "plotLineColorFalling": "rgba(33, 150, 243, 1)",
        "gridLineColor": "rgba(240, 243, 250, 1)",
        "scaleFontColor": "rgba(120, 123, 134, 1)",
        "belowLineFillColorGrowing": "rgba(33, 150, 243, 0.12)",
        "belowLineFillColorFalling": "rgba(33, 150, 243, 0.12)",
        "symbolActiveColor": "rgba(33, 150, 243, 0.12)"
      };
      this.settingsNASDAQ = {
        "colorTheme": "light",
        "dateRange": "12M",
        "exchange": "NASDAQ",
        "showChart": true,
        "locale": "in",
        "largeChartUrl": "",
        "isTransparent": true,
        "showSymbolLogo": false,
        "width": "350",
        "height": "500",
        "plotLineColorGrowing": "rgba(33, 150, 243, 1)",
        "plotLineColorFalling": "rgba(33, 150, 243, 1)",
        "gridLineColor": "rgba(240, 243, 250, 1)",
        "scaleFontColor": "rgba(120, 123, 134, 1)",
        "belowLineFillColorGrowing": "rgba(33, 150, 243, 0.12)",
        "belowLineFillColorFalling": "rgba(33, 150, 243, 0.12)",
        "symbolActiveColor": "rgba(33, 150, 243, 0.12)"
      };
      this.settingsGLOBAL = {
        "colorTheme": "light",
        "dateRange": "12M",
        "showChart": true,
        "locale": "in",
        "largeChartUrl": "",
        "isTransparent": true,
        "showSymbolLogo": true,
        "width": "350",
        "height": "500",
        "plotLineColorGrowing": "rgba(25, 118, 210, 1)",
        "plotLineColorFalling": "rgba(25, 118, 210, 1)",
        "gridLineColor": "rgba(242, 242, 242, 1)",
        "scaleFontColor": "rgba(120, 123, 134, 1)",
        "belowLineFillColorGrowing": "rgba(33, 150, 243, 0.12)",
        "belowLineFillColorFalling": "rgba(33, 150, 243, 0.12)",
        "symbolActiveColor": "rgba(33, 150, 243, 0.12)",
        "tabs": [
          {
            "title": "Indices",
            "symbols": [
              {
                "s": "FOREXCOM:SPXUSD",
                "d": "S&P 500"
              },
              {
                "s": "FOREXCOM:NSXUSD",
                "d": "Nasdaq 100"
              },
              {
                "s": "FOREXCOM:DJI",
                "d": "Dow 30"
              },
              {
                "s": "BSE:SENSEX",
                "d": "SENSEX"
              },
              {
                "s": "INDEX:DEU30",
                "d": "DAX"
              }
            ],
            "originalTitle": "Indices"
          }
        ]
      };
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
      script.async = true;
      script.id = this.widgetId;
      script.innerHTML = JSON.stringify(this.settings);
      this.containerDiv.nativeElement.appendChild(script);

      const scriptNSE = document.createElement('script');
      scriptNSE.src = 'https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js';
      scriptNSE.async = true;
      scriptNSE.id = this.widgetId;
      scriptNSE.innerHTML = JSON.stringify(this.settingsNSE);
      this.containerDivBSE.nativeElement.appendChild(scriptNSE);

      const scriptNASDAQ = document.createElement('script');
      scriptNASDAQ.src = 'https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js';
      scriptNASDAQ.async = true;
      scriptNASDAQ.id = this.widgetId;
      scriptNASDAQ.innerHTML = JSON.stringify(this.settingsNASDAQ);
      this.containerDivNASDAQ.nativeElement.appendChild(scriptNASDAQ);

      const scriptGLOBAL = document.createElement('script');
      scriptGLOBAL.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
      scriptGLOBAL.async = true;
      scriptGLOBAL.id = this.widgetId;
      scriptGLOBAL.innerHTML = JSON.stringify(this.settingsGLOBAL);
      this.containerDivGlobal.nativeElement.appendChild(scriptGLOBAL);
      //       const brandingDiv = document.createElement('div');
      //       brandingDiv.innerHTML = `
      //      <div class="tradingview-widget-copyright">
      //      <a href="https://www.tradingview.com/symbols/${this.symbol}/" rel="noopener" target="_blank">
      //      <span class="blue-text">${this.symbol} Fundamental Data</span></a>
      //                by TradingView
      //            </div>
      //  `;

    });
  }

  ngOnInit() {
  //   debugger;
  //   this.fireservice.getHomeDtls().subscribe(data => {

  //     this.homedtls = data.map(e => {
  //       //debugger;
  //       return {
  //         id: e.payload.doc.id,
  //         img1: e.payload.doc.data()['Image1'],
  //         img2: e.payload.doc.data()['Image2'],
  //         t1: e.payload.doc.data()['Title1'],
  //         t2: e.payload.doc.data()['Title2'],
  //         AVGCredit: e.payload.doc.data()['AVGCredit'],
  //         AVGSave: e.payload.doc.data()['AVGSave'],
  //         AVGMort: e.payload.doc.data()['AVGMort'],
  //         TAXDays: e.payload.doc.data()['TAXDays'],
  //       };
  //     })
  //     console.log(this.homedtls)

  //   })

    // this._services.investNews().subscribe((result =>{
    //   //debugger;
    //   this.investNews = result.data;
    // }))
    this.httpClient.get("../assets/JSONFiles/NEWS/crypto.json").subscribe((result =>{
      //debugger;
      console.log(result)
      this.investNews = result;
    }))

    // this._services.stockNews().subscribe((result =>{
    //   this.stockNews = result.data;
    // }))
    this.httpClient.get("../assets/JSONFiles/NEWS/stocks.json").subscribe((result =>{
      //debugger;
      console.log(result)
      this.stockNews = result;
    }))

    // this._services.budgetNews().subscribe((result =>{
    //   this.budgetNews = result.data;
    // }))
    this.httpClient.get("../assets/JSONFiles/NEWS/budgeting.json").subscribe((result =>{
      //debugger;
      console.log(result)
      this.budgetNews = result;
    }))
    

    // this._services.bankNews().subscribe((result =>{
    //   this.bankNews = result.data;
    // }))
    this.httpClient.get("../assets/JSONFiles/NEWS/banking.json").subscribe((result =>{
      //debugger;
      console.log(result)
      this.bankNews = result;
    }))

    // this._services.loansNews().subscribe((result =>{
    //   this.loansNews = result.data;
    // }))
    this.httpClient.get("../assets/JSONFiles/NEWS/loans.json").subscribe((result =>{
      //debugger;
      console.log(result)
      this.loansNews = result;
    }))
  }

  changeStep(step){ 
    this.step = step;
    }

}


