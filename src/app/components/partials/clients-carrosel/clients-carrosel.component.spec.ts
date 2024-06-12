import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsCarroselComponent } from './clients-carrosel.component';

describe('ClientsCarroselComponent', () => {
  let component: ClientsCarroselComponent;
  let fixture: ComponentFixture<ClientsCarroselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsCarroselComponent]
    });
    fixture = TestBed.createComponent(ClientsCarroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
