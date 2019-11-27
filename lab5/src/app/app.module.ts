import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongCreateComponent } from './components/songs/song-create/song-create.component';
import { OpenHomeComponent} from './components/home/open-home/open-home.component';
import { AdminHomeComponent } from './components/home/admin-home/admin-home.component';


@NgModule({
  declarations: [
    AppComponent,
    SongCreateComponent,
    OpenHomeComponent,
    AdminHomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
