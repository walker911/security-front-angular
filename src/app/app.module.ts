import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
