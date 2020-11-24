import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http"; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule,} from  '@angular/material/toolbar';
import { MatButtonModule,} from  '@angular/material/button';
import { MatSidenavModule,} from  '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule} from  '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'
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
    MatCardModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
