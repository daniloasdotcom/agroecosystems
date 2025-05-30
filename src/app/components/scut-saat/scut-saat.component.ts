import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-scut-saat',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './scut-saat.component.html',
  styleUrl: './scut-saat.component.scss'
})
export class ScutSaatComponent {
  expandedSections: { [key: string]: boolean } = {
      origem: false,
      componentes: false,
      importancia: false
    };

    toggleSection(key: string): void {
      this.expandedSections[key] = !this.expandedSections[key];
    }

}
