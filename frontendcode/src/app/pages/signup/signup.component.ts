import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private snack:MatSnackBar) { }

  public user={
    username:'',
    password:'',
    firstname:'',
    lastname:'',
    email:'',
    phone:'',

  };

  ngOnInit(): void {}
  formSubmit()
  {
    console.log(this.user);
    if(this.user.username=='' ||  this.user.username == null)
    {
      // alert('User is required!!')
      this.snack.open('Username is required !!', '',{
        duration:3000,
        // we can change position of snackbar 
        // verticalPosition:'top',
        // horizontalPosition:'right'
      });
      return;
    } 

    //validate

    // call addUser function coming from userservice
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        //success
        console.log(data);
        // alert('sucess');
        Swal.fire('Successfully Done!!','User id is' + data.id,'success')
      },

      (error) => {
        //error
        console.log(error);
        // alert('something went wrong');
        this.snack.open('Username is required !!', '',{
          duration:3000, 
        });
   
      }
    )
  }
      //this.user
      
}
