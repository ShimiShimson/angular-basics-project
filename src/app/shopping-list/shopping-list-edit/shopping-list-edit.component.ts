import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputReference: ElementRef;
  @ViewChild('amountInput') amountInputReference: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddClick(nameInput: string, amountInput: number) {
    const ingName = this.nameInputReference.nativeElement.value;
    const ingAmount = this.amountInputReference.nativeElement.value;
    const ingredient = new Ingredient(ingName, ingAmount)
    console.log(ingredient)
    this.shoppingListService.onIngredientReceived(ingredient)
  }

}
