import { Component } from '@angular/core';
import { RecipeList } from './recipe-list/recipe-list';
import { RecipeDetail } from './recipe-detail/recipe-detail'; 
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-recipes',
  imports: [RecipeList, RecipeDetail, RouterOutlet],
  templateUrl: './recipes.html',
  styleUrl: './recipes.scss',
})
export class Recipes {

  constructor() {}

  ngOnInit() {
 
  }

}
