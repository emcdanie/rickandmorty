import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickandmortyinfoComponent } from './rickandmortyinfo.component';

describe('RickandmortyinfoComponent', () => {
  let component: RickandmortyinfoComponent;
  let fixture: ComponentFixture<RickandmortyinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RickandmortyinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RickandmortyinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
