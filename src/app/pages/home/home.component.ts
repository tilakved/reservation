import {Component, OnInit} from '@angular/core';
import {HelperService} from "../../core/services/helper/helper.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  storeName: any = "Angus steakhouse";

  openSectionSelectionBool = true

  constructor(public _helper: HelperService, private route: Router) {
  }

  ngOnInit(): void {
  }

  openAnnouncementPopup() {
    this._helper.announcePop = true;
  }

  OpenDropdownSelector(dropdown_category: any) {
    this._helper.dropdown_category = dropdown_category;
    this._helper.selector = true;
    this.route.navigate(['pages/selector']);

  }
}
