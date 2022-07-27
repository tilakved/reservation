import {Component, OnInit} from '@angular/core';
import {HelperService} from "../../core/services/helper/helper.service";
import {Router} from "@angular/router";
import {FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.scss']
})
export class BooknowComponent implements OnInit {
  total: number = 0;
  activepay: boolean = false;

  details = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    lastName: new FormControl(''),
  });
  flag: any = 'assets/svgs/flags/flag-of-netherlands.svg';
  openFlag: boolean = false;

  constructor(public _helper: HelperService, private route: Router) {

  }

  ngOnInit(): void {
    this.total = Number(this._helper.personSelected) * Number(this._helper.mealSelected.price)
  }

  OpenMeal() {
    this.route.navigate(['pages/meals'])
  }

  payWith(method: string) {
    console.log(method)
    // this.activepay = !this.activepay
  }

  bookNow() {
    this.route.navigate(['pages/bookCompleted'])
  }


  selected_flag(country: string) {
    if (country == 'nl') {
      this.flag = 'assets/svgs/flags/flag-of-netherlands.svg';
    } else if (country == 'germany') {
      this.flag = 'assets/svgs/flags/germanyc.svg';
    } else if (country == 'china') {
      this.flag = 'assets/svgs/flags/china-2.svg';
    } else if (country == 'uk') {
      this.flag = 'assets/svgs/flags/flag-of-the-united-kingdom-2.svg';
    }
    this.openFlag = !this.openFlag

  }

  open_flag_selector() {
    this.openFlag = !this.openFlag
  }
}
