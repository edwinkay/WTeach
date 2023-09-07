import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  panelOpenState = false;
  main = true
  opcion1 = false;
  opcion2 = false;
  abrirActividad2 = false;
  mostrarOpciones = false;

  constructor() {}

  ngOnInit(): void {}

  onPanelOpened() {
    this.panelOpenState = true;
  }
  principal(){
    this.main = true
    this.opcion1 = false
    this.opcion2 = false
    this.abrirActividad2 = false
  }
  nivel1(){
    this.opcion1 = true
    this.opcion2 = false
    this.abrirActividad2 = false
    this.main = false
  }
  nivel2(){
    this.opcion2 = true
    this.opcion1 = false
    this.abrirActividad2 = false
    this.main = false;
  }
  actividad2() {
    this.mostrarOpciones = false
    this.opcion1 = false
    this.opcion2 = false
    this.abrirActividad2 = true;
    this.main = false;
  }
  niveles() {
    this.mostrarOpciones = !this.mostrarOpciones;
  }
}
