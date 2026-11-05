import { Component } from '@angular/core';
import { IGX_TOOLTIP_DIRECTIVES, IgxButtonDirective } from 'igniteui-angular';

@Component({
  selector: 'app-root',
  imports: [IGX_TOOLTIP_DIRECTIVES, IgxButtonDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public uRL?: string;
}
