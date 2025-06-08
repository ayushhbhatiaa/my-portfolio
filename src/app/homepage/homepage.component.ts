import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})

export class HomepageComponent implements OnInit {

  constructor(private router : Router) {}

  ngOnInit(): void {
  }

  callForAction(e: any){
    this.router.navigate(['/contact'])

  }

  downloadResume(e: any){
    const link = document.createElement('a');
    link.href = 'My_Resume.pdf';
    link.download = 'myResume.pdf';
    link.click();
  }
  

}
