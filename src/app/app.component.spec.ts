import { APP_BASE_HREF } from '@angular/common';
import { TestBed } from '@angular/core/testing';
//add import for what we need
import { Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

//"describe" need to match the component name we want to test 
describe('AppComponent', () => {
  //import routes here from "app.component"
  const routes: Routes = [];

  beforeEach(async () => {
    //Any module, component or service that your tested component needs have to be included in the testbed
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        //add all component we want to test here
        AppComponent
      ],
      //For app.component we need to configure a dummy routes module and use a provider to set the base href, without this the test is not going to compile because we are setting the routing module and it needs a base href.
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'karmaTest'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('karmaTest');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content')?.textContent).toContain('karmaTest');
  });
});
