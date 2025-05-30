import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ⬅️ Importar aqui

@Component({
  selector: 'app-relacoes-ecologicas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './relacoes-ecologicas.component.html',
  styleUrl: './relacoes-ecologicas.component.scss'
})
export class RelacoesEcologicasComponent {
  expandedSections: { [key: string]: boolean } = {
      origem: false,
      componentes: false,
      importancia: false
    };

    toggleSection(key: string): void {
      this.expandedSections[key] = !this.expandedSections[key];
    }

}
