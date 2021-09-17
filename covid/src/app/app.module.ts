import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './@module/home/home.component';
import { PincodeComponent } from './@module/home/components/pincode/pincode.component';
import { DistrictComponent } from './@module/home/components/district/district.component';
import { SearchComponent } from './@module/home/components/search/search.component';
import { LivecountComponent } from './@module/home/components/livecount/livecount.component';
import { SlotsComponent } from './@module/home/components/slots/slots.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PincodeComponent,
    DistrictComponent,
    SearchComponent,
    LivecountComponent,
    SlotsComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
