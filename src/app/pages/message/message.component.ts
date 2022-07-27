import { Component, Input, OnInit } from '@angular/core';
import { RxStompService } from '@stomp/ng2-stompjs';
import { ChannelService } from 'src/app/service/channel.service';
import { MessageService } from 'src/app/service/message.service';
import { Message } from 'src/app/shared/model/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
   filteredMessages: Array<Message> = [];
   newMessage: string;
   channel: string;

  @Input()
  private username: string;

  constructor(private stompService: RxStompService,
    private messageService: MessageService,
    private channelService: ChannelService) { }

  ngOnInit() {
    this.channelService.getChannel().subscribe(channel => {
      this.channel = channel;
      this.filterMessages();
    });

    this.messageService.getMessages().subscribe(messages => {
      this.filterMessages();
    });
  }

  sendMessage() {
    debugger;
    if (this.newMessage) {
      this.stompService.publish({
        destination: '/app/messages', body:
          JSON.stringify({
            'channel': this.channel,
            'sender': this.username,
            'content': this.newMessage
          })
      });
      this.newMessage = '';
      this.scrollToBottom();
    }
  }

  filterMessages() {
    this.filteredMessages = this.messageService.filterMessages(this.channel);
    this.scrollToBottom();
  }

  scrollToBottom() {
    const msgContainer = document.getElementById('msg-container');
    msgContainer.scrollTop = msgContainer.scrollHeight;
  }
}


