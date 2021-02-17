import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from "@angular/router";
import { routes } from './app.routes';
import { CommonModule } from "@angular/common";

import { ListsModule } from "./lists/lists.module"
import { DzModule } from "./dz/dz.module"

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    
    ListsModule,
    DzModule,

    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
