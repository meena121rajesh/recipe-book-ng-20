import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { FormsModule } from '@angular/forms';
import { ShoppingListService } from '../shopping-list-service';

@Component({
  selector: 'app-shopping-edit',
  imports: [FormsModule],
  templateUrl: './shopping-edit.html',
  styleUrl: './shopping-edit.scss',
})
export class ShoppingEdit {

  // @ViewChild('nameInput') nameInputRef!: Ingredient;
  // @ViewChild('amountInput') amountInputRef!: Ingredient;

  @ViewChild('nameInput') nameInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput') amountInputRef!: ElementRef<HTMLInputElement>;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddItem() { 
    const ingName = (this.nameInputRef.nativeElement as HTMLInputElement).value;
    const ingAmount = (this.amountInputRef.nativeElement as HTMLInputElement).value;
    const newIngredient = new Ingredient(ingName, Number(ingAmount)); 
    this.shoppingListService.addIngredients([newIngredient]);
  }
}
