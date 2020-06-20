import { Component, OnInit, OnDestroy, ViewChild, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
@Injectable()
export class ShoppingListEditComponent implements OnInit, OnDestroy{
  @ViewChild('f', {static: false}) shoppingListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
 
  constructor(private shoppingListService: ShoppingListService) { }

  // onAddClick(nameInput: string, amountInput: number) {
  //   const ingName = this.nameInputReference.nativeElement.value;
  //   const ingAmount = this.amountInputReference.nativeElement.value;
  //   const ingredients: Ingredient[] = [];
  //   ingredients.push(new Ingredient(ingName, ingAmount))
  //   this.shoppingListService.addIngredients(ingredients)
  // }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          console.log(this.shoppingListService)
          this.editedItem = this.shoppingListService.getIngredient(index);
          this.shoppingListForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount)
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient)
    } else {
      this.shoppingListService.addIngredient(newIngredient)
    }
    this.editMode = false;
    form.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
