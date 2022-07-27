import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-invitation',
  templateUrl: './send-invitation.component.html',
  styleUrls: ['./send-invitation.component.css']
})
export class SendInvitationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selectDate(event) {
    console.log(event);
  }

}
