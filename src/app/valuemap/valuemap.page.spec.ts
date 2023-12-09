import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValuemapPage } from './valuemap.page';

describe('ValuemapPage', () => {
  let component: ValuemapPage;
  let fixture: ComponentFixture<ValuemapPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ValuemapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
