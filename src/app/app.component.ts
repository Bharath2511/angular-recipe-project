import { Component } from "@angular/core";
import { Recipe } from "src/app/recipes/recipe.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  loadedFeature = "recipe";

  onRecipeSelected(recipe: Recipe) {
    console.log("recipe is", recipe);
  }
}
