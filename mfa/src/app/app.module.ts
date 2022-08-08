import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { FormsModule } from '@angular/forms';
import { UsernameSectionComponent } from './username-section/username-section.component';
import { AssignmentComponent } from './assignment/assignment.component';
@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    UsernameSectionComponent,
    AssignmentComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
