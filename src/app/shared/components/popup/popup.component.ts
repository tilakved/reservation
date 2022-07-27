import {Component, OnInit} from '@angular/core';
import {HelperService} from "../../../core/services/helper/helper.service";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  PopUpHeading: any = "Announcement";
  content_description: any = "Welkom, U reserveert voor onze locatie Rotterdam Weena (Centraal Station locatie). U kunt tot 4 uur voor uw boeking, kosteloos annuleren. De aanbetaling wordt vervolgens automatisch teruggestort. Annuleringen binnen 4 uur kunnen helaas niet worden vergoedt. Wij werken met shifts met een maximale duur van 1 uur en 45 minuten per shift.Welkom, U reserveert voor onze locatie Rotterdam Weena (Centraal Station locatie). U kunt tot 4 uur voor uw boeking, kosteloos annuleren. De aanbetaling wordt vervolgens automatisch teruggestort. Annuleringen binnen 4 uur kunnen helaas niet worden vergoedt. Wij werken met shifts met een maximale duur van 1 uur en 45 minuten per shift.";


  constructor(public _helper: HelperService) {
  }

  ngOnInit(): void {
  }

  closePopup() {
    this._helper.announcePop = false
  }

}
