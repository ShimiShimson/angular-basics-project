import { Component, Output, Input, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Yummy Stuff', 'This is simply a test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('Delicous Dish', 'How to make --- Delicious Dish', 'https://storage.needpix.com/rsynced_images/recipe-3836174_1280.jpg')
  ];

  @Output() recipe: Recipe;
  @Input() recipeReceived;
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  // onRecipeReceived(recipeReceived){
  //   this.recipeWasSelected.emit(recipeReceived)
  // }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe)
  }
}
