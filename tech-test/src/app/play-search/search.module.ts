import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { SearchRoutingModule } from './search.routing.module';
import { ResultComponent } from './results/result.component';
import { PlayFinderService } from './services/play-finder.service';
import { SearchComponent } from './search-form/search.component';
import { curconvertPipe } from './curr-converter.pipe';
import { ResultItemsComponent } from './result-items/result-items.component';


@NgModule({
  declarations: [ResultComponent, SearchComponent, curconvertPipe, ResultItemsComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [PlayFinderService],
})
export class SearchModule { }
