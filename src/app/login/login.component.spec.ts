import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
      providers:[MatSnackBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 

  it('should check username is there or not',()=>{
    const element = fixture.debugElement.query(By.css('#userName'));
    expect(element).toBeTruthy();
  })
  it('should check username type is text or not',()=>{
    const element = fixture.debugElement.query(By.css('#userName'));
    expect(element.nativeElement.getAttribute('type')).toEqual('text');
  })
  it('should check name is of username ',()=>{
    const element = fixture.debugElement.query(By.css('#userName'));
    expect(element.nativeElement.getAttribute('name')).toEqual('userName');
  })

  it('should check password is there or not',()=>{
    const element = fixture.debugElement.query(By.css('#password'));
    expect(element).toBeTruthy();
  })

  it('should check password type is text or not',()=>{
    const element = fixture.debugElement.query(By.css('#password'));
    expect(element.nativeElement.getAttribute('type')).toEqual('password');
  })
  it('should check name is of password ',()=>{
    const element = fixture.debugElement.query(By.css('#password'));
    expect(element.nativeElement.getAttribute('name')).toEqual('password');
  })

  it('should have the login button',()=>{
    const element = fixture.debugElement.query(By.css('#login'));
    expect(element).toBeTruthy();
  })

  it('should check input type of login button',()=>{
    const login = fixture.debugElement.query(By.css('#login'));
    const login1= login.nativeElement.getAttribute('type');
    expect(login1).toEqual('submit');
  })

  it('should have the cancel button',()=>{
    const element = fixture.debugElement.query(By.css('#cancel'));
    expect(element).toBeTruthy();
  })

  it(`should have as title 'Login Form'`, () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    expect(app.pageTitle).toEqual('Login Form');
  });
});
