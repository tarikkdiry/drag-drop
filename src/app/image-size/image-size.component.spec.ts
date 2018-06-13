import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSizeComponent } from './image-size.component';

describe('ImageSizeComponent', () => {
  let component: ImageSizeComponent;
  let fixture: ComponentFixture<ImageSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
