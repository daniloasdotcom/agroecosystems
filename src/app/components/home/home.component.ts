import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ⬅️ Importar aqui
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { EcosystemComparisonComponent } from '../ecosystem-comparison/ecosystem-comparison.component';
import { EcologicalIndustrialComponent } from '../ecological-industrial/ecological-industrial.component';
import { ConceptPestmanagementComponent } from '../concept-pestmanagement/concept-pestmanagement.component';
import { IndividuoComponent } from '../individuo/individuo.component';
import { BiodiversidadeComponent } from '../biodiversidade/biodiversidade.component';
import { PerturbationComponent } from '../perturbation/perturbation.component';
import { SucessaoComponent } from '../sucessao/sucessao.component';
import { NichoComponent } from '../nicho/nicho.component';
import { ProducaoPrimariaComponent } from '../producao-primaria/producao-primaria.component';
import { EstrategiarkComponent } from '../estrategiark/estrategiark.component';
import { NivelTroficoComponent } from '../nivel-trofico/nivel-trofico.component';
import { RelacoesEcologicasComponent } from '../relacoes-ecologicas/relacoes-ecologicas.component'; 
import { CiclagemNutrientesComponent } from '../ciclagem-nutrientes/ciclagem-nutrientes.component'; // Importar CiclagemNutrientesComponent



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, EcosystemComparisonComponent, EcologicalIndustrialComponent, ConceptPestmanagementComponent, IndividuoComponent, BiodiversidadeComponent, PerturbationComponent, SucessaoComponent, NichoComponent, ProducaoPrimariaComponent, EstrategiarkComponent, NivelTroficoComponent, RelacoesEcologicasComponent, CiclagemNutrientesComponent], // ⬅️ Adicionar aqui
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  expandedSections: { [key: string]: boolean } = {
    origem: false,
    componentes: false,
    importancia: false
  };

  toggleSection(key: string): void {
    this.expandedSections[key] = !this.expandedSections[key];
  }
}
