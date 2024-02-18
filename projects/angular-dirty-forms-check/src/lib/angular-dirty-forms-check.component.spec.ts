import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDirtyFormsCheckComponent } from './angular-dirty-forms-check.component';

describe('AngularDirtyFormsCheckComponent', () => {
  let component: AngularDirtyFormsCheckComponent;
  let fixture: ComponentFixture<AngularDirtyFormsCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularDirtyFormsCheckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularDirtyFormsCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
