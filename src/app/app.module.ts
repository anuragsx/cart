import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination'

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ProjectComponent } from './project/project.component';
import { ProductsComponent } from './products/products.component';
import {NgAutoCompleteModule} from "ng-auto-complete";
import { AutoCompleteModule }  from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    SideBarComponent,
    ProjectComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule,
    NgAutoCompleteModule,
    AutoCompleteModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent},
      {path:'project',component:ProjectComponent},
      {path:'products',component:ProductsComponent},
      { path: 'project/:id', component: ProductsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
