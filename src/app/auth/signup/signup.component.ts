import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username = new FormControl('', [
    Validators.email, Validators.minLength(6), Validators.required
  ])
  password = new FormControl('', [
    Validators.required,
    this.checkExclamatory
  ])

  registerForm : FormGroup;

  checkExclamatory(input :FormControl) {
      const hasExclamation = input.value.indexOf('!') >= 0;
      return hasExclamation ? null : { needExclamation : true};
  }

  onRegister() {
    console.log(this.registerForm) 
  }
  constructor(private fb : FormBuilder) { 
    this.registerForm = this.fb.group( {
      username : this.username,
      password : this.password

    })
  }

  ngOnInit() {
  }

}
