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
  i : number ;


  constructor(private  service : FeedbackService ) { }

  ngOnInit(): void {

  
    this.service.getAllRdv().subscribe(res=>
      {console.log(res.find(element => element != undefined).invitation.recpt);

      this.listRv=res;
    });

  }


  

  getRating(idRv){
    this.service.getRatingRv(idRv).subscribe(res=>
      {

      this.i=res;
    });
    console.log(this.i);
    return this.i ;

    
  }


}
