import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoaderComponent } from './loader/loader.component';
import { LoginComponent } from './login/login.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path : '' , component : LoaderComponent},
  {path : 'home' , component : HomeComponent},
  {path : 'about' , component : AboutComponent},
  {path : 'contact' , component : ContactComponent},
  {path : 'login', component : LoginComponent},
  {path : 'signup' , component : SignupComponent},
  {path : 'loader' , component : LoaderComponent},
  {path : 'popup' , component : PopUpComponent},
  {path : 'book' , component : AdminComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes , {anchorScrolling : 'enabled'} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
