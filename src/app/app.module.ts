import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app-routing.module';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { Routes, RouterModule } from '@angular/router';
import {
  OKTA_CONFIG,
  OktaAuthGuard,
  OktaAuthModule,
  OktaCallbackComponent,
} from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { HomeComponent } from './home/home.component';
// import { MessagesComponent } from './messages/messages.component';
// import { ProfileComponent } from './profile/profile.component';

import oktaConfig from './app.config';
import { AuthGuard } from './auth.guard';



const oktaAuth = new OktaAuth(oktaConfig.oidc);

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'capabilities',
    pathMatch: "full",
  },
  ///[ Okta 3 ]
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login/callback',
    component: OktaCallbackComponent,
  },
  // {
  //   path: 'messages',
  //   component: MessagesComponent,
  //   canActivate: [ OktaAuthGuard ]
  // },
  {
    path: 'capabilities',
    canActivate: [AuthGuard],   ///[ Okta 4 ] Change to OktaAuthGuard
    loadChildren: () => import('./shipping/shipping.module').then( m => m.ShippingPageModule)
  },
  {
    path: 'valuemap',
    canActivate: [AuthGuard],   ///[ Okta 4 ] Change to OktaAuthGuard
    loadChildren: () => import('./valuemap/valuemap.module').then( m => m.ValuemapPageModule)
  },
  {
    path: 'card-details',
    loadChildren: () => import('./card-details/card-details.module').then( m => m.CardDetailsPageModule)
  }
  ,
  {
    path: 'leveldetail',
    loadChildren: () => import('./leveldetail/leveldetail.module').then( m => m.LeveldetailPageModule)
  },
  {
    path: 'modal-details',
    loadChildren: () => import('./modal-details/modal-details.module').then( m => m.ModalDetailsPageModule)
  }
];
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    HttpClientModule, 
    IonicModule.forRoot(),
    //  AppRoutingModule,
     FontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    OktaAuthModule.forRoot({ oktaAuth })
 ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) { 
		library.addIconPacks(fas, fab, far);
	}
}
