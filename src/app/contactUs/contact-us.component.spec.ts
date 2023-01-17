import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ContactUsComponent } from './contact-us.component';

describe('ContactUsComponent', () => {
  let component: ContactUsComponent;
  let fixture: ComponentFixture<ContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsComponent ],
      imports:[FormsModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Contact US'`, () => {
    const fixture = TestBed.createComponent(ContactUsComponent);
    const contact = fixture.componentInstance;
    expect(contact.title).toEqual('Contact US');
  });

  it('should check the input type of full name',()=>{
    const name=fixture.debugElement.query(By.css('#Name'));
    const name2=name.nativeElement.getAttribute('type');
    expect(name2).toEqual('text');
  });

  it('should check the input type of email',()=>{
    const email=fixture.debugElement.query(By.css('#Email'));
    const email2=email.nativeElement.getAttribute('type');
    expect(email2).toEqual('email');
  });

  it('should check the input type of dropdown',()=>{
    const dropdown=fixture.debugElement.query(By.css('#dropdown'));
    const dropdown2=dropdown.nativeElement.getAttribute('type');
    expect(dropdown2).toEqual('text');
  });

  it('should check the input type of message',()=>{
    const text=fixture.debugElement.query(By.css('#Message'));
    const text2=text.nativeElement.getAttribute('type');
    expect(text2).toEqual('textarea');
  });

  it('should check the input type of submit',()=>{
    const button=fixture.debugElement.query(By.css('#btn'));
    const btn2=button.nativeElement.getAttribute('type');
    expect(btn2).toEqual('submit');
  });

});
