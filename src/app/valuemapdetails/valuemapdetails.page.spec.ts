import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValuemapdetailsPage } from './valuemapdetails.page';

describe('ValuemapdetailsPage', () => {
  let component: ValuemapdetailsPage;
  let fixture: ComponentFixture<ValuemapdetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ValuemapdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
