import { Component, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { FormsModule, NgForm } from '@angular/forms';
import { ShoppingListService } from '../shopping-list-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  imports: [FormsModule],
  templateUrl: './shopping-edit.html',
  styleUrl: './shopping-edit.scss',
})
export class ShoppingEdit {

  subscription!: Subscription;
  editMode = false;
  editedItemIndex!:number;
  editedItem!: Ingredient;

  @ViewChild('f') shoppingListForm! : NgForm;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.subscription= this.shoppingListService.startedEditing.subscribe((indx:number)=> {
      this.editMode = true;
      this.editedItemIndex = indx;
      this.editedItem = this.shoppingListService.getIngredient(indx);

      this.shoppingListForm.setValue({
        name:this.editedItem.name,
        amount: this.editedItem.amount
      })
    })
  }

  onSubmit(form: NgForm) {  
    const value = form.value;
    const newIngredient = new Ingredient(value.name, Number(value.amount)); 
    if(this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredients([newIngredient]);
    }
    this.editMode = false;
    this.shoppingListForm.reset();
  }

  onClear() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex); 
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
