import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedBack } from 'src/app/models/feedback';
import { Rating } from 'src/app/models/rating';
import { RendezvousF } from 'src/app/models/rendezvousfeedback';
import { FeedbackService } from 'src/app/shared/services/feedbackrendezvous.service';
import { StorageService } from 'src/app/shared/services/user/storage.service';

@Component({
  selector: 'app-add-feed-back',
  templateUrl: './add-feed-back.component.html',
  styleUrls: ['./add-feed-back.component.css']
})
export class AddFeedBackComponent implements OnInit {


  feedback : FeedBack ;
rating : Rating ;
  val1 :number  =1 ;
  val2 :number  =2 ;
  val3 :number  =3 ;
  val4 :number  =4 ;
  val5 :number  =5 ;
  idRv :number;
  myFood : number ;

  constructor(private  service : FeedbackService ,  private route: Router ,  private rout: ActivatedRoute , private  serviceuser : StorageService) { }

  ngOnInit(): void {
    this.feedback = new FeedBack();
    this.feedback.rating=new Rating();
    this.rating=new Rating();
    this.feedback.rendezvous=new RendezvousF();
    this.idRv = this.rout.snapshot.params['id'];
    this.service.getFeedbackByuser(this.idRv,this.serviceuser.getUser().id).subscribe(res=>{
      this.feedback=res;
      console.log(res);
    });

  }


  save(){
    console.log(this.rating);
    this.feedback.rendezvous.id=+this.idRv;
    this.feedback.idUser=this.serviceuser.getUser().id ;

    this.service.addRating(this.rating).subscribe(res=>{
      console.log(res);
      this.rating.id=res.id;
    });
    this.feedback.rating=this.rating;
    console.log("rrrrrrrrrrrrrrrrrrrrrrr");
    console.log(this.feedback);
    console.log("pppppppppppppppp");

    this.service.addFeedback(this.feedback).subscribe(res=>{
      console.log("after");
      console.log(this.feedback);

      console.log(res);
    });
    console.log("oooooooooooooooooo");
    console.log(this.feedback);

    this.route.navigate(['/feedback'])
  }



}
