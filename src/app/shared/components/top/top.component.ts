import {Component, OnInit} from '@angular/core';
import {HelperService} from "../../../core/services/helper/helper.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  title: any = "normal";
  lang_arr: any = ["NL", "EN", "DE", "FR"];
  selected_lang: any = this.lang_arr[0];
  langDropOpen: boolean = false;

  constructor(public _helper: HelperService, private route: Router,private activeRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  openDrop(value: any) {
    this.langDropOpen = !this.langDropOpen;
    this.selected_lang = value;
  }

  close() {
    // console.log(this.route.url)
    if(this.route.url == '/pages/home'){
      this._helper.mainpopup = false
    }else{
      if (this._helper.selector = true) {
        if (this._helper.NoBacktoHome == false) {
          this.route.navigate(['pages/home']);
        } else if (this._helper.NoBacktoHome == true) {
          this.route.navigate(['pages/meals']);
          if(this.route.url == '/pages/meals'){
            this.route.navigate(['pages/home']);
            this._helper.NoBacktoHome = false
          }
        }
      } else {
        this._helper.mainpopup = false
      }
      this._helper.dropdown_category = 'time'
    }
  }
}
