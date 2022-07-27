import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {PagesComponent} from "./pages.component";
import {HomeComponent} from './home/home.component';
import {DropdownselectorsComponent} from "./dropdownselectors/dropdownselectors.component";
import {ComponentModule} from "../shared/components/component.module";
import {MealsmenuComponent} from './mealsmenu/mealsmenu.component';
import {MealsinfoComponent} from './mealsinfo/mealsinfo.component';
import {BooknowComponent} from './booknow/booknow.component';
import {CompletedComponent} from './completed/completed.component';
import {DutchPricePipe} from "../core/pipes/dutchPrice.pipe";


const routes: Routes = [
  {path: '', redirectTo: 'pages', pathMatch: "full"},
  {
    path: 'pages', component: PagesComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: "full"},
      {path: 'home', component: HomeComponent},
      {path: 'selector', component: DropdownselectorsComponent},
      {path: 'meals', component: MealsmenuComponent},
      {path: 'mealsInfo', component: MealsinfoComponent},
      {path: 'book', component: BooknowComponent},
      {path: 'bookCompleted', component: CompletedComponent}
    ]
  },
]

@NgModule({
  declarations: [PagesComponent, HomeComponent, DropdownselectorsComponent, MealsmenuComponent, MealsinfoComponent, BooknowComponent, CompletedComponent, DutchPricePipe],
  imports: [
    CommonModule,
    ComponentModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],

  exports: [FormsModule, RouterModule, ReactiveFormsModule]
})
export class PagesModule {
}

