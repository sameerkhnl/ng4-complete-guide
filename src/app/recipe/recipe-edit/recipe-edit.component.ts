import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {RecipeService} from '../recipe.service';
import {Ingredient} from '../../shared/Ingredient';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe((p) => {
      console.log(p['id']);
      if(p['id'] !== undefined){
        this.editMode = true;
        this.id = Number(p['id']);
      }
      console.log('new mode: ' + !this.editMode);
    });

    this.recipeForm = this.fb.group({
      name: '',
      imageUrl: '',
      description: '',
      ingredients: this.fb.array([]),
    });

    if(this.editMode){
      const recipe = this.recipeService.getRecipeById(this.id);
      const ingsTemp = recipe.ingredients.map(ip => this.fb.group(ip));
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

  onSubmit() {
    console.log(this.recipeForm.get('ingredients'));

  }

  get ingredients(){
    return this.recipeForm.get('ingredients') as FormArray;
  }

  onAddIngredient() {
    this.ingredients.push(this.fb.group(new Ingredient('', 0)));
  }


}
