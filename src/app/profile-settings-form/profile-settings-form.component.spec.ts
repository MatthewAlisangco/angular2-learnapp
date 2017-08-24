import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSettingsFormComponent } from './profile-settings-form.component';

describe('ProfileSettingsFormComponent', () => {
  let component: ProfileSettingsFormComponent;
  let fixture: ComponentFixture<ProfileSettingsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSettingsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSettingsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
