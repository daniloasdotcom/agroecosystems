import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ConceptPestmanagementComponent } from '../concept-pestmanagement/concept-pestmanagement.component';
import { ManejoSoloComponent } from '../manejo-solo/manejo-solo.component';
import { ScutSaatComponent } from '../scut-saat/scut-saat.component';
import { ManejoAguaComponent } from '../manejo-agua/manejo-agua.component';
import { ConceptCardComponent } from '../concept-card/concept-card.component';

@Component({
  selector: 'app-manejo',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, ConceptPestmanagementComponent, ManejoSoloComponent, ScutSaatComponent, ManejoAguaComponent, ConceptCardComponent],
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
