import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { ResultComponent } from './result.component';
import { FormsModule } from '@angular/forms';
import { SearchModule } from '../search.module'
import { ResultItemsComponent } from '../result-items/result-items.component';
import { SearchComponent } from '../search-form/search.component';
import { curconvertPipe } from '../curr-converter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayFinderService } from '../services/play-finder.service';

describe('ToDoListComponent', () => {
    let component: ResultComponent;
    let fixture: ComponentFixture<ResultComponent>;
    const fakeActivatedRoute = {
        snapshot: { data: {} }
    } as ActivatedRoute;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ResultItemsComponent, SearchComponent, ResultComponent, curconvertPipe],
            imports: [FormsModule, SearchModule, HttpClientModule, NgxPaginationModule],
            providers: [
                ActivatedRoute, Router,
                PlayFinderService,

            ]

        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResultComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    xit('should create', () => {
        expect(component).toBeTruthy();
    });
});
