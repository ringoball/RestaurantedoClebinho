import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DomingoComponent } from './domingo/domingo.component';
import { SegundaComponent } from './segunda/segunda.component';
import { TercaComponent } from './terca/terca.component';
import { QuartaComponent } from './quarta/quarta.component';
import { QuintaComponent } from './quinta/quinta.component';
import { SextaComponent } from './sexta/sexta.component';
import { SabadoComponent } from './sabado/sabado.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    DomingoComponent,
    SegundaComponent,
    TercaComponent,
    QuartaComponent,
    QuintaComponent,
    SextaComponent,
    SabadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
