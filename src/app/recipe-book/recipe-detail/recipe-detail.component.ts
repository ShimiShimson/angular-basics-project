import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
// import { PassIngredientsService } from '../pass-ingredients.service';
import { RecipeBookService } from '../recipe-book.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeBookService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit() {
      this.route.params
        .subscribe(
          (params: Params) => {
            this.id = +params['id'];
            this.recipe = this.recipeService.getRecipe(this.id);
          }
        )
    }

  onAddToShoppingList(): void {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route})
    //Alternative more specified way:
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }
}
