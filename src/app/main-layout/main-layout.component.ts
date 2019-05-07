import { Component, OnInit } from '@angular/core';
import {SearchService} from '../service/search.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  incomingList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  searchClicked = false;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  search = () => {
    this.searchService.search().subscribe(resp => {
      this.searchClicked = true;
      console.log('resp', resp);
    });
}

}
