import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TravelService } from 'src/app/service/travel.service';

@Component({
  selector: 'app-find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.css']
})
export class FindUserComponent implements OnInit {
id;
travel;
  constructor(private route:ActivatedRoute, private travelService: TravelService) {
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
    });
   }

  ngOnInit(): void {
    this.getTravelById();
  }

  getTravelById(){
    this.travelService._getById('travel', this.id).subscribe((res: any) => {
      this.travel = res
      console.log("=======", this.travel);
    })
  }

}
