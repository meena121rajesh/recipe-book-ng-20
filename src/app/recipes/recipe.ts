import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list-service'; 
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class RecipeService {

  recipesChanged = new Subject<Recipe[]>()

  // recipes: Recipe[] = [
  //     new Recipe('Test Recipe', 
  //       'This is a test recipe', 'https://img.taste.com.au/usDoXvoa/taste/2018/01/healthy-chicken-chow-mein-134805-1.jpg', 
  //       [
  //         new Ingredient('Banana', 5),
  //         new Ingredient('Grapes', 10)
  //       ]),
  //     new Recipe('Another Test Recipe', 'This is another test recipe', 'https://assets.epicurious.com/photos/5988e3458e3ab375fe3c0caf/1:1/w_2560%2Cc_limit/How-to-Make-Chicken-Alfredo-Pasta-hero-02082017.jpg', 
  //       [
  //         new Ingredient('Buns', 2),
  //         new Ingredient('Meat', 1)
  //       ])
  //   ];

    recipes: Recipe[] = [];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
      return this.recipes.slice();
    }

    setRecipes(recipes: Recipe[]){
      this.recipes = recipes;
      this.recipesChanged.next(this.recipes.slice());
    }

    getRecipe(index: number) {
      return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) { 
      this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
      this.recipes.push(recipe);
      this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
      this.recipes[index] = newRecipe;
      this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
      this.recipes.splice(index, 1);
      this.recipesChanged.next(this.recipes.slice());
    }
}
