import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfomapPage } from './infomap.page';

describe('InfomapPage', () => {
  let component: InfomapPage;
  let fixture: ComponentFixture<InfomapPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfomapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
