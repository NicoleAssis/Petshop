import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastradosPage } from './cadastrados.page';

describe('CadastradosPage', () => {
  let component: CadastradosPage;
  let fixture: ComponentFixture<CadastradosPage>;

  beforeEach((() => {
    fixture = TestBed.createComponent(CadastradosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
