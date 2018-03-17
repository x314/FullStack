import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NucleoRoutingModule } from './nucleo-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    NucleoRoutingModule
  ],
  declarations: [HomeComponent, HeaderComponent, LoginComponent], 
  exports: [NucleoRoutingModule, HeaderComponent]
})
export class NucleoModule { }
