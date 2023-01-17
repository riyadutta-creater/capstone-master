import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AboutUsComponent } from './aboutUs/about-us.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactUsComponent } from './contactUs/contact-us.component';
import { LoginComponent } from './login/login.component';
// import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryEventDbService } from './inmeoryeventdbservice';
import { CartComponent } from './cart/cart.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { FilterPipe } from './filter.pipe';
import { FooterComponent } from './footer/footer.component';
// import { SignupComponent } from './user/signup.component';
// import { AuthGuard } from './user/auth.guard';
import { ProductsComponent } from './user-product/products.component';
import { ProductAddComponent } from './user-product/product-add.component';
import { ProductEditComponent } from './user-product/product-edit.component';
import { StarComponent } from './star/star.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CheckoutComponent } from './checkout/checkout.component'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutUsComponent,
    HomeComponent,
    ContactUsComponent,
    LoginComponent,
    // AdminAuthComponent,
    ProductsComponent,
    CartComponent,
    UserAuthComponent,
    FilterPipe,
    FooterComponent,
    // SignupComponent,
    ProductsComponent,
    ProductAddComponent,
    ProductEditComponent,
    StarComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    CarouselModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryEventDbService),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatCardModule,
    MatTooltipModule
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  // providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
