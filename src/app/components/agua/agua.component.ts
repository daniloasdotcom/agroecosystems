import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agua',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agua.component.html',
  styleUrl: './agua.component.scss'
})
export class AguaComponent {
  expandedSections: { [key: string]: boolean } = {
        origem: false,
        componentes: false,
        importancia: false
      };

      toggleSection(key: string): void {
        this.expandedSections[key] = !this.expandedSections[key];
      }

}
