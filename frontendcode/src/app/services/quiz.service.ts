import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http:HttpClient) { }

  public quizzes(){
    return this._http.get(`http://localhost:8080/quiz/`)
  }

  //add quiz

  public addQuiz(quiz: any)
  {
    return this._http.post(`http://localhost:8080/quiz/`,quiz);
  }

 //delete quiz
  public deleteQuiz(qid: any)
  {
    return this._http.delete(`http://localhost:8080/quiz/qId`);
  }

}