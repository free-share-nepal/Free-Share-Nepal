import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent, checkIfPositive } from './app.component';



describe('AppComponent', () => {
  let comp:AppComponent;
  let fixture:ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents().then(()=>{
      fixture=TestBed.createComponent(AppComponent);
      comp=fixture.componentInstance;
    });
  }));

  it('should create the app', () => {
    // const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-app'`, () => {
    // const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('my-app');
  });

  it('should render title in a h1 tag', () => {
    // const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to my-app!');
  });

  it('should return true if number greater than 0',()=> {
    const value= checkIfPositive(1);
    expect (value).toBe(true);
  });

  it('should return false if number less than or equal to 0',()=> {
    const value= checkIfPositive(0);
    expect (value).toBe(false);
  });

  it('should called method on click',()=>{
    spyOn(comp,"check");

    // const fixture = TestBed.createComponent(AppComponent);
    let button=fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    
    fixture.whenStable().then(()=>{
      expect(comp.check).toHaveBeenCalled();
    });

  });

  it('should trigger alert if key pressed',()=>{
    spyOn(comp,"show");
    let text=fixture.debugElement.nativeElement.querySelector('.name');
    text.keyup();

    fixture.whenStable().then(()=>{
        expect(comp.show).toHaveBeenCalled();
    });

  });

});
