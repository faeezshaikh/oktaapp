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

  gifSource: string | undefined;
  staticGif: string = './assets/static.gif';
  animatedGif: string = './assets/fedex_anime.gif';

   
  constructor(private authService: AuthService, private router: Router) {
    this.showAnimation = false;
   }

  ngOnInit(): void {
   
    this.showAnimatedGif();
  }

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


  showAnimatedGif(): void {
    this.gifSource = this.animatedGif;

    // Assuming the animation takes 5 seconds, change to static after that
    setTimeout(() => {
      this.gifSource = this.staticGif;
    }, 1350); // 5000 milliseconds = 5 seconds
  }

  onMouseOver(): void {
    this.gifSource = this.animatedGif;
  }

  onMouseOut(): void {
    this.gifSource = this.staticGif;
  }
}
