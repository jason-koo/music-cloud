import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule} from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

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
import { AuthService } from './services/auth.service';
import { ShowSongsComponent } from './components/songs/show-songs/show-songs.component';
import { ReviewComponent } from './components/review/review.component';
import { AuthGuard } from './guards/auth.guard';


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
    ContactUsComponent,
    ShowSongsComponent,
    ReviewComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      //{ path: '', redirectTo:'api/open', pathMatch: 'full'},
      { path: '', component: OpenHomeComponent },
      { path: 'api/open', component: OpenHomeComponent },
      { path: 'api/open/login', component: LoginComponent },
      { path: 'api/open/register', component: RegisterComponent },
      { path: 'api/open/aboutUs', component: AboutUsComponent },
      { path: 'api/open/contactUs', component: ContactUsComponent},
      { path: 'api/authUser', component: AuthHomeComponent },
      { path: 'api/open/songs', component: ShowSongsComponent }
    ])
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
