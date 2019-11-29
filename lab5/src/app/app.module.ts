import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongCreateComponent } from './components/songs/song-create/song-create.component';
import { OpenHomeComponent} from './components/home/open-home/open-home.component';
import { AdminHomeComponent } from './components/home/admin-home/admin-home.component';
import { AuthHomeComponent } from './components/home/auth-home/auth-home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    SongCreateComponent,
    OpenHomeComponent,
    AdminHomeComponent,
    AuthHomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutUsComponent,
    ContactUsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      //{ path: '', redirectTo:'api/open', pathMatch: 'full'},
      { path: 'api/open', component: OpenHomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'api/open/aboutUs', component: AboutUsComponent },
      { path: 'api/open/contactUs', component: ContactUsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
