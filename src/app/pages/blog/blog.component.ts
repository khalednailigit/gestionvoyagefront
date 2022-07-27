import { Component, OnInit } from '@angular/core';
import {PublicationService} from '../../shared/services/publicationservice.service';
import {Publication} from '../../models/publication';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  pubs: Publication[];

  constructor(private service: PublicationService, private matSnackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getPubs();
  }

  getPubs() {
    this.service.getPub()
      .subscribe(
        data => {
          console.log(data);
          if (data && data.length > 0) {
            this.pubs = data;
          }
        },
        error => {
          console.log('error', error);
        });
  }



  deletePub(pubId) {
    this.service.deletePub(pubId).subscribe((message) => {
      if (message.statusCode === 202) {
        this.matSnackBar.open('Pub Deleted Successfully', 'OK', {
          duration: 4000,
        });
      } else {
        this.matSnackBar.open('Error in Pub Deletion', 'ok', {duration: 4000});
      }
    });
  }
}
