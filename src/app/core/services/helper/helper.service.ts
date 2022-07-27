import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  storeName: any = "Angus steakhouse";
  announcePop: boolean = false
  mainpopup: boolean = false;
  dropdown_category: any = 'time';
  no_of_person_arr: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
  timings_arr: any = ["16.00", "16.30", "17.00", "17.30", "18.00", "18.30", "19.00", "19.30", "20.00", "20.30", "21.00", "21.30", "22.00", "22.30", "23.00", "23.30", "24.00", "24.30", "25.00", "25.30", "26.00", "26.30", "27.00", "27.30", "28.00"];
  section_arr: any = ["Select section", "First Floor", "Second Floor", "Third Floor"]
  dateSelected: any = "Today";
  personSelected: any = '2';
  sectionSelected: any = "Select section";
  bookedPopup: boolean = false;
  timeSelected: any = this.timings_arr[0];
  menulist: any = [{
    id: 1,
    food_image: "assets/imgs/menu1.jpg",
    discount: '€20',
    food_name: '5 course Chef menu',
    price: '10',
    food_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
  }, {
    id: 2,
    food_image: "assets/imgs/menu2.jpg",
    discount: '€20',
    food_name: 'Pizalicious',
    price: '20',
    food_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
  }, {
    id: 3,
    food_image: "assets/imgs/menu3.jpg",
    discount: '€20',
    food_name: 'Best Breakfast',
    price: '30',
    food_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
  }];
  mealSelected: any
    = {
    id: 1,
    food_image: "assets/imgs/menu1.jpg",
    discount: '€20',
    food_name: '5 course Chef menu',
    price: '10',
    food_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
  };
  NoBacktoHome: boolean = false;
  selector: boolean = false;

  constructor() {
  }
}
