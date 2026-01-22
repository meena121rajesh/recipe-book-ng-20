import { Component } from '@angular/core';
import { RecipeList } from './recipe-list/recipe-list';
import { RecipeDetail } from './recipe-detail/recipe-detail';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-recipes',
  imports: [RecipeList, RecipeDetail, RouterOutlet],
  templateUrl: './recipes.html',
  styleUrl: './recipes.scss',
})
export class Recipes {

  selectedRecipe!: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }

}
