import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongCreateComponent } from './components/songs/song-create/song-create.component';
import { OpenHomeComponent} from './components/home/open-home/open-home.component';
import { AdminHomeComponent } from './components/home/admin-home/admin-home.component';
import { AuthHomeComponent } from './components/home/auth-home/auth-home.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    SongCreateComponent,
    OpenHomeComponent,
    AdminHomeComponent,
    AuthHomeComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'api/open', component: OpenHomeComponent },
      { path: 'login', component: LoginComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
