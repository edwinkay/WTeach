import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-actividad2',
  templateUrl: './actividad2.component.html',
  styleUrls: ['./actividad2.component.scss'],
})
export class Actividad2Component implements OnInit {
  disab = true;
  ocultar = false;
  modalActivoA = false;
  modalActivoB = false;
  modalActivoC = false;
  modalActivoD = false;

  comparar = {
    resA: '',
    resB: '',
    resC: '',
    resD: '',
  };
  respuestasCorrectas = {
    respuestaA: '4',
    respuestaB: '10',
    respuestaC: '5',
    respuestaD: '8',
  };
  resultados = {
    respuestaA: '',
    respuestaB: '',
    respuestaC: '',
    respuestaD: '',
  };

  constructor() {}

  ngOnInit(): void {}

  verificarRespuestas() {
    this.ocultar = true;

    if (this.comparar.resA === this.respuestasCorrectas.respuestaA) {
      this.resultados.respuestaA = 'Bien hecho';
    } else {
      this.resultados.respuestaA = 'Respuesta incorrecta';
    }

    if (this.comparar.resB === this.respuestasCorrectas.respuestaB) {
      this.resultados.respuestaB = 'Bien hecho';
    } else {
      this.resultados.respuestaB = 'Respuesta incorrecta';
    }

    if (this.comparar.resC === this.respuestasCorrectas.respuestaC) {
      this.resultados.respuestaC = 'Bien hecho';
    } else {
      this.resultados.respuestaC = 'Respuesta incorrecta';
    }

    if (this.comparar.resD === this.respuestasCorrectas.respuestaD) {
      this.resultados.respuestaD = 'Bien hecho';
    } else {
      this.resultados.respuestaD = 'Respuesta incorrecta';
    }
  }
  onRadioChange1(event: Event) {
    this.comparar.resA = (event.target as HTMLInputElement).value;
    if (
      this.comparar.resA !== '' &&
      this.comparar.resB !== '' &&
      this.comparar.resC !== '' &&
      this.comparar.resD !== ''
    ) {
      this.disab = false;
    }
  }
  onRadioChange2(event: Event) {
    this.comparar.resB = (event.target as HTMLInputElement).value;
    if (
      this.comparar.resA !== '' &&
      this.comparar.resB !== '' &&
      this.comparar.resC !== '' &&
      this.comparar.resD !== ''
    ) {
      this.disab = false;
    }
  }
  onRadioChange3(event: Event) {
    this.comparar.resC = (event.target as HTMLInputElement).value;
    if (
      this.comparar.resA !== '' &&
      this.comparar.resB !== '' &&
      this.comparar.resC !== '' &&
      this.comparar.resD !== ''
    ) {
      this.disab = false;
    }
  }
  onRadioChange4(event: Event) {
    this.comparar.resD = (event.target as HTMLInputElement).value;
    if (
      this.comparar.resA !== '' &&
      this.comparar.resB !== '' &&
      this.comparar.resC !== '' &&
      this.comparar.resD !== ''
    ) {
      this.disab = false;
    }
  }
  abrirModalA(){
    this.modalActivoA = true
  }
  abrirModalB(){
    this.modalActivoB = true
  }
  abrirModalC(){
    this.modalActivoC = true
  }
  abrirModalD(){
    this.modalActivoD = true
  }
  cerrarModal(){
    this.modalActivoA = false
    this.modalActivoB = false
    this.modalActivoC = false
    this.modalActivoD = false
  }
}
