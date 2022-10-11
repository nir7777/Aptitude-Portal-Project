import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  constructor(private_route:ActivatedRoute) { }

  qId = 0;

  ngOnInit(): void {

    // this.qId = this._route.snapshot.params.qid;
    alert(this.qId);
  }

}
