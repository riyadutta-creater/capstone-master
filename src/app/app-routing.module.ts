import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './aboutUs/about-us.component';
// import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contactUs/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './user-product/products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [

    { path: '',pathMatch:'full', redirectTo:'home' },
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutUsComponent},
    { path: 'contact', component: ContactUsComponent},
    {path:'product',component:ProductsComponent,
      loadChildren:()=>import('./product/product.module').then(m=>m.ProductModule)
    },
    { path: 'cart', component:CartComponent},
    { path: 'login', component:LoginComponent},
    { path: 'checkout', component: CheckoutComponent },
    {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
