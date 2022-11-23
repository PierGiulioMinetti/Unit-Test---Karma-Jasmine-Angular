import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.scss']
})
export class ContactComponentComponent implements OnInit {

  contactForm!: FormGroup;

  contact = {
    name: '',
    email: '',
    text: ''
  }

  submitted = false;

  constructor() {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(): void {
    this.contactForm = new FormGroup({
      'name': new FormControl(this.contact.name, [
        Validators.required,
        Validators.minLength(4)
      ]),
      'email': new FormControl(this.contact.email, [
        Validators.required,
        Validators.email
      ]),
      'text': new FormControl(this.contact.text, [
        Validators.required,
        Validators.minLength(4)
      ]),
    });
  }

  onSubmit(): void {
    this.submitted = true;
  }

}
