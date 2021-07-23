import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RickandmortyinfoComponent } from './rickandmortyinfo/rickandmortyinfo.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    RickandmortyinfoComponent,
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
