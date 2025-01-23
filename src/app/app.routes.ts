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
        
    ]},
    
    
    
    
    {path:'**',component:NotFoundComponent,title:"404 - Mykd"},
];
