import {Component, OnInit} from '@angular/core';
import {HelperService} from "../../core/services/helper/helper.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-mealsmenu',
  templateUrl: './mealsmenu.component.html',
  styleUrls: ['./mealsmenu.component.scss']
})
export class MealsmenuComponent implements OnInit {

  constructor(public _helper: HelperService, private route: Router) {
  }

  ngOnInit(): void {
  }

  read_popup(meal: any) {
    this._helper.mealSelected = meal
    this.route.navigate(['pages/mealsInfo'])
  }

  OpenDropdownSelector(dropdown_category: any) {
    this._helper.NoBacktoHome = true
    this._helper.dropdown_category = dropdown_category;
    this.route.navigate(['pages/selector']);
  }

  openBookNow(meal: any) {
    this._helper.mealSelected = meal
    this.route.navigate(['pages/book'])
  }
}
