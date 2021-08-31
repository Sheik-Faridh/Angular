import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../matrial.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SocialComponent } from './components/social/social.component';
import { CareerComponent } from './components/career/career.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ConnectComponent } from './components/connect/connect.component';
import { LoaderComponent } from './components/loader/loader.component';
import { DeferloadanimationDirective } from './deferloadanimation.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    SocialComponent,
    CareerComponent,
    ProjectsComponent,
    ConnectComponent,
    LoaderComponent,
    DeferloadanimationDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
