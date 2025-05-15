import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CONCEITOS } from '../../conceitos';

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.scss'
})
export class BuscaComponent {
  termo = '';
  mostrarDropdown = false;
  conceitos = CONCEITOS;

  constructor(private elementRef: ElementRef) {}

  get resultados() {
    const termoLower = this.termo.toLowerCase();
    return this.conceitos.filter(c =>
      c.titulo.toLowerCase().includes(termoLower)
    );
  }

  toggleDropdown() {
    this.termo = ''; // limpa termo ao abrir por seta
    this.mostrarDropdown = !this.mostrarDropdown;
  }

  onInput() {
    this.mostrarDropdown = this.termo.length >= 1;
  }

  navegarPara(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    this.termo = '';
    this.mostrarDropdown = false;
  }

  @HostListener('document:click', ['$event'])
  clickFora(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.mostrarDropdown = false;
    }
  }
}
