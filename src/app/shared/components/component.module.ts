import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SmallblocksComponent} from "./smallblocks/smallblocks.component";
import {PopupComponent} from "./popup/popup.component";
import {TopComponent} from "./top/top.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [SmallblocksComponent, PopupComponent, TopComponent,],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
  ],
    exports: [SmallblocksComponent, PopupComponent, TopComponent, ]
})
export class ComponentModule {
}
