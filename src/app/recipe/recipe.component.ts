import {AfterViewChecked, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers:[]
})
export class RecipeComponent implements OnInit, AfterViewChecked {

  ngOnInit() {

  }

  ngAfterViewChecked() {
  }
}
