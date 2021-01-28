import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http"; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule,} from  '@angular/material/toolbar';
import { MatButtonModule,} from  '@angular/material/button';
import { MatSidenavModule,} from  '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule} from  '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list'
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { GridColsDirective } from './grid-cols.directive';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule, ScreenTrackingService} from '@angular/fire/analytics';

const config = {
  apiKey: 'AIzaSyAJRtVDuUCaQ5_SS--DSOqYHBE3ajUQylU',
  authDomain: 'brandon-site-dbb3d.firebaseapp.com',
  databaseURL: 'https://brandon-site-dbb3d-default-rtdb.firebaseio.com/',
  projectId: 'brandon-site-dbb3d',
  storageBucket: 'brandon-site-dbb3d.appspot.com',
  messagingSenderId: '1019437698886',
  appId: '1:1019437698886:web:17777a3e16b3e836ffdf47',
  measurementId: 'G-KS553EZSYW'
};


@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HomeComponent,
    DemoComponent,
    AboutMeComponent,
    ContactMeComponent,
    GridColsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatTabsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatCardModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAnalyticsModule,
    BrowserAnimationsModule
  ],
  providers: [ScreenTrackingService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
