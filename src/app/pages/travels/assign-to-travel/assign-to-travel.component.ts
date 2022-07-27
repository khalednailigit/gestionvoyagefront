import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TravelService } from 'src/app/service/travel.service';

@Component({
  selector: 'app-assign-to-travel',
  templateUrl: './assign-to-travel.component.html',
  styleUrls: ['./assign-to-travel.component.scss']
})
export class AssignToTravelComponent implements OnInit {
  users;
  travelForm: FormGroup;
  travels;
  isSubmitted: boolean = false;


toppings = new FormControl();
selectedToppings;
id: any;


  constructor(private serviceTravel : TravelService,
    private modalService: NgbModal,
   // private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.travelForm = new FormGroup({
      'selected': new FormControl(''),

    })
    this.getAllUsers();
    this.getAllTravel();
  }

  getAllUsers(){
    this.serviceTravel._getAllUsers().subscribe(res => {
      console.log("====", res);
      this.users = res;
    })
  }
  getAllTravel() {
    this.serviceTravel._getAll("/travel").subscribe((res: any) => {
      this.travels = res;
      console.log("=========", this.travels)
    }, (error: any) => {
    })
  }

  
  openModal(targetModal, id) {
    this.id = id;
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });
   // this.travelForm.reset();
  }

  onSubmit() {

   /* this.serviceTravel._getById('travel',this.id).subscribe((travel : any)=> {
      travel.employees = this.toppings.value;
      console.log("==================== ", travel);

      this.serviceTravel._put('travel', travel, this.id).subscribe((data) => {
        this.modalService.dismissAll();
       // this.toastr.success("Employé assigner avec succès");
      }, (error: any) => {
        //this.toastr.error("Erreur ...");
      })
    })*/

   /* */

   this.serviceTravel._getById('user',this.id).subscribe((user : any)=> {
    user.travel = this.toppings.value;
    console.log("==================== ", user);
    this.serviceTravel._put('user/travel', user, this.id).subscribe((data) => {
      console.log("============== true");
      this.modalService.dismissAll();
      this.getAllUsers();
    });
  });
}




   
   
  

}
