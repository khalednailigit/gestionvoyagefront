import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sendinvitation',
  templateUrl: './sendinvitation.component.html',
  styleUrls: ['./sendinvitation.component.css']
})
export class SendinvitationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // navigate to the dashboard page
  navigateToDashboard() {
    window.location.href = '/dashboard';
  }
  

}
