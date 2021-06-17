import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InterceptorHttpService } from './services/interceptor-http.service';

@NgModule({
  declarations: [
		AppComponent,
	    HeaderComponent,
	    FooterComponent,
	    LoginComponent,
  ],
  imports: [
	  BrowserModule,
	  ReactiveFormsModule,
	  HttpClientModule
  ],
	providers: [
	  { provide: HTTP_INTERCEPTORS, useClass : InterceptorHttpService, multi : true}
  ],
  bootstrap: [LoginComponent]
})
export class AppModule { }
