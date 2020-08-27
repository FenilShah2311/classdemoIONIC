import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

 @Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
recipes:Recipe[];

  constructor(private recipeService:RecipesService) { }

  ngOnInit() {
    this.recipes=this.recipeService.getAllrecipe();
  }
  ionViewWillEnter(){
    this.recipes=this.recipeService.getAllrecipe();
    console.log("View Will Enter");
  }
  ionViewDidLoad(){
    console.log("View Did Load");
  }
  ionViewDidEnter(){
    console.log("View Did Enter");
  }
  ionViewWillLeave(){
    console.log("View will leave");
  }
}
