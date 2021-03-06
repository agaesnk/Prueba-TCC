import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RepoInfoService } from './services/repo-info.service';
import { RepoInfoComponent } from './components/repo-info/repo-info.component';


@NgModule({
  declarations: [
    AppComponent,
    RepoInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    RepoInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


