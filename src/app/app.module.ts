import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination'

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ProjectComponent } from './project/project.component';
import { ProductsComponent } from './products/products.component';
import { NgAutoCompleteModule} from "ng-auto-complete";
import { AutoCompleteModule }  from 'primeng/primeng';
import { FlashMessageModule} from 'angular-flash-message'; 
import { LocalStorageModule } from 'angular-2-local-storage';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderShippingComponent } from './order-shipping/order-shipping.component';
import { OrderReviewComponent } from './order-review/order-review.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    SideBarComponent,
    ProjectComponent,
    ProductsComponent,
    OrderDetailsComponent,
    OrderShippingComponent,
    OrderReviewComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule,
    NgAutoCompleteModule,
    FlashMessageModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    }),
    AutoCompleteModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent},
      {path:'project',component:ProjectComponent},
      {path:'products',component:ProductsComponent},
      {path: 'project/:id', component: ProductsComponent },
      {path: 'order-shipping', component: OrderShippingComponent },
      {path: 'order-review', component: OrderReviewComponent },
      {path: 'order-details', component: OrderDetailsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
