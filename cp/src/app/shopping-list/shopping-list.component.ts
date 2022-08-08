import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  selectedIngredient: Ingredient;
  ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('Tomatoes', 15),
    new Ingredient('Chicken breast', 2),
    new Ingredient('salt', 1),
  ];
  constructor() {}

  ngOnInit(): void {}
  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
