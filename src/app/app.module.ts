import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Services import
import { UiService } from './_ui/ui.service';
import { ProductService } from './_models/product.service';

// Modules import
import { AdminModule } from './admin/admin.module';
import { HomeModule } from './home/home.module';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    // My Modules
    AdminModule,
    HomeModule,
    ProductModule,
  ],
  providers: [UiService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
