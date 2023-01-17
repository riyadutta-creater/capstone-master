import { LayoutModule } from '@angular/cdk/layout';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './navbar.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

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
      ],
      schemas:[NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

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
  
});
