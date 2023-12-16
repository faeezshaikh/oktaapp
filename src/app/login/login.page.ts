import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { trigger, transition, useAnimation } from '@angular/animations';
import { shake } from 'ngx-animate'; // npm i ngx-animate

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  animations: [
    trigger('shake', [transition('* => *', useAnimation(shake))])
],
})
export class LoginPage {
  loginError = false;
  username: string = '';
  password: string = '';
  showAnimation: boolean = false;
   
  constructor(private authService: AuthService, private router: Router) { }

  login() {
    if (this.authService.login(this.username, this.password)) {
      this.loginError = false;
      this.router.navigate(['/capabilities']);
    } else {
      // Handle login failure (e.g., show an error message)
      this.loginError = true;
      this.showAnimation = !this.showAnimation;
    }
  }
}
