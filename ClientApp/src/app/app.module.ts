import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpModule } from '@angular/http';

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




@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ScrollingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    ToastrModule.forRoot(),
    HttpModule,
    FormsModule,
    DataViewModule,
    PanelModule,
    InputTextModule,
    PipeModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'category', loadChildren: './category/category.module#CategoryModule' },
      { path: 'product', loadChildren: './product/product.module#ProductModule'},
      { path: 'user', loadChildren: './user/user.module#UserModule'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    DataViewModule,
    PipeModule
  ]
})
export class AppModule { }
