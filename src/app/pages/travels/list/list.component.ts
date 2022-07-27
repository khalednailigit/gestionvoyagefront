import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TravelService } from 'src/app/service/travel.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  travels;

  filters = {
    keyword: ''
  }

  constructor(private serviceTravel : TravelService, private router:Router) { }

  ngOnInit(): void {
    this.getAllTravel();
  }

  getAllTravel() {
    this.serviceTravel._getAll("/travel").subscribe(
      data => this.travels = this.filterTravel(data)
    )
  }

  filterTravel(data) {
    return data.filter((e) => {
      return e.address.toLowerCase().includes(this.filters.keyword.toLowerCase());
    })
  }

  deleteTravel(travel){
    this.serviceTravel._delete("travel", travel.id).subscribe(data=> 
      this.getAllTravel())
  }

  updateTravel(travel){
    this.router.navigate(["/travel/update"], {queryParams: {id : travel.id}})

  }


}
