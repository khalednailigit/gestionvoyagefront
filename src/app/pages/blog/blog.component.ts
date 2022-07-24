import { Component, OnInit } from '@angular/core';
import {PublicationService} from '../../shared/services/publicationservice.service';
import {Publication} from '../../models/publication';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  pubs: Publication[];
  constructor(private service: PublicationService) { }
  ngOnInit(): void {
    this.getPubs();
  }

  getPubs() {
    this.service.getPub()
      .subscribe(
        data => {
          if (data && data.length > 0) {
            this.pubs = data;
          }},
          error => {
            console.log('error', error);
          });
        }
}
