import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IniciarsesionPage } from './iniciarsesion.page';

describe('InicioPage', () => {
  let component: IniciarsesionPage;
  let fixture: ComponentFixture<IniciarsesionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarsesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
