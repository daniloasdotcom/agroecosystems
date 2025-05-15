import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscaComponent } from '../busca/busca.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, BuscaComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuAberto = false;
}
