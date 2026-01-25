import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingEdit } from './shopping-edit/shopping-edit';
import { ShoppingListService } from './shopping-list-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  imports: [ShoppingEdit],
  templateUrl: './shopping-list.html',
  styleUrl: './shopping-list.scss',
})
export class ShoppingList {
  ingredients: Ingredient[] = [];
  private subscription!: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() { 
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }

  onEditItem(index:number){
    console.log('indx', index);
    this.shoppingListService.startedEditing.next(index);
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
