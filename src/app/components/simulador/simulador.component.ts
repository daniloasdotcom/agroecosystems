import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// ==========================================
// INTERFACES DE DADOS
// ==========================================

// Definição rica de uma Cultura para o sistema de Mosaico
interface Cultura {
  nome: string;
  tipo: string; // Ex: Gramínea, Leguminosa
  vizinhosBons: string[]; // Consórcio / Alelopatia positiva
  vizinhosRuins: string[]; // Pragas comuns / Competição
  funcao: string; // Papel no sistema
}

interface Area {
  id: number;
  nome: string;
  cor: string;
  totalBlocos: number;
  // Dados de Solo
  ph: number | null;
  argila: number | null;
  mo: number | null;
  // A escolha do usuário
  culturaSelecionada: Cultura | null;
}

interface Bloco {
  index: number;
  areaId: number | null;
}

@Component({
  selector: 'app-simulador',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './simulador.component.html',
  styleUrls: ['./simulador.component.scss']
})
export class SimuladorComponent {
  
  // CONFIGURAÇÕES DO GRID
  largura: number = 20;
  comprimento: number = 20;
  
  // ESTADO DO SISTEMA
  blocos: Bloco[] = [];
  areas: Area[] = [];
  areaAtiva: Area | null = null;
  
  gridGerado: boolean = false;
  isDragging: boolean = false;
  modoBorracha: boolean = false;

  // Cores para novas áreas
  private coresDisponiveis = [
    '#4caf50', '#2196f3', '#ff9800', '#9c27b0', '#e91e63', 
    '#00bcd4', '#ffeb3b', '#795548', '#607d8b'
  ];

  // BANCO DE DADOS DE CULTURAS (Simulação)
  public baseCulturas: Cultura[] = [
    {
      nome: 'Milho Crioulo',
      tipo: 'Gramínea',
      vizinhosBons: ['Feijão', 'Abóbora', 'Girassol', 'Mandioca'],
      vizinhosRuins: ['Tomate', 'Sorgo'],
      funcao: 'Produção de grãos e suporte físico'
    },
    {
      nome: 'Feijão Guandu',
      tipo: 'Leguminosa',
      vizinhosBons: ['Milho', 'Café', 'Citros', 'Mandioca'],
      vizinhosRuins: ['Cebola', 'Alho'],
      funcao: 'Fixação de Nitrogênio e Biomassa'
    },
    {
      nome: 'Mandioca',
      tipo: 'Tubérculo',
      vizinhosBons: ['Milho', 'Feijão'],
      vizinhosRuins: ['Cana-de-açúcar'],
      funcao: 'Produção de raízes e rusticidade'
    },
    {
      nome: 'Alface',
      tipo: 'Hortaliça',
      vizinhosBons: ['Cenoura', 'Rabanete', 'Morango'],
      vizinhosRuins: ['Salsa', 'Girassol'],
      funcao: 'Ciclo curto e cobertura de solo'
    },
    {
      nome: 'Tomate',
      tipo: 'Solanácea',
      vizinhosBons: ['Manjericão', 'Cebola', 'Cenoura'],
      vizinhosRuins: ['Batata', 'Milho', 'Repolho'],
      funcao: 'Produção de frutos (exigente)'
    },
    {
      nome: 'Manjericão',
      tipo: 'Erva Aromática',
      vizinhosBons: ['Tomate', 'Pimentão'],
      vizinhosRuins: ['Arruda'],
      funcao: 'Repelente natural de pragas'
    },
    {
      nome: 'Abóbora',
      tipo: 'Cucurbitácea',
      vizinhosBons: ['Milho', 'Feijão'],
      vizinhosRuins: ['Batata'],
      funcao: 'Cobertura viva (evita erosão)'
    }
  ];

  constructor() {
    this.gerarGrade();
  }

  // ==========================================================
  // LÓGICA DO GRID E ÁREAS
  // ==========================================================

  gerarGrade() {
    if (this.largura > 50 || this.comprimento > 50) return alert("Limite de 50x50 para performance!");

    this.blocos = [];
    this.areas = [];
    this.areaAtiva = null;

    const total = this.largura * this.comprimento;
    for (let i = 0; i < total; i++) {
      this.blocos.push({ index: i, areaId: null });
    }
    this.gridGerado = true;
    this.criarNovaArea();
  }

  criarNovaArea() {
    const id = Date.now();
    const cor = this.coresDisponiveis[this.areas.length % this.coresDisponiveis.length];
    
    const novaArea: Area = {
      id: id,
      nome: `Área ${this.areas.length + 1}`,
      cor: cor,
      totalBlocos: 0,
      ph: null, argila: null, mo: null,
      culturaSelecionada: null
    };

    this.areas.push(novaArea);
    this.selecionarAreaParaPintar(novaArea);
  }

  selecionarAreaParaPintar(area: Area) {
    this.areaAtiva = area;
  }

  removerArea(areaIndex: number) {
    const areaId = this.areas[areaIndex].id;
    
    // Remove tinta do grid
    this.blocos.forEach(b => {
      if (b.areaId === areaId) b.areaId = null;
    });

    this.areas.splice(areaIndex, 1);

    // Ajusta seleção
    if (this.areaAtiva?.id === areaId) {
      this.areaAtiva = this.areas.length > 0 ? this.areas[this.areas.length - 1] : null;
    }
  }

  getCorDoBloco(areaId: number | null): string {
    if (!areaId) return 'transparent';
    const area = this.areas.find(a => a.id === areaId);
    return area ? area.cor : 'transparent';
  }

  // ==========================================================
  // LÓGICA DE PINTURA (DRAG AND DROP)
  // ==========================================================

  iniciarArrasto(index: number, event: MouseEvent) {
    event.preventDefault();
    if (!this.areaAtiva) return;

    this.isDragging = true;

    // Se clicar numa área que JÁ É a ativa, apaga. Senão, pinta.
    if (this.blocos[index].areaId === this.areaAtiva.id) {
      this.modoBorracha = true;
    } else {
      this.modoBorracha = false;
    }

    this.pintarBloco(index);
  }

  aoPassarMouse(index: number) {
    if (this.isDragging) {
      this.pintarBloco(index);
    }
  }

  @HostListener('document:mouseup')
  pararArrasto() {
    this.isDragging = false;
    this.recalcularTotais();
  }

  pintarBloco(index: number) {
    if (!this.areaAtiva) return;

    if (this.modoBorracha) {
      if (this.blocos[index].areaId === this.areaAtiva.id) {
        this.blocos[index].areaId = null;
      }
    } else {
      this.blocos[index].areaId = this.areaAtiva.id;
    }
  }

  recalcularTotais() {
    this.areas.forEach(a => a.totalBlocos = 0);
    this.blocos.forEach(b => {
      if (b.areaId) {
        const area = this.areas.find(a => a.id === b.areaId);
        if (area) area.totalBlocos++;
      }
    });
  }

  // ==========================================================
  // CÉREBRO AGRONÓMICO
  // ==========================================================

  getDiagnosticoPH(area: Area): string {
    if (!area.ph) return '...';
    if (area.ph < 5.5) return '🔴 Ácido';
    if (area.ph >= 5.5 && area.ph <= 6.5) return '🟢 Ideal';
    return '🟡 Alcalino';
  }

  getDiagnosticoTextura(area: Area): string {
    if (!area.argila) return '...';
    if (area.argila < 15) return '🏖️ Arenoso';
    if (area.argila > 35) return '🧱 Argiloso';
    return '⚖️ Franco';
  }

  // Verifica compatibilidade da cultura com o solo
  verificarCompatibilidade(area: Area, cultura: Cultura): boolean {
    if (!area.ph) return true; // Sem dados = dúvida pró-réu

    // Regra Exemplo: pH baixo restringe opções
    if (area.ph < 5.0) {
      return cultura.nome === 'Mandioca' || cultura.nome === 'Feijão Guandu';
    }
    return true;
  }
}