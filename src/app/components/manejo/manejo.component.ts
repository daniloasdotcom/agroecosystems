import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ⬅️ Importar aqui
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ConceptPestmanagementComponent } from '../concept-pestmanagement/concept-pestmanagement.component';

@Component({
  selector: 'app-manejo',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, ConceptPestmanagementComponent],
  templateUrl: './manejo.component.html',
  styleUrl: './manejo.component.scss'
})
export class ManejoComponent {
  expandedSections: { [key: string]: boolean } = {
      origem: false,
      componentes: false,
      importancia: false
    };

    toggleSection(key: string): void {
      this.expandedSections[key] = !this.expandedSections[key];
    }
}
