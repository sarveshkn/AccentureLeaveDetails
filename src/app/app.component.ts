import { Component } from '@angular/core';
import { TitleComponent } from './title/title.component';
import { LeaveDetailsComponent } from './leave-details/leave-details.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Accenture Leave Details';

}
