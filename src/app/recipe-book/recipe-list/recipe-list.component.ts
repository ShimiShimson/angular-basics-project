import { Component, Output, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeBookService } from '../recipe-book.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  @Output() recipe: Recipe;
  @Output() recipes: Recipe[];
  // @Input() recipeReceived;

  constructor(
    private recipeBookService: RecipeBookService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.recipes = this.recipeBookService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
