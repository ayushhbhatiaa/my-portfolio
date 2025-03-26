declare var Email: any;
import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  FormsModule,
  Validators,
  FormControl
} from '@angular/forms'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent implements OnInit {

  showAlert: boolean = true;
  showModal: boolean = false;
  formInteracted: boolean = false;
  public form!: FormGroup;
  // from_name = new FormControl();
  // from_email = new FormControl();
  // subject = new FormControl();
  // message = new FormControl();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // this.formInteracted = false;
    this.form = this.fb.group({
      from_name: ['', Validators.required],
      to_name: 'Admin',
      from_email: ['', Validators.required, Validators.email],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    })

    this.form.markAsUntouched();
    this.form.markAsPristine();
  }

  onInputChange(){
    this.formInteracted = true;
  }
  
  get fetch() {
    return this.form.controls;
  }

  // loadSmtpScript() {
  //   this.script.loadScript('https://smtpjs.com/v3/smtp.js').then(() => {
  //     console.log("SMTP Script Loaded successfully !!")
  //   }).catch(error => {
  //     console.log("Failed to load script........!", error)
  //   })
  // }

  // sendMessage(e: any) {
  //   Email.send({
  //     Host: "smtp.elasticemail.com",
  //     // Username : "username",
  //     Username: "ayushh.bhatiaa@gmail.com",
  //     // Password : "password",
  //     Password: "B31FE70B7E0716D0226709A5F38C3A0C4220",
  //     To: 'justforlaugh671@gmail.com',
  //     From: "ayushh.bhatiaa@gmail.com",
  //     Subject: "This is the subject",
  //     Body: "And this is the body"
  //   }).then((message: any) => alert(message)
  //   );

  //   console.log("e :", e)
  //   if (e.type == 'click') {
  //     this.showAlert = false;
  //     setTimeout(() => {
  //       this.showAlert = true;
  //     }, 5000)

  //   }
  // }

  // email() {
  //   Email.send({
  //     Host: "smtp.elasticemail.com",
  //     // Username : "username",
  //     Username: "ayushh.bhatiaa@gmail.com",
  //     // Password : "password",
  //     Password: "B31FE70B7E0716D0226709A5F38C3A0C4220",
  //     To: 'justforlaugh671@gmail.com',
  //     From: "ayushh.bhatiaa@gmail.com",
  //     Subject: "This is the subject",
  //     Body: "And this is the body"
  //   }).then((message: any) => alert(message)
  //   );
  // }

  onSubmit() {
    console.log("Form :", this.form)
    emailjs.init('sk4a-1onUC-U72f0w')
    emailjs.send("service_rbnz1ye", "template_bnq0w2r", {
      from_name: this.form.controls['from_name'].value,
      // from_name: this.form.value.from_name,
      to_name: this.form.value.to_name,
      from_email: this.form.controls['from_email'].value,
      subject: this.form.controls['subject'].value,
      message: this.form.controls['message'].value,
    });
    this.showModal = true;
  }


}
