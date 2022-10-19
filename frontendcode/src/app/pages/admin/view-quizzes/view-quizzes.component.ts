import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {
  qId = 0;
  quiz: any;

  

  quizzes!: any[];
  constructor(private _quiz:QuizService,
              private _route:Router) { }

  ngOnInit(): void {
    
    this._quiz.quizzes().subscribe(
      (data:any) => {
        this.quizzes = data;
        console.log(this.quizzes);
      },
      (error) =>{
        console.log(error);
        Swal.fire('Error !',"Error in loading  data !", 'error');
      }
    );
  }
  // delete
  deleteQuiz(qId:any)
  {
    console.log("html id"+ qId)
    Swal.fire({
      icon:'info',
      title: 'Are You Sure, You Want To Delete The Quiz?',
      confirmButtonText:'Delete',
      showCancelButton:true,
    }).then((result)=>{
      if(result.isConfirmed)
      {
        this._quiz.deleteQuizz(qId).subscribe(
          (data)=> {
            console.log
            console.log("hii")
            // this.quizzes = this.quizzes?.filter((quiz) => quiz.qid !=qId);
            Swal.fire('Success','Quiz deleted','success');
          },
          (error)=>
          {
            Swal.fire('Error','Error in deleting quiz','error');
          }
          );
      }
    });
  }

  gete(qId:any){
    this._quiz.getQuiz(qId).subscribe(
      (data)=>{
        console.log(data);
      },
      (error)=>{
        console.log(error);
      }
    )
  }



  //update
  quiz_update(question_id:any)
  {
    
    this._quiz.updateQuiz(this._quiz).subscribe((data: any) =>{
      Swal.fire("fetch")
      Swal.fire('Success!!','quiz updated','success').then((error)=>{
        this._route.navigate(['/admin/quizzes'])
      });
    },
    (error: any)=>{
      Swal.fire('Error','error in updating quiz','error');
      console.log(error);
    }
    );


  }

  // view quiz-questions

  getequizques(quesId:any){
    this._quiz.getequizquestions(quesId).subscribe(
      (data)=>{
        console.log("Dta",data);
      },
      (error)=>{
        console.log("Error",error);
      }
    )
  }

}




