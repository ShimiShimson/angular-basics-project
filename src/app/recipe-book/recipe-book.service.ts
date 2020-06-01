import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeBookService {
    recipeEmitter = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Yummy Stuff', 'This is simply a test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
        new Recipe('Delicous Dish', 'How to make --- Delicious Dish', 'https://storage.needpix.com/rsynced_images/recipe-3836174_1280.jpg')
      ];

    getRecipes() {
        return this.recipes.slice();
      }
}