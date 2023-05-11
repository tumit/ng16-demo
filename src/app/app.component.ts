import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng16-demo';

  constructor(private authService: AuthService) {

  }

  setRole(role: string): void {
    this.authService.role.set(role)
  }

}
