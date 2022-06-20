import { Component, Input, OnInit } from "@angular/core";
import { Recipe } from "../../recipe.model";
import { RecipeService } from "src/app/recipes/recipe.service";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"],
})
export class RecipeItemComponent implements OnInit {
  @Input("recipeItem") recipe: Recipe;
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}
  onSelected() {
    //call event is service
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
