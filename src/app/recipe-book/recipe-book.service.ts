import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeBookService {
  recipesChanged = new Subject<Recipe[]>();

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

    addRecipe(recipe: Recipe) {
      this.recipes.push(recipe);
      this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
      this.recipes[index] = newRecipe;
      this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
      this.recipes.splice(index, 1);
      this.recipesChanged.next(this.recipes.slice());
    }
}