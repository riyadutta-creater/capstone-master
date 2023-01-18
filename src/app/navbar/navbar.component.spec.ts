import { LayoutModule } from '@angular/cdk/layout';
import { waitForAsync, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './navbar.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginService } from '../service/login.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let service:LoginService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        MatSnackBarModule,
        HttpClientTestingModule
      ],
      schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    service=TestBed.get(LoginService);
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);

  }));

 /*beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });*/

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should have the Home',()=>{
    expect(fixture.debugElement.query(By.css('#home'))).toBeTruthy();
    const homes:HTMLElement=fixture.debugElement.query(By.css('#home')).nativeElement;
    expect(homes.textContent).toEqual('Home')
  })

  it('should have the Product',()=>{
    expect(fixture.debugElement.query(By.css('#products'))).toBeTruthy();
    const products:HTMLElement=fixture.debugElement.query(By.css('#products')).nativeElement;
    expect(products.textContent).toEqual('Product')
  })

  it('should have the About Us',()=>{
    expect(fixture.debugElement.query(By.css('#aboutus'))).toBeTruthy();
    const abouts:HTMLElement=fixture.debugElement.query(By.css('#aboutus')).nativeElement;
    expect(abouts.textContent).toEqual('AboutUs')
  })

  it('should have the Contact Us',()=>{
    expect(fixture.debugElement.query(By.css('#contactus'))).toBeTruthy();
    const contacts:HTMLElement=fixture.debugElement.query(By.css('#contactus')).nativeElement;
    expect(contacts.textContent).toEqual('ContactUs')
  })

  it('should have the Login',()=>{
    expect(fixture.debugElement.query(By.css('#login'))).toBeTruthy();
    const logins:HTMLElement=fixture.debugElement.query(By.css('#login')).nativeElement;
    expect(logins.textContent).toEqual('Login')
  })

  it('should check the logout button when login',()=>{
    component.islogged=true;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#logout'))).toBeTruthy();
  })

  it('should check the welcome username when clicked on login',()=>{
    service.setLogin('admin', true, 'Riya');
    component.islogged=true;
    component.username='admin';
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#welcome'))).toBeTruthy();
    const element:HTMLElement=fixture.debugElement.query(By.css('#welcome')).nativeElement;
    expect(element.textContent).toEqual('Welcome admin')
  })

  
});
