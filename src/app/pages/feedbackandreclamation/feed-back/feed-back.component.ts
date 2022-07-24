import { Component, OnInit } from '@angular/core';
import { RendezvousF } from 'src/app/models/rendezvousfeedback';
import { FeedbackService } from 'src/app/shared/services/feedbackrendezvous.service';

@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.component.html',
  styleUrls: ['./feed-back.component.css']
})
export class FeedBackComponent implements OnInit {

  listRv : RendezvousF[];



  constructor(private  service : FeedbackService ) { }

  ngOnInit(): void {

    this.service.getAllRdv().subscribe(res=>
      {console.log(res);

      this.listRv=res
    });

  }

}
