import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((p) => {
      this.id = Number(p['id']);
      console.log(p['id']);
      if(p['id'] !== undefined){
        this.editMode = true;
      }
      console.log('new mode: ' + !this.editMode);
    });
  }

}
