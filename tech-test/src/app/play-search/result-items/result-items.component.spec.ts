import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultItemsComponent } from './result-items.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination'
import { curconvertPipe } from '../curr-converter.pipe';

describe('ResultItemsComponent', () => {
  let component: ResultItemsComponent;
  let fixture: ComponentFixture<ResultItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultItemsComponent, curconvertPipe],
      imports: [FormsModule, NgxPaginationModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
