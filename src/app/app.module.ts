import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


//angular material modulos
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { Actividad2Component } from './components/actividad2/actividad2.component';
import { MapaConceptualComponent } from './components/mapa-conceptual/mapa-conceptual.component';
import { ExplicacionComponent } from './components/explicacion/explicacion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideMenuComponent,
    MainContentComponent,
    Actividad2Component,
    MapaConceptualComponent,
    ExplicacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
