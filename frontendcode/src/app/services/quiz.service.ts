import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(public _http:HttpClient) { }

  

  public quizzes(){
    return this._http.get(`http://localhost:8080/quiz/`)
  }

  //add quiz

  public addQuiz(quiz: {
      title: string; description: string; //   return this._http.delete('http://localhost:8080/quiz/${qId}');
      //   return this._http.delete('http://localhost:8080/quiz/${qId}');
      // }
      maxMarks: string; numberOfQuestions: string; active: boolean; category: { // }
        cid: string;
      };
    })
  {
    return this._http.post(`${baseUrl}/quiz/`,quiz);
  }

 //delete quiz
  // public deleteQuiz(qId:any)  
  // {
  //   return this._http.delete('http://localhost:8080/quiz/${qId}');
  // }
  public deleteQuizz(qId: any) {

    return this._http.delete(`${baseUrl}/quiz/${qId}`);

  }

  // Get the Single Quiz 
  public getQuiz(qId: any)
  {
      return this._http.get(`${baseUrl}/quiz/${qId}`)
  }


  // previous
  // public getQuiz(qId: any)
  // {
  
  //    const data =this._http.get(`${baseUrl}/quiz/${qId}`)
  //    console.log(data+"chu")
  //    return data
  // }

// new  update quiz
  public updateQuiz(quiz: any)
  {
    return this._http.put(`http://localhost:8080/quiz/`,quiz);
  }

  // view-questions
  public getequizquestions(quesId:any){
    return this._http.get(`${baseUrl}/question/${quesId}`)

  }




}
