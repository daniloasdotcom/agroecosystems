import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manejo-agua',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manejo-agua.component.html',
  styleUrl: './manejo-agua.component.scss'
})
export class ManejoAguaComponent {
  expandedSections: { [key: string]: boolean } = {
      origem: false,
      componentes: false,
      importancia: false
    };

    toggleSection(key: string): void {
      this.expandedSections[key] = !this.expandedSections[key];
    }

}
