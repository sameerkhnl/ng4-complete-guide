import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RecipeService} from '../recipe.service';
import {Ingredient} from '../../shared/Ingredient';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.route.params.subscribe((p) => {
      console.log(p['id']);
      if (p['id'] !== undefined) {
        this.editMode = true;
        this.id = Number(p['id']);
      }
      console.log('new mode: ' + !this.editMode);
    });
    this.initForm();
  }

  onSubmit() {
    console.log(this.recipeForm.get('ingredients'));

  }

  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  onAddIngredient() {
    this.ingredients.push(this.fb.group({name: ['', Validators.required], amount: [0, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]]}));
  }

  removeIngredient(i: number) {
    this.ingredients.controls.splice(i, 1);
    console.log(this.ingredients.controls);
  }

  onSave() {
    if (this.editMode) {
      const retrieved = this.recipeService.getRecipeById(this.id);
      const formModel = this.recipeForm.value;
      const ingredientsCopy = formModel.ingredients.map((ingredient: Ingredient) => Object.assign({}, ingredient));
      const saveRecipe: Recipe = {
        id: this.id,
        name: formModel.name,
        description: formModel.description,
        imagePath: formModel.imageUrl,
        ingredients: ingredientsCopy
      };
      retrieved.name = saveRecipe.name;
      retrieved.description = saveRecipe.description;
      retrieved.imagePath = saveRecipe.imagePath;
      retrieved.ingredients = saveRecipe.ingredients;

    }
  }

  initForm() {
    this.recipeForm = this.fb.group({
      name: ['', Validators.required],
      imageUrl: ['', Validators.required],
      description: ['', Validators.required],
      ingredients: this.fb.array([]),
    });

    if (this.editMode) {
      this.initFromRecipe(this.recipe);
    }
  }

  initFromRecipe(recipe: Recipe) {
    if (recipe.ingredients) {
      const ingsTemp = recipe.ingredients.slice().map(i => this.fb.group({name: [i.name, Validators.required], amount: [i.amount, [Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]]}));
      const ingredientsFormsArray = this.fb.array(ingsTemp);
      this.recipeForm.setControl('ingredients', ingredientsFormsArray);
      this.recipeForm.patchValue({
        name: recipe.name,
        imageUrl: recipe.imagePath,
        description: recipe.description,
      });
      console.log(ingredientsFormsArray);
      console.log(this.ingredients);
    }
  }

  get recipe() {
    return this.recipeService.getRecipeById(this.id);
  }


}
