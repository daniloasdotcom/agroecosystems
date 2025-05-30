import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-ciclagem-nutrientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ciclagem-nutrientes.component.html',
  styleUrl: './ciclagem-nutrientes.component.scss'
})
export class CiclagemNutrientesComponent {
  expandedSections: { [key: string]: boolean } = {
      origem: false,
      componentes: false,
      importancia: false
    };

    toggleSection(key: string): void {
      this.expandedSections[key] = !this.expandedSections[key];
    }
}
