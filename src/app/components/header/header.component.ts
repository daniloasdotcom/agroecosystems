// src/app/components/header/header.component.ts (ou o caminho correto para seu header)

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; // 1. Importe RouterLink e RouterLinkActive
import { BuscaComponent } from '../busca/busca.component'; // 2. Importe o BuscaComponent se ele for standalone

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,         // 3. Adicione RouterLink aos imports
    RouterLinkActive,   // 4. Adicione RouterLinkActive (opcional, para estilização)
    BuscaComponent      // 5. Adicione BuscaComponent se ele for standalone e usado no template do header
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen: boolean = false; // Estado inicial: menu fechado

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Inverte o estado do menu
  }
}