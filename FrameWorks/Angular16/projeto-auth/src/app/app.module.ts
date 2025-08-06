import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';
import { InternaComponent } from './pages/interna/interna.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    InternaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeComponent,
    InternaComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
