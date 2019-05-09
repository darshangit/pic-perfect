import { Component, OnInit } from '@angular/core';
import {SearchService} from '../service/search.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  incomingList: SearchMainResponse[];
  searchClicked = false;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  search = () => {
    this.searchService.search().subscribe(resp => {
      this.searchClicked = true;
      this.incomingList = resp;
      console.log('resp', this.incomingList);
    });
}

}
