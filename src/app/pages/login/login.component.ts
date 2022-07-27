
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { $ } from 'protractor';
import { AuthService } from 'src/app/shared/services/user/auth.service';
import { StorageService } from 'src/app/shared/services/user/storage.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private authService: AuthService, private storageService: StorageService,private router: Router) { }
  ngOnInit(): void {
    
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }
  onSubmit(): void {
    const { username, password } = this.form;
 
    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        this.storageService.saveToken(data.accessToken);
        
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
         console.error(data);
          this.router.navigate(['/dashboard']);
     
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        console.error("failure");
        this.reloadPage();
        alert("failure");
      }
    });
  }
  reloadPage(): void {
    window.location.reload();
  }
}