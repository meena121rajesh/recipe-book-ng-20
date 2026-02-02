import { Component, OnInit, signal } from '@angular/core'; 
import { Recipes } from './recipes/recipes';
import { ShoppingList } from './shopping-list/shopping-list';
import { Header } from './header/header';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './auth/auth-service';

@Component({
  selector: 'app-root',
  imports: [Recipes, ShoppingList, Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  protected readonly title = signal('recipe-book');
  loadedFeature = 'recipe';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.autoLogin();
  }

}
