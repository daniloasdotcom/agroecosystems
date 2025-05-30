import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manejo-solo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manejo-solo.component.html',
  styleUrl: './manejo-solo.component.scss'
})
export class ManejoSoloComponent {
  expandedSections: { [key: string]: boolean } = {
      origem: false,
      componentes: false,
      importancia: false
    };

    toggleSection(key: string): void {
      this.expandedSections[key] = !this.expandedSections[key];
    }
}
