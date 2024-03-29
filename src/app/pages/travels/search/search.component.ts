import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { TravelService } from 'src/app/service/travel.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  address: '';
  model;
  startDate;
  endDate
  travels;
  constructor(calendar: NgbCalendar, private travelService: TravelService, private router: Router) { 

   // this.fromDate = calendar.getToday();
   // this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);

  }

  ngOnInit(): void {
    this.getAllTravel();
  }

  getAllTravel() {
    this.travelService._getAll("/travel").subscribe(data => {
         this.travels = data
      console.log(this.travels);

    })
    {
    }
  }


  selectDateofTravel(model){  
    console.log(model);
    let date = model.year + "-"+ model.month + "-" + model.day;
    this.travelService._findbyDateofTravelLessThanEqual("travel/searchDateTravel",date).subscribe(data=> this.travels = data)
  }

  selectStartEndDateofTravel(){
    console.log("====== start ",this.startDate);
    console.log("====== end ",this.endDate);
    let startDate = this.startDate.year + "-"+ this.startDate.month + "-" + this.startDate.day;
    let endDate = this.endDate.year + "-"+ this.endDate.month + "-" + this.endDate.day;
    this.travelService._findByDateTravelDateBetween("travel/searchDateTravelBeetween",startDate, endDate).subscribe(data=>  this.travels = data)

 


  }

  findByAddressContaining(){
    this.travelService._findByAddressContaining("travel/filterAddress",this.address ).subscribe(data => this.travels = data)
  }


  goToUser(id){
    this.router.navigate(["/travel/search/user"], {queryParams: {id : id}})

  }


  

}
