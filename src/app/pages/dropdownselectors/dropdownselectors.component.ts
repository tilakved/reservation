import {Component, OnInit} from '@angular/core';
import {HelperService} from "../../core/services/helper/helper.service";

@Component({
  selector: 'app-dropdownselectors',
  templateUrl: './dropdownselectors.component.html',
  styleUrls: ['./dropdownselectors.component.scss']
})
export class DropdownselectorsComponent implements OnInit {
  dropdownLabel: any;
  dropdownSelection: any;

  constructor(public _helper: HelperService) {
  }

  ngOnInit(): void {
    if (this._helper.dropdown_category == 'persons') {
      this.dropdownLabel = 'No. person';
      this.dropdownSelection = this._helper.personSelected + ' persons';

    }
    if (this._helper.dropdown_category == 'date') {
      this.dropdownLabel = 'Date';
      this.dropdownSelection = this._helper.dateSelected;
    }
    if (this._helper.dropdown_category == 'section') {
      this.dropdownLabel = 'Section';
      this.dropdownSelection = this._helper.sectionSelected;
    }
  }

}
