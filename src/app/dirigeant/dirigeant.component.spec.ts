import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirigeantComponent } from './dirigeant.component';

describe('DirigeantComponent', () => {
  let component: DirigeantComponent;
  let fixture: ComponentFixture<DirigeantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirigeantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirigeantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
