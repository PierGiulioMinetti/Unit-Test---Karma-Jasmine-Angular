import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';

import { ContactComponentComponent } from './contact-component.component';

describe('ContactComponentComponent', () => {
  let component: ContactComponentComponent;
  let fixture: ComponentFixture<ContactComponentComponent>;
  //added
  let de: DebugElement;
  let el: HTMLElement;
  // ______________________

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactComponentComponent],
      //added
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
      // ______________________
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the "contact component"', () => {
    const fixture = TestBed.createComponent(ContactComponentComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('On submit() the variable "submitted" should be set to true', waitForAsync(() => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  }))

  it('should call the OnSubmit method', waitForAsync(() => {
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  }))

  it('form should be invalid', waitForAsync(() => {
    component.contactForm.controls['name'].setValue('');
    component.contactForm.controls['email'].setValue('');
    component.contactForm.controls['text'].setValue('');
    expect(component.contactForm.valid).toBeFalsy();
  }))

  it('form should be valid', waitForAsync(() => {
    component.contactForm.controls['name'].setValue('Giulio');
    component.contactForm.controls['email'].setValue('mail@gmail.com');
    component.contactForm.controls['text'].setValue('simple text');
    expect(component.contactForm.valid).toBeTruthy();
  }))


});
