import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  quizzes!: any[];
  constructor(private _quiz:QuizService) { }

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

}



