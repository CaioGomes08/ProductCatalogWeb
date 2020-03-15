import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
// import { HttpModule } from '@angular/http';
import { JwtModule } from '@auth0/angular-jwt';

import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';

import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';
import { PipeModule } from '../pipes/pipe.module';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth-guard.service';

export function tokenGetter() {
  return localStorage.getItem('token');
}


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ScrollingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    ToastrModule.forRoot(),
    // HttpModule,
    FormsModule,
    DataViewModule,
    PanelModule,
    InputTextModule,
    PipeModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent, canActivate:[ AuthGuard ]},
      { path: 'category', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule), canActivate:[ AuthGuard ] },
      { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule), canActivate:[ AuthGuard ]},
      { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule), canActivate:[ AuthGuard ]}
    ]),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes:[]
      }
    })
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  exports: [
    DataViewModule,
    PipeModule
  ]
})
export class AppModule { }
