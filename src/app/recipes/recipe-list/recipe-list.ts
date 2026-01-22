import { Component } from '@angular/core';
import { RecipeItem } from './recipe-item/recipe-item';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeItem],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.scss',
})
export class RecipeList {

  recipes: Recipe[] = [];
  index!: number;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    // Navigate to the recipe edit page for creating a new recipe
    // Assuming you have a router service injected
    this.router.navigate(['new'], { relativeTo: this.route });
  }

}
