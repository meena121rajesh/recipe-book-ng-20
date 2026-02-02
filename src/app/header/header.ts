import { Component } from '@angular/core';
import { Dropdown } from '../shared/dropdown';
import { Router, RouterModule } from '@angular/router';
import { DataStorageService } from '../shared/data-storage-service';
import { AuthService } from '../auth/auth-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [Dropdown, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  isAuthenticated = false;
  userSub!: Subscription;
   
  constructor(private router: Router, private dataStorageService: DataStorageService, private authService: AuthService) {}

  ngOnInit(){
    this.userSub = this.authService.user.subscribe(userResponse=>{
      // this.isAuthenticated = !userResponse ? false: true; // alternative way given below
      this.isAuthenticated = !!userResponse
    })
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
