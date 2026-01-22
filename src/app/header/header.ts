import { Component } from '@angular/core';
import { Dropdown } from '../shared/dropdown';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [Dropdown, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
   
  constructor(private router: Router) {}

  // onSelect(feature: string) {  

  //    if (feature === 'recipe') {
  //     this.router.navigate(['/recipes']);
  //   }
  //   else if (feature === 'shopping-list') {
  //     this.router.navigate(['/shopping-list']);
  //   }
  // }
}
