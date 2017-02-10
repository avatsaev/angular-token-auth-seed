import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Angular2TokenService} from "angular2-token";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

  signInUser = {
    email: '',
    password: ''
  };

  @Output() signinFormResult = new EventEmitter<any>();
  constructor(private tokenAuthSerivce:Angular2TokenService) { }

  ngOnInit() {}

  onSignInSubmit(){

    this.tokenAuthSerivce.signIn(this.signInUser).subscribe(

        res => {
          if(res.status == 200){
            this.signinFormResult.emit({signedIn: true, res});
          }
        },

        err => {
          console.log('err:', err);
          this.signinFormResult.emit({signedIn: false, err});
        }
    )

  }

}
