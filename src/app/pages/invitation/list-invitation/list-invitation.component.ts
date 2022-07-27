import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvitationService } from 'src/app/shared/services/invitation.service';

@Component({
  selector: 'app-list-invitation',
  templateUrl: './list-invitation.component.html',
  styleUrls: ['./list-invitation.component.css']
})
export class ListInvitationComponent implements OnInit {
  listInvitation : any;
  constructor(private  service : InvitationService ,  private route: Router) { }

  ngOnInit(): void {
    this.service.getListInvitation().subscribe(res=>
      {console.log(res);

     // this.listInvitation=res;
    });
  }
   listInvitation2 = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@gmail.com',
      phone: '+212-5555-5555',
      address: 'Rue de la paix',
      city: 'Tunis',
      country: 'Tunisia',
      status: 'Accepted',
      date: '2020-01-01',
      time: '12:00',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 2,
      name: 'John Doe',
      email: 'john@terko.com',
      phone: '+212-5555-5555',
      address: 'Rue de la paix',
      city: 'Tunis',
      country: 'Tunisia',
      status: 'Accepted',
      date: '2020-01-01',
      time: '12:00',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
  ];

        

}
