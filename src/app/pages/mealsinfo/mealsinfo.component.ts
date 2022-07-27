import {Component, OnInit} from '@angular/core';
import {HelperService} from "../../core/services/helper/helper.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-mealsinfo',
  templateUrl: './mealsinfo.component.html',
  styleUrls: ['./mealsinfo.component.scss']
})
export class MealsinfoComponent implements OnInit {

  constructor(public _helper: HelperService, private route: Router) {
  }

  ngOnInit(): void {
  }

  closeInfoPopup() {
    this.route.navigate(['pages/meals'])
  }


}
