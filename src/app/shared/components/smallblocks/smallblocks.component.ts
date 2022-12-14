import {Component, OnInit} from '@angular/core';
import {HelperService} from "../../../core/services/helper/helper.service";
import {Router} from "@angular/router";
import {Output, EventEmitter} from '@angular/core';


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
  @Output() newItemEvent = new EventEmitter<string>();

  constructor(public _helper: HelperService, private route: Router) {

  }

  ngOnInit(): void {
    if (this._helper.dropdown_category == 'time') {
      this.selection_heading = "a timeslot"
      this.selection_arr = this._helper.timings_arr
      this.selected = this._helper.timeSelected
    }
    if (this._helper.dropdown_category == 'persons') {
      this.selection_heading = "number of persons"
      this.selection_arr = this._helper.no_of_person_arr
      this.selected = this._helper.personSelected
    }
    if (this._helper.dropdown_category == 'date') {
      this.selection_heading = "a date"
    }
    if (this._helper.dropdown_category == 'section') {
      this.selection_heading = "section"
      this.selection_arr = this._helper.section_arr
      this.selected = this._helper.sectionSelected
    }
  }

  reserved(options: any) {

    if (this._helper.dropdown_category == 'time') {
      if (!this.booked) {
        this.newItemEvent.emit(options);
        this._helper.timeSelected = options
        this._helper.NoBacktoHome = false;
        this.route.navigate(['pages/meals']);
        // this.booked = true;
      } else {
        this._helper.bookedPopup = true
      }
    } else if (this._helper.dropdown_category == 'persons') {
      this._helper.personSelected = options
      this.newItemEvent.emit(options)
      this.selected = options


    } else if (this._helper.dropdown_category == 'section') {
      this._helper.sectionSelected = options
      this.newItemEvent.emit(options);
      this.selected = options

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
