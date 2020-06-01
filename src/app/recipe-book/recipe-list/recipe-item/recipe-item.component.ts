import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeBookService } from '../../recipe-book.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  @Input() recipe: Recipe;

  constructor(private recipeBookService: RecipeBookService){}

  onRecipeClick() {
    this.recipeBookService.recipeEmitter.emit(this.recipe);
  }
}
