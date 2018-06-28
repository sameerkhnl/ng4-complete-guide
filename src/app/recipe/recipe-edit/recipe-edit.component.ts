import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  constructor(private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    this.route.params.subscribe((p) => {
      this.id = Number(p['id']);
      console.log(p['id']);
      if(p['id'] !== undefined){
        this.editMode = true;
      }
      console.log('new mode: ' + !this.editMode);
    });

    this.recipeForm = this.fb.group({
      name: '',
      imageUrl: '',
      description: '',
      ingredients: this.fb.array([]),
    });
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

}
