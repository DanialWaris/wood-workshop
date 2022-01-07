import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSayingsComponent } from './client-sayings.component';

describe('ClientSayingsComponent', () => {
  let component: ClientSayingsComponent;
  let fixture: ComponentFixture<ClientSayingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSayingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSayingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
