import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
   username: string;
   receiver: string;
  constructor() { }

  ngOnInit(): void {
  }

  logout(){

  }

  onReceiverChange(event) {
    this.receiver = event;
}

}
