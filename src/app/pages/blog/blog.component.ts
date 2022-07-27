import { Component, OnInit } from '@angular/core';
import {PublicationService} from '../../shared/services/publicationservice.service';
import {Publication} from '../../models/publication';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  pubs: Publication[];
  addForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router,
    private service: PublicationService, private matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getPubs();
    this.addForm = this.formBuilder.group({
      id: [],
      title: ['', Validators.required],
      content: ['', Validators.required],
      archive: ['', Validators.required],
      dateTimeOfPub: ['', Validators.required]
    });
  }

  getPubs() {
    this.service.getPub()
      .subscribe(
        data => {
          console.log(data);
          if (data && data.length > 0) {
            this.pubs = data;
          }},
          error => {
            console.log('error', error);
          });
        }

  deletePub(pubId): void {
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
  onSubmit() {
    this.service.addPub(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-Pub']);
      });
  }
}
