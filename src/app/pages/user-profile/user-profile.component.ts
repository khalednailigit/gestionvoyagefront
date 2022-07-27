import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/shared/services/user/storage.service';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
public user: any;
  constructor(private storageService :StorageService, private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getFromId(this.storageService.getUser()).subscribe({
      next: data => {
        console.log(data);
        this.user = data;
      
      },
      
      error: err => {
         
        console.error(err);
        this.reloadPage();
      
      }

  });
}
reloadPage(): void {
  window.location.reload();
}
}
