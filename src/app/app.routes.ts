import { Routes } from '@angular/router'; 
import { Recipes } from './recipes/recipes';
import { ShoppingList } from './shopping-list/shopping-list';
import { RecipeStart } from './recipes/recipe-start/recipe-start';
import { RecipeDetail } from './recipes/recipe-detail/recipe-detail';
import { RecipeEdit } from './recipes/recipe-edit/recipe-edit';
import { RecipeResolverService } from './recipes/recipe-resolver-service';
import { Auth } from './auth/auth';
import { AuthGuard } from './auth/auth-guard';

export const routes: Routes = [
  {
    path: '', redirectTo: '/recipes', pathMatch: 'full'
  },
  {
    path: 'recipes', component: Recipes, canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: RecipeStart
      },
      {
        path: 'new',
        component: RecipeEdit
      },
      {
        path: ':id',
        component: RecipeDetail, resolve: [RecipeResolverService]
      },
      {
        path: ':id/edit',
        component: RecipeEdit, resolve: [RecipeResolverService]
      }, 
    ]
  },
  { 
    path: 'shopping-list',
    component: ShoppingList
  },
  {
    path: 'auth',
    component: Auth
  }
];
