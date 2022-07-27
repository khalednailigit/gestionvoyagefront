import { Component, Input, OnInit } from '@angular/core';
import { Rating } from 'src/app/models/rating';
import { FeedbackService } from 'src/app/shared/services/feedbackrendezvous.service';

@Component({
  selector: 'app-feed-back-content',
  templateUrl: './feed-back-content.component.html',
  styleUrls: ['./feed-back-content.component.css']
})
export class FeedBackContentComponent implements OnInit {

  @Input() title: string;
  @Input() text: string;
  @Input() date: string;
  @Input() idUser: number;
  @Input() rating: Rating;
 fullname : string;
 val1 :number  =1 ;
  val2 :number  =2 ;
  val3 :number  =3 ;
  val4 :number  =4 ;
  val5 :number  =5 ;

  constructor(private  service : FeedbackService) { }

  ngOnInit(): void {
    this.getFullname(this.idUser);
  }

  getFullname(idUser){
    this.service.getUser(idUser).subscribe(res=>
      {
      console.log(res);
      this.fullname=res.fullName;
    });

  }
}
