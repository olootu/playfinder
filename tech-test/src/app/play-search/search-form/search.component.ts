import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlayFinder } from '../playfinder.model';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() pfModel: PlayFinder[] = [];

  @Output() searchPitches = new EventEmitter();

  formError: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  searchPitch(form, model) {
    if (form.invalid) {
      this.formError = true;
      return
    }
    this.searchPitches.emit(model);
    this.formError = false;
  }

}
