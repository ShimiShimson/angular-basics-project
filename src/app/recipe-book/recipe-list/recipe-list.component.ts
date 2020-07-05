import { Component, Output, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeBookService } from '../recipe-book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy{
  // @Output() recipe: Recipe;
  @Output() recipes: Recipe[];
  subscription: Subscription;

  constructor(
    private recipeBookService: RecipeBookService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.recipeBookService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      )
    this.recipes = this.recipeBookService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }
}
