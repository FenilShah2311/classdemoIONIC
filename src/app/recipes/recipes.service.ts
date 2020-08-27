import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { findLast } from '@angular/compiler/src/directive_resolver';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor() { }
  private recipes:Recipe[] = [{
    id:"r1",
    title:"Meggie",
    imageUrl:'https://homepages.cae.wisc.edu/~ece533/images/boat.png',
    ingredians: ['Meggie masala','Gas connection','Water']
  },
  {id:"r2",
  title:"Pasta",
  imageUrl:'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
  ingredians: ['Pasta masala','Gas connection','Water']
},

  {id:"r3",
  title:"Noodles",
  imageUrl:'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
  ingredians: ['Noodles Packet','Gas connection','Water','Vegetables']
},
];

getAllrecipe(){
  return [...this.recipes];
}
getrecipe(recipeId){
   return {
     ...this.recipes.find(recipe => {
       return recipe.id === recipeId;
     }),
   };
}
deleteRecipe(recipeId: string){
  this.recipes=this.recipes.filter(recipe => {
    return recipe.id !== recipeId;
  });
}
}
