import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  incomingList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  searchClicked = false;
  constructor() { }

  ngOnInit() {
  }

  search = () => {
    this.searchClicked = true;
}

}
