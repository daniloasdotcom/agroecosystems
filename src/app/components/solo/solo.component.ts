import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-solo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solo.component.html',
  styleUrl: './solo.component.scss'
})
export class SoloComponent {
  expandedSections: { [key: string]: boolean } = {
        origem: false,
        componentes: false,
        importancia: false
      };

      toggleSection(key: string): void {
        this.expandedSections[key] = !this.expandedSections[key];
      }

}
