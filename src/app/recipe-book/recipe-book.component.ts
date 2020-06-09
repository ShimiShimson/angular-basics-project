import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeBookService } from './recipe-book.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  providers: [RecipeBookService]
})
export class RecipeBookComponent implements OnInit{
  selectedRecipe: Recipe;
  @Output() featureSelected = new EventEmitter<string>();

  constructor(private recipeBookService: RecipeBookService) {}

  ngOnInit() {
    this.recipeBookService.recipeEmitter
      .subscribe(
        (recipe: Recipe) => {
          this.selectedRecipe = recipe;
        }
      );
  }

  onFeatureReceived(feature: string) {
    this.featureSelected.emit(feature);
  }  
}
