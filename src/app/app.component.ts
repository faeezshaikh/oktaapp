import { Component,Inject } from '@angular/core';
// import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { IDToken, OktaAuth } from '@okta/okta-auth-js';


import { OKTA_AUTH, OktaAuthStateService } from '@okta/okta-angular';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  username: string | undefined;
  email: string | undefined;
  public appPages = [
    { title: 'Capability Map', url: '/capabilities', icon: 'map' }, 
    { title: 'Value Stream Map', url: '/valuemap', icon: 'grid' }, 
    { title: 'Information Map', url: '/infomap', icon: 'newspaper' }, 
    // { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    // { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private router: Router,private menuCtrl: MenuController,
      ///[ Okta 2 ]
    // @Inject(OKTA_AUTH) private oktaAuth: OktaAuth, public authService: OktaAuthStateService) {}
    @Inject(OKTA_AUTH) private oktaAuth: OktaAuth, public authService: AuthService) {}
  

  logout() {
    this.menuCtrl.close().then(() => {
      this.authService.logout();
    });
  }
    
  ///[ Okta 1 ]

  // async ngOnInit() {
  //   const idToken: IDToken = await this.oktaAuth.tokenManager.get('idToken') as IDToken;
  //   console.log("ID TOKEN : ", idToken);
  //   this.username = idToken.claims.name;
  //   this.email = idToken.claims.email;

  // }
  // async login() {
  //   await this.oktaAuth.signInWithRedirect();
  // }

  // async logout() {
  //   await this.oktaAuth.signOut();
  // }
    
  ///[ Okta 1 ] Till here
  
}
