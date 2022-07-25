import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedBack } from 'src/app/models/feedback';
import { FeedbackService } from 'src/app/shared/services/feedbackrendezvous.service';

@Component({
  selector: 'app-add-feed-back',
  templateUrl: './add-feed-back.component.html',
  styleUrls: ['./add-feed-back.component.css']
})
export class AddFeedBackComponent implements OnInit {


  feedback : FeedBack ;

  constructor(private  service : FeedbackService ,  private route: Router) { }

  ngOnInit(): void {
    this.feedback = new FeedBack();
  }


  save(){
    console.log(this.feedback);
    this.service.addFeedback(this.feedback).subscribe(res=>{
      console.log(res);
    });

    this.route.navigate(['/feedback'])
  }



}
