import { Component, Input, OnInit } from '@angular/core';
import { EmployeeF } from 'src/app/models/employeefeedback';
import { FeedBack } from 'src/app/models/feedback';
import { FeedbackService } from 'src/app/shared/services/feedbackrendezvous.service';
import { StorageService } from 'src/app/shared/services/user/storage.service';

@Component({
  selector: 'app-rendez-vous-feedback',
  templateUrl: './rendez-vous-feedback.component.html',
  styleUrls: ['./rendez-vous-feedback.component.css']
})
export class RendezVousFeedbackComponent implements OnInit {

  @Input() sender: EmployeeF;
  @Input() receiver : EmployeeF;
  @Input() contry: string;
  @Input() date : string;
  rating : number;
  @Input() id : number;

  val1 :number  =1 ;
  val2 :number  =2 ;
  val3 :number  =3 ;
  val4 :number  =4 ;
  val5 :number  =5 ;

  listFeedback : FeedBack[]  ;

  constructor(private  service : FeedbackService , private  serviceuser : StorageService) {
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

    check(){
      console.log(this.serviceuser.getUser().id);
      if((this.receiver.id == this.serviceuser.getUser().id) || (this.sender.id== this.serviceuser.getUser().id)){
        return true ;
      }
      return false ;
    }
    
 
}
