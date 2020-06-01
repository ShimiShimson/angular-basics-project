import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {

    ingredientEmitter = new EventEmitter<Ingredient>();
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];

      onIngredientReceived(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
        console.log(this.ingredients)
      }
}