import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BuscaComponent } from '../busca/busca.component';
import { CommonModule } from '@angular/common'; // Importante para o [class.open]

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    RouterLinkActive, 
    BuscaComponent
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Nova função: Fecha o menu ao clicar em um link
  closeMenu() {
    this.isMenuOpen = false;
  }
}