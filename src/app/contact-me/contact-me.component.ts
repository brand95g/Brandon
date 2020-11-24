import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';



@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})

export class ContactMeComponent implements OnInit {

  constructor() { }
  test() {
    console.log('You clicked the button.');
  }
  ngOnInit(): void {
  }

}

