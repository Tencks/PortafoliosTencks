import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { MisProjectosComponent } from './mis-projectos/mis-projectos.component';
import { AreaDeContactoComponent } from './area-de-contacto/area-de-contacto.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    SobreMiComponent,
    MisProjectosComponent,
    AreaDeContactoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
