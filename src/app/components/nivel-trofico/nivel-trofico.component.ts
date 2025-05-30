import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ⬅️ Importar aqui

@Component({
  selector: 'app-nivel-trofico',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nivel-trofico.component.html',
  styleUrl: './nivel-trofico.component.scss'
})
export class NivelTroficoComponent {
  expandedSections: { [key: string]: boolean } = {
      origem: false,
      componentes: false,
      importancia: false
    };

    toggleSection(key: string): void {
      this.expandedSections[key] = !this.expandedSections[key];
    }

}
