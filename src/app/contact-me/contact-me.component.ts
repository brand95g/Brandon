import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AngularFireAnalytics } from '@angular/fire/analytics';



@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})

export class ContactMeComponent implements OnInit {

  constructor(analytics: AngularFireAnalytics) { 
    analytics.logEvent('Contact_Me');
  }
  test() {
    console.log('You clicked the button.');
  }
  ngOnInit(): void {
  }

}

