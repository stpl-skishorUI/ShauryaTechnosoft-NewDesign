import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Home3RoutingModule } from './home3-routing.module';
import { Home3Component } from './home3.component';


@NgModule({
  declarations: [
    Home3Component
  ],
  imports: [
    CommonModule,
    Home3RoutingModule
  ]
})
export class Home3Module { }
