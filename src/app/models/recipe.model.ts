// recipe.model.ts
export interface RecipeModel {
  id: number;
  name: string;
  description?: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  image: string;
  rating: number;
}

export interface GetRecipesResponseModel {
  recipes: RecipeModel[];
  total: number;
  skip: number;
  limit: number;
}