import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
// import { PassIngredientsService } from '../pass-ingredients.service';
import { RecipeBookService } from '../recipe-book.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;
  @Output() featureSelected = new EventEmitter<string>();

  constructor(private recipeService: RecipeBookService) { }

  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  //   this.passIngredientsService.displayIngredients(this.recipe);
  // }
  onAddToShoppingList(): void {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
