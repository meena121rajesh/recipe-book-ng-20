import { Component } from '@angular/core';
import { Dropdown } from '../shared/dropdown';
import { Router, RouterModule } from '@angular/router';
import { DataStorageService } from '../shared/data-storage-service';

@Component({
  selector: 'app-header',
  imports: [Dropdown, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
   
  constructor(private router: Router, private dataStorageService: DataStorageService) {}

  // onSelect(feature: string) {  

  //    if (feature === 'recipe') {
  //     this.router.navigate(['/recipes']);
  //   }
  //   else if (feature === 'shopping-list') {
  //     this.router.navigate(['/shopping-list']);
  //   }
  // } 

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
