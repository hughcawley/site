import { Component, OnInit } from '@angular/core';
import { MailService } from './../mail.service';
import { FormGroup,  FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private fb: FormBuilder, private ms: MailService, private _snackBar: MatSnackBar) {
    this.buildForm();
  }
  mailForm: FormGroup;
  captchaShow : boolean = false;
  submitAttempted : boolean = false;
  verified : boolean = false;
  ngOnInit() {
  }
  buildForm(){
    this.mailForm = this.fb.group({
          name: ['', Validators.required ],
          email: ['', Validators.required ],
          message: ['', Validators.required ]
        });
  }
  sendMail(){
    if(this.verified == true){
      var form = this.mailForm.value;
      const mail = {
        name : form.name,
        email : form.email,
        message : form.message
      }
      this.ms.sendMessage(mail);
      this._snackBar.open("Email Sent", "Okay", {
        duration: 5000,
      });
    }
    else{
      this.submitAttempted = true;
      if(this.mailForm.valid){
        this.captchaShow = true;
      }
    }
  }
  resolved(captchaResponse: string) {
    this.verified = true;
   }
}
