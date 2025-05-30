import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ⬅️ Importar aqui

@Component({
  selector: 'app-luz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './luz.component.html',
  styleUrl: './luz.component.scss'
})
export class LuzComponent {
  expandedSections: { [key: string]: boolean } = {
      origem: false,
      componentes: false,
      importancia: false
    };

    toggleSection(key: string): void {
      this.expandedSections[key] = !this.expandedSections[key];
    }

}
