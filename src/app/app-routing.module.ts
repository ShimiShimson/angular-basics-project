import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-book/recipe-list/recipe-item/recipe-item.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RecipeStartComponent } from './recipe-book/recipe-start/recipe-start.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/recipe-book', pathMatch: 'full' },
  {
    path: 'recipe-book', 
    component: RecipeBookComponent, 
    children: [
      { path: '', component: RecipeStartComponent},
      { path: ':id', component: RecipeDetailComponent },
      {
        path: 'recipe-list', component: RecipeListComponent, children: [
          { path: 'recipe-item', component: RecipeItemComponent }
        ]
      }
    ]
  },
  {
    path: 'shopping-list', component: ShoppingListComponent,
    children: [
      { path: 'shopping-list-edit', component: ShoppingListComponent }
    ]
  },
  {
    path: 'not-found', component: ErrorPageComponent, data: {message: "It seems that the address you tried to reach doesn't exist"}
  },
  {
    path: '**', redirectTo: '/not-found'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
