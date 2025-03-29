import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeWithTextComponent } from './pipe-with-text.component';

describe('PipeWithTextComponent', () => {
  let component: PipeWithTextComponent;
  let fixture: ComponentFixture<PipeWithTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeWithTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeWithTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
