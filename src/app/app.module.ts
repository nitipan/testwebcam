import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { WebcamModule } from 'ngx-webcam';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WebcamModule } from './live/webcam/webcam.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, WebcamModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
