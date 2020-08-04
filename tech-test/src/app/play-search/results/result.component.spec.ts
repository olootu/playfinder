import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxPaginationModule } from 'ngx-pagination';

import { SearchComponent } from '../search-form/search.component';
import { ResultItemsComponent } from '../result-items/result-items.component';
import { ResultComponent } from './result.component';

import { PlayFinderService } from '../services/play-finder.service';
import { curconvertPipe } from '../curr-converter.pipe';


describe('ToDoListComponent', () => {
    // mock the service
    class MockDummyService extends PlayFinderService {
        // mock everything used by the component
    };

    let component: ResultComponent;
    let fixture: ComponentFixture<ResultComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ResultItemsComponent, SearchComponent, ResultComponent, curconvertPipe],
            imports: [FormsModule, HttpClientModule, RouterModule.forRoot([]), NgxPaginationModule],
            providers: [{
                RouterTestingModule,
                provide: PlayFinderService,
                useClass: MockDummyService
            }]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResultComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
