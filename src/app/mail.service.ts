import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MailService {

  constructor(private http: HttpClient) {}
  uri="http://localhost:3000/sendmail";
  sendMessage(body) {
    this.http.post(this.uri, body)
        .subscribe(res => console.log('Email Sent'));
  }
}
