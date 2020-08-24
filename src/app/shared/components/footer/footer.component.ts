import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  emailField: FormControl;
  constructor() {
    this.emailField = new FormControl('', [
      Validators.email
    ]);
  }

  ngOnInit(): void {}

  sendMail() {
    if (this.emailField.valid) {
      console.log(`enviar a ${this.emailField.value}`);
    }
  }
}
