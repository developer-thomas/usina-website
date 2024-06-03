import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './responsive.component.scss'],
})
export class HeaderComponent {
  public isCollapsed: boolean = false;

  public toggle() {
    this.isCollapsed = !this.isCollapsed;
  }
}
