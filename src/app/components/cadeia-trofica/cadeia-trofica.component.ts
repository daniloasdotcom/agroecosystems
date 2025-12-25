import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadeia-trofica',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cadeia-trofica.component.html',
  styleUrl: './cadeia-trofica.component.scss'
})
export class CadeiaTroficaComponent {
  expandedSections: { [key: string]: boolean } = {
        origem: false,
        componentes: false,
        importancia: false
      };

      toggleSection(key: string): void {
        this.expandedSections[key] = !this.expandedSections[key];
      }
}
