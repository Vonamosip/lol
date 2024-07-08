import { Component } from '@angular/core';
import { FilterComponent } from "./filter/filter.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [FilterComponent]
})
export class HeaderComponent {
  visible = false;

  toggleVisible(){
    this.visible = !this.visible
  }
}
