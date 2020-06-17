import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeBookService {
    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel',
        'Recipe for delicous Schnitzel',
        'https://cdn.pixabay.com/photo/2019/03/25/20/20/schnitzel-4081269_960_720.jpg',
        [
          new Ingredient('Meat', 1),
          new Ingredient('French Fries', 20)
        ]),
        new Recipe('Big Fat Burger',
        'I know you want it',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/1024px-RedDot_Burger.jpg',
        [
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 2)
        ])
      ];

      constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
      }
    getRecipe(index: number){
      return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.shoppingListService.addIngredients(ingredients);
    }
}