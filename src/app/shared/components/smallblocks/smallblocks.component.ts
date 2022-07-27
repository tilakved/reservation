import {Component, OnInit} from '@angular/core';
import {HelperService} from "../../../core/services/helper/helper.service";
import {Router} from "@angular/router";

// import * as moment from 'moment';

@Component({
  selector: 'app-smallblocks',
  templateUrl: './smallblocks.component.html',
  styleUrls: ['./smallblocks.component.scss']
})
export class SmallblocksComponent implements OnInit {
  booked: boolean = false;
  selection_arr: any = [];
  selection_heading: any = '';
  dates: any;
  selected: any;

  now: Date = new Date();

  constructor(public _helper: HelperService, private route: Router) {

  }

  ngOnInit(): void {
    if (this._helper.dropdown_category == 'time') {
      this.selection_heading = "a timeslot"
      this.selection_arr = this._helper.timings_arr
    }
    if (this._helper.dropdown_category == 'persons') {
      this.selection_heading = "number of persons"
      this.selection_arr = this._helper.no_of_person_arr
    }
    if (this._helper.dropdown_category == 'date') {
      this.selection_heading = "a date"
    }
    if (this._helper.dropdown_category == 'section') {
      this.selection_heading = "section"
      this.selection_arr = this._helper.section_arr
    }
  }

  reserved(options: any) {

    if (this._helper.dropdown_category == 'time') {
      if (!this.booked) {
        this._helper.timeSelected = options
        this._helper.NoBacktoHome = false;
        this.route.navigate(['pages/meals']);
        // this.booked = true;
      } else {
        this._helper.bookedPopup = true
      }
    } else if (this._helper.dropdown_category == 'persons') {
      this._helper.personSelected = options

    } else if (this._helper.dropdown_category == 'section') {
      this._helper.sectionSelected = options

      // else if(this._helper.NoBacktoHome == true){
      //   this.route.navigate(['pages/meals']);
      // }
    }


  }

  go() {
    this._helper.dropdown_category = 'time'
    if (this._helper.NoBacktoHome == false) {
      this.route.navigate(['pages/home']);
    } else if (this._helper.NoBacktoHome == true) {
      this.route.navigate(['pages/meals']);
    }
  }

}
