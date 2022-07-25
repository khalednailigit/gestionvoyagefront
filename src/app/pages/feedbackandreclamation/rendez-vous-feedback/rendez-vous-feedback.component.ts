import { Component, Input, OnInit } from '@angular/core';
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


  constructor(private  service : FeedbackService ) {
    
    
   }

  ngOnInit(): void {
    this.getRating(this.id);
  }

  getRating(idRv){
    this.service.getRatingRv(idRv).subscribe(res=>
      {
      console.log(res);
      this.rating=res;
    });

    
  }
}
