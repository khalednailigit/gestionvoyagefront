import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChannelService } from 'src/app/service/channel.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  @Input()
  username: string;

  @Output()
  receiverUpdated = new EventEmitter<string>();


  highlightedUsers: Array<string> = [];
  receiver: string;


  constructor(
    private channelService: ChannelService,
    private messageService: MessageService) { }

  ngOnInit(): void {
  }

  startChatWithUser(user) {
    const channelId = ChannelService.createChannel(this.username, user.username);
    this.channelService.refreshChannel(channelId);
    this.receiver = user.username;
    debugger;
    this.highlightedUsers = this.highlightedUsers.filter(u => u !== user.username);
    this.receiverUpdated.emit(user.username);
    //this.messageService.sendReadReceipt(channelId, user.username);
}

  getUserItemClass(user): string {
    let classes: string = 'user-item';
    if (user.username === this.receiver) {
        classes += ' current-chat-user ';
    }

    if (this.highlightedUsers.indexOf(user.username) >= 0) {
        classes += ' new-message';
    }

    /*if (this.newConnectedUsers.indexOf(user.username) >= 0) {
        classes += ' new-user';
    }*/

    if (!user.connected) {
        classes += ' disconnected-user';
    }

    return classes;
}


/*subscribeToOtherUser(otherUser): string {
  const channelId = ChannelService.createChannel(this.username, otherUser.username);
  this.stompService.watch(`/channel/chat/${channelId}`).subscribe(res => {
      const data: Message = JSON.parse(res.body);
      this.messageService.pushMessage(data);

      if (data.channel !== this.channel) {
          this.showNotification(data);
      } else {
          // send read receipt for the channel
          this.messageService.sendReadReceipt(this.channel, otherUser.username);
      }
  });

  return channelId;
}*/

/*showNotification(message: Message) {
  const snackBarRef = this.snackBar.open('New message from ' + message.sender, 'Show', { duration: 3000 });
  this.highlightedUsers.push(message.sender);
  snackBarRef.onAction().subscribe(() => {
      this.receiver = message.sender;
      this.receiverUpdated.emit(message.sender);
      this.channel = ChannelService.createChannel(this.username, message.sender);
      this.channelService.refreshChannel(this.channel);
  });
}*/

}
