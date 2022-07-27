import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-chat',
  templateUrl: './home-chat.component.html',
  styleUrls: ['./home-chat.component.css']
})
export class HomeChatComponent implements OnInit {
   receiver: string;
   username: string;

  constructor() {
    
   }

  ngOnInit(): void {
    debugger;
    this.username = sessionStorage.getItem('user');
    console.log(this.username);
  }

  onReceiverChange(event) {
    this.receiver = event;
}

logout(){
  
}


}
