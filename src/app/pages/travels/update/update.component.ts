import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { TravelService } from 'src/app/service/travel.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
id;
TravelForm: FormGroup;
isSubmitted = false;
model;

  constructor(private travelService: TravelService,
    private router: Router,
    private route: ActivatedRoute) { 

    this.route.queryParams.subscribe(params => {
      this.id = params.id;
    });

    this.TravelForm = new FormGroup({
      hotel : new FormControl('', [Validators.required]),
      dateTravel: new FormControl(''),
      des: new FormControl(''),
      place: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),

    })

  }

  ngOnInit(): void {
    this.getTravelById();

  }

  getTravelById(){
    this.travelService._getById('travel', this.id).subscribe((res: any) => {

      this.TravelForm.patchValue({hotel: res.hotel, des:res.des,place:res.place, address:res.address})
     // = moment().format('YYYY-MM-DD')

      const today = new Date(res.dateTravel);
      const SelectedDate = {
        "year" :Number(`${today.getFullYear()}`),
        "month":Number(`${today.getMonth() + 1}`),
        "day": Number(`${today .getDate()}`)
      };

      this.model = SelectedDate;

      console.log("============this.model", this.model);
    })
  
}


selectDate(model){
  debugger;
  this.model = model;
  console.log(model);

  let date : any = model

  let myDate = new Date(date.year, date.month-1, date.day);

  this.TravelForm['controls']['dateTravel'].setValue(moment(myDate).format('YYYY-MM-DD'));


}

onSubmit(){


  this.isSubmitted = true;
  if (this.TravelForm.invalid) {
    return;
  }


  this.travelService._put("travel", this.TravelForm.value, this.id).subscribe(data => this.router.navigate(['/travel/list']))


}
}
