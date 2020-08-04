import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { PlayFinder } from '../playfinder.model';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    const pfModel: PlayFinder[] = [{
      type: '', id: '32990',
      attributes: {
        starts: '2018-01-01',
        ends: '2018-01-01',
        price: '',
        admin_fee: '',
        currency: '',
        availabilities: 0
      }
    }];
    component.pfModel = pfModel;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
