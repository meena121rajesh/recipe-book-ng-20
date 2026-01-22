import { Component, signal } from '@angular/core'; 
import { Recipes } from './recipes/recipes';
import { ShoppingList } from './shopping-list/shopping-list';
import { Header } from './header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Recipes, ShoppingList, Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('recipe-book');
  loadedFeature = 'recipe';

  onNavigate(feature: string) { 
    this.loadedFeature = feature;
  }

}
