import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  
  constructor(private http: HttpClient) { }
  onCreatePost(postData: { title: string; email: string; content: string }) {
    // Send Http request
    console.log(postData);
    this.http.post(' https://brandon-site-dbb3d-default-rtdb.firebaseio.com/posts.json',postData)
    .subscribe();
   }
  ngOnInit(): void {
  }

}
