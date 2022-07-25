import { Component, Input, OnInit } from '@angular/core';
import { FeedBack } from 'src/app/models/feedback';
import { FeedbackService } from 'src/app/shared/services/feedbackrendezvous.service';

@Component({
  selector: 'app-rendez-vous-feedback',
  templateUrl: './rendez-vous-feedback.component.html',
  styleUrls: ['./rendez-vous-feedback.component.css']
})
export class RendezVousFeedbackComponent implements OnInit {

  @Input() sender: string;
  @Input() receiver : string;
  @Input() contry: string;
  @Input() date : string;
  rating : number;
  @Input() id : number;

  listFeedback : FeedBack[]  ;

  constructor(private  service : FeedbackService ) {
    this.listFeedback =new Array() ;
    
   }

  ngOnInit(): void {
    this.getRating(this.id);
    this.getListFeedback(this.id);

  }

  getRating(idRv){
    this.service.getRatingRv(idRv).subscribe(res=>
      {
      console.log(res);
      this.rating=res;
    }); }

    getListFeedback(idRv){
      this.service.getListFeedback(idRv).subscribe(res=>
        {

          res.forEach(element => {
            this.service.getFeedback(element).subscribe(elem=>
              {
              console.log(elem);
              this.listFeedback.push(elem);
            });
          });
        console.log(this.listFeedback);
      });
    }

   
    
 
}
