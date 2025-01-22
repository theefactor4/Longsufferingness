import { Routes } from '@angular/router';
import { HomeOneComponent } from './home/home-one/home-one.component';
import { HomeTwoComponent } from './home/home-two/home-two.component';
import { HomeThreeComponent } from './home/home-three/home-three.component';
import { HomeFourComponent } from './home/home-four/home-four.component';
import { HomeFiveComponent } from './home/home-five/home-five.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { AboutComponent } from './pages/about/about.component';
import { TournamentComponent } from './pages/tournament/tournament.component';
import { TournamentDetailsComponent } from './pages/tournament-details/tournament-details.component';
import { ServicesComponent } from './pages/services/services.component';
import { ServiceDetailsComponent } from './pages/service-details/service-details.component';
import { TeamDetailsComponent } from './pages/team-details/team-details.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ShopDetailsComponent } from './pages/shop-details/shop-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

export const routes: Routes = [
    {path:"",redirectTo:"/home/home-one",pathMatch:"full"},
    {path:'home',children:[
        {path:'home-one',component:HomeOneComponent,title:"ADB Games - Mykd"},
        {path:'home-two',component:HomeTwoComponent,title:"Home Two - Mykd"},
        {path:'home-three',component:HomeThreeComponent,title:"Home Three - Mykd"},
        {path:'home-four',component:HomeFourComponent,title:"Home Four - Mykd"},
        {path:'home-five',component:HomeFiveComponent,title:"Home Five - Mykd"},
    ]},
    {path:'tournament',component:TournamentComponent,title:"TournamentSkibidi - Mykd"},
    {path:'tournament-details',component:TournamentDetailsComponent,title:"Tournament SingleSkibidi - Mykd"},
    {path:'services',component:ServicesComponent,title:"Services - Mykd"},
    {path:'service-details',component:ServiceDetailsComponent,title:"Services Single - Mykd"},
    {path:'team-details/:id',component:TeamDetailsComponent,title:"Team Single - Mykd"},
    {path:'login',component:LoginComponent,title:"Login - Mykd"},
    {path:'register',component:RegisterComponent,title:"Register - Mykd"},
    {path:'shop',component:ShopComponent,title:"Shop - Mykd"},
    {path:'cart',component:CartComponent,title:"Cart - Mykd"},
    {path:'checkout',component:CheckoutComponent,title:"Checkout - Mykd"},
    {path:'shop-details/:id',component:ShopDetailsComponent,title:"Shop Single - Mykd"},
    {path:'reset-password',component:ResetPasswordComponent,title:"Reset Password - Mykd"},
    {path:'about',component:AboutComponent,title:"About - Mykd"},
    {path:'blog',component:BlogComponent,title:"Blog - Mykd"},
    {path:'blog-details/:id',component:BlogDetailsComponent,title:'Blog Details - Mykd'},
    {path:'contact',component:ContactComponent,title:"Contact - Mykd"},
    {path:'**',component:NotFoundComponent,title:"404 - Mykd"},
];
