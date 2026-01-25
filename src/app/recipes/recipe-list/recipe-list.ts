import { Component } from '@angular/core';
import { RecipeItem } from './recipe-item/recipe-item';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeItem],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.scss',
})
export class RecipeList {

  subscription!: Subscription;
  recipes: Recipe[] = [];
  index!: number;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged.subscribe((recipes: Recipe[])=> {
      this.recipes = recipes;
    })
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    // Navigate to the recipe edit page for creating a new recipe
    // Assuming you have a router service injected
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
