import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.page.html',
  styleUrls: ['./recipes-detail.page.scss'],
})
export class RecipesDetailPage implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,
    private recipeService:RecipesService,
    private router:Router) { }
  loadedRecipe:Recipe;
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipeId')){
        this.router.navigate(['recipes']);
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe=this.recipeService.getrecipe(recipeId);
      if(!this.loadedRecipe.id){
        this.router.navigate(['recipes']);
      }
    })
  }
  onDeleteClick(){
    this.recipeService.deleteRecipe(this.loadedRecipe.id);
    this.router.navigate(['recipes']);
  }

}
