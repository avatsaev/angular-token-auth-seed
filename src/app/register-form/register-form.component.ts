import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Angular2TokenService} from "angular2-token";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.sass']
})
export class RegisterFormComponent implements OnInit {

  signUpUser = {
    email: '',
    password: '',
    passwordConfirmation: ''
  };

  @Output() signUpFormResult = new EventEmitter<any>();

  constructor(private tokenAuthSerivce:Angular2TokenService) { }

  ngOnInit() {}


  onSignUpSubmit(){

    this.tokenAuthSerivce.registerAccount(this.signUpUser).subscribe(

        (res) => {

          if (res.status == 200){
            this.signUpFormResult.emit({signedUp: true, res})
          }

        },

        (err) => {
          console.log(err.json())
          this.signUpFormResult.emit({signedUp: false, err})
        }
    )

  }
}
