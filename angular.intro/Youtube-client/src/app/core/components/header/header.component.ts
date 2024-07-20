import { Component } from '@angular/core';
import { FilterComponent } from './components/search/filter/filter.component';
import { SearchComponent } from './components/search/search.component';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LoginService } from '../../../auth/services/LoginService .service';


@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [FilterComponent, SearchComponent,RouterOutlet, RouterModule],
})
export class HeaderComponent {
  userName:string = '';
  constructor(private loginService: LoginService) {
    const storedData = localStorage.getItem('loginP');
    if (storedData) {
      try {
        const dataArray = JSON.parse(storedData);
        if (Array.isArray(dataArray) && dataArray.length > 0) {
          this.userName = dataArray[dataArray.length - 1].login;
        }
      } catch (err) {
        console.error('Ошибка при разборе данных из localStorage:', err);
      }
    }
  }

  onLogout() {
    this.loginService.logout();
  }

  visible = false;

  toggleVisible() {
    this.visible = !this.visible;
  }

  onSortByDate() {
    console.log('Sort by Date triggered');
  }

  onSortByViewCount() {
    console.log('Sort by View Count triggered');
  }
}
