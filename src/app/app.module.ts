import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
  import { from } from 'rxjs';
import { HomeModule } from './home/home.module';
import { IndiaEventModule } from './india-event/india-event.module';
import { RoadrunnersModule } from './roadrunners/roadrunners.module';
import { RegisterModule } from './register/register.module';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { BlogsModule } from './blogs/blogs.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    IndiaEventModule,
    RoadrunnersModule,
    RegisterModule,
    LoginModule,
    BlogsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
