import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/user/auth.service';
import { StorageService } from 'src/app/shared/services/user/storage.service';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/message', title: 'Message',  icon: 'ni ni-email-83 text-red', class: '' },
    { path: '/travel', title: 'Assigner un voyage',  icon: 'ni ni-planet text-blue', class: '' },
    { path: '/travel/list', title: 'Liste des voyages',  icon: 'ni ni-planet text-blue', class: '' },
    { path: '/travel/add', title: 'Ajouter des voyages',  icon: 'ni ni-planet text-blue', class: '' },
    { path: '/travel/search', title: 'Chercher un voyage',  icon: 'ni ni-planet text-blue', class: '' },
    { path: '/blog', title: 'Blog',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/feedback', title: 'FeedBack',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/statistique', title: 'Statistic',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/listeinvitation', title: 'Invitation',  icon: 'ni-tv-2 text-primary', class: '' }

    

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  constructor(private authService: AuthService, private storageService: StorageService,private router: Router) 
  { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
  
  
}
