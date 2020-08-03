import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlayFinder } from '../playfinder.model';

@Component({
  selector: 'app-result-items',
  templateUrl: './result-items.component.html',
  styleUrls: ['./result-items.component.scss']
})
export class ResultItemsComponent implements OnInit {
  @Input() resultListing: PlayFinder[];
  @Input() isAvailable: boolean;
  config = {
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: this.resultListing
  };

  constructor() { }

  ngOnInit() {
  }

  onPageChange(event) {
    this.config.currentPage = event;
  }

}
