import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model'; 
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  imports: [RouterModule, RouterOutlet],
  templateUrl: './recipe-item.html',
  styleUrl: './recipe-item.scss',
})
export class RecipeItem {
  @Input() recipe!: Recipe; 
  @Input() index!: number;

  constructor() {}
}
