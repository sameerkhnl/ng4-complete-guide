import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Ingredient} from '../../shared/Ingredient';
import {Recipe} from '../recipe.model';
import * as fromRecipe from '../store/recipe.reducers';
import {Store} from '@ngrx/store';
import * as fromRecipeActions from '../store/recipe.actions';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private store: Store<fromRecipe.FeatureState>) {
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
    if (!this.editMode) {
      let formModel: Recipe = this.recipeForm.value;
      const ingredientCopy = formModel.ingredients.map(i => Object.assign({}, i));
      const saveRecipe: Recipe = {
        id: null,
        name: formModel.name,
        description: formModel.description,
        imagePath: formModel.imagePath,
        ingredients: ingredientCopy
      };
      this.store.dispatch(new fromRecipeActions.AddRecipe(saveRecipe));
    }
  }

  updateRecipe() {
    if (this.editMode) {
      let formModel: Recipe = this.recipeForm.value;
      const ingredientsCopy = formModel.ingredients.map((ingredient: Ingredient) => Object.assign({}, ingredient));
      const saveRecipe: Recipe = {
        id: this.id,
        name: formModel.name,
        description: formModel.description,
        imagePath: formModel.imagePath,
        ingredients: ingredientsCopy
      };
      this.store.dispatch(new fromRecipeActions.UpdateRecipe({index: this.id, updatedRecipe: saveRecipe}))
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
      this.store.select('recipes').pipe(take(1)).subscribe((recipeState: fromRecipe.State) => {
        const recipe = recipeState.recipes[this.id];
        this.initFromRecipe(recipe);
      });
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

  onCancel() {
    if (this.editMode) {
      this.router.navigate(['../'], {relativeTo: this.route});
    } else {
      this.router.navigate(["recipe"]);
    }
  }
}

