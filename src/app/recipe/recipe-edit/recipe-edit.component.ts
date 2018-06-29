import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private recipeService: RecipeService, private router: Router) {
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

  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  onAddIngredient() {
    this.ingredients.push(this.fb.group({
      name: ['', Validators.required],
      amount: [0, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]]
    }));
  }

  removeIngredient(i: number) {
    this.ingredients.removeAt(i);
  }

  onSave() {
    console.log(this.recipeForm);
    this.addOrUpdateRecipe();
    this.recipeForm.reset();
  }

  addOrUpdateRecipe() {
    if (this.editMode) {
      this.updateRecipe();
    } else {
      this.addRecipe();
    }
  }

  addRecipe() {
    if(!this.editMode){
      let formModel: Recipe = this.recipeForm.value;
      const ingredientCopy = formModel.ingredients.map(i => Object.assign({}, i));
      const saveRecipe: Recipe = {
        name: formModel.name,
        description: formModel.description,
        imagePath: formModel.imagePath,
        ingredients: ingredientCopy
      };
      this.recipeService.createRecipe(saveRecipe);
    }
  }

  updateRecipe() {
    if (this.editMode) {
      let retrieved = this.recipeService.getRecipeById(this.id);
      let formModel: Recipe = this.recipeForm.value;
      const ingredientsCopy = formModel.ingredients.map((ingredient: Ingredient) => Object.assign({}, ingredient));
      const saveRecipe: Recipe = {
        id: this.id,
        name: formModel.name,
        description: formModel.description,
        imagePath: formModel.imagePath,
        ingredients: ingredientsCopy
      };
      this.recipeService.updateRecipe(saveRecipe);

    }
  }


  initForm() {
    this.recipeForm = this.fb.group({
      name: ['', Validators.required],
      imagePath: ['', Validators.required],
      description: ['', Validators.required],
      ingredients: this.fb.array([]),
    });

    if (this.editMode) {
      this.initFromRecipe(this.recipe);
    }
  }

  initFromRecipe(recipe: Recipe) {
    if (recipe.ingredients) {
      const ingsTemp = recipe.ingredients.map(i => this.fb.group({
        name: [i.name, Validators.required],
        amount: [i.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]]
      }));
      const ingredientsFormsArray = this.fb.array(ingsTemp);
      this.recipeForm.setControl('ingredients', ingredientsFormsArray);
      this.recipeForm.patchValue({
        name: recipe.name,
        imagePath: recipe.imagePath,
        description: recipe.description,
      });
    }
  }

  get recipe() {
    return this.recipeService.getRecipeById(this.id);
  }

  onCancel() {
    this.router.navigate(["recipe", this.id]);
  }

  onDelete(){
    this.router.navigate(["recipe"]);
  }
}
