import {Component, OnInit} from '@angular/core';
import {HelperService} from "../core/services/helper/helper.service";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  title: any = "normal";

  constructor(public _helper: HelperService) {
  }

  ngOnInit(): void {

  }


}
