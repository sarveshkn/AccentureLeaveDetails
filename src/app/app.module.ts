import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { LeaveDetailsComponent } from './leave-details/leave-details.component';
import { LeaveCompleteDetailsComponent } from './leave-complete-details/leave-complete-details.component';
import { EmployeeService } from './employee.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageserviceService  } from './messageservice.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    LeaveDetailsComponent,
    LeaveCompleteDetailsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [ EmployeeService, MessageserviceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
