import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TravelService } from 'src/app/service/travel.service';
import * as moment from 'moment'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  isSubmitted = false;
  TravelForm: FormGroup;
  model;
  constructor(private travelService: TravelService, private router: Router) {

    this.TravelForm = new FormGroup({
      hotel : new FormControl('', [Validators.required]),
      dateTravel: new FormControl(''),
      des: new FormControl(''),
      place: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),

    })

   }

  ngOnInit(): void {
   
  }

  onSubmit(){


    this.isSubmitted = true;
    if (this.TravelForm.invalid) {
      return;
    }


    this.travelService._post("travel", this.TravelForm.value).subscribe(data => this.router.navigate(['/travel/list']))


  }

  selectDate(model){
    
    this.model = model;

    let date : any = model

    let myDate = new Date(date.year, date.month-1, date.day);

    this.TravelForm['controls']['dateTravel'].setValue(moment(myDate).format('YYYY-MM-DD'));


     

  }

}
