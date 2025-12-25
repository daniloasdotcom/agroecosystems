import { Component, Input, ElementRef, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importe o serviço e a interface (ajuste o caminho se necessário)
import { QuizDataService, QuizQuestion } from '../../services/quiz-data.service';

@Component({
  selector: 'app-concept-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './concept-card.component.html',
  styleUrls: ['./concept-card.component.scss']
})
export class ConceptCardComponent implements OnInit {
  @Input() titulo: string = '';
  @Input() id: string = ''; // ID usado para buscar as questões no serviço
  @Input() isOpen: boolean = false;

  // Injeção do Serviço de Dados
  private quizService = inject(QuizDataService);

  // Lista de Perguntas (Agora é um Array!)
  perguntas: QuizQuestion[] = [];

  // Controles Visuais do Card
  isFlipped: boolean = false;
  isBackActive: boolean = false;

  // Estado do Jogo (Quiz)
  indiceAtual: number = 0;      // Qual pergunta está sendo exibida
  pontos: number = 0;           // Total de acertos
  quizFinalizado: boolean = false;
  
  // Estado da Pergunta Atual
  mostrarFeedback: boolean = false; // Se true, mostra a resposta e botão "Próxima"
  acertouAtual: boolean = false;
  selectedIndex: number = -1;   // Qual opção o usuário clicou

  constructor(private el: ElementRef<HTMLElement>) {}

  // ==========================================================
  // INICIALIZAÇÃO
  // ==========================================================
  ngOnInit() {
    if (this.id) {
      // Busca o array de questões. Se não existir, retorna undefined (tratado como array vazio no HTML ou aqui)
      const dados = this.quizService.getQuestaoPorId(this.id);
      if (dados && dados.length > 0) {
        this.perguntas = dados;
      }
    }
  }

  // Getter para facilitar o acesso à pergunta atual no HTML
  get perguntaAtual(): QuizQuestion {
    return this.perguntas[this.indiceAtual];
  }

  // ==========================================================
  // LÓGICA DO CARD (ABRIR/FECHAR/VIRAR)
  // ==========================================================
  
  toggle() {
    // Só abre/fecha se estiver na frente (modo leitura)
    if (!this.isFlipped) {
      this.isOpen = !this.isOpen;
    }
  }

  // Verifica se o topo do card está visível na tela
  private isTopVisible(element: HTMLElement, offset: number = 100): boolean {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= offset;
  }

  virarCard(event?: Event) {
    if (event) event.stopPropagation();

    // 1. Inicia o flip visual
    this.isFlipped = !this.isFlipped;

    if (this.isFlipped) {
      // Garante que o card esteja aberto para mostrar o quiz
      this.isOpen = true;

      const cardEl = this.el.nativeElement;

      // Scroll suave se o topo não estiver visível
      if (!this.isTopVisible(cardEl)) {
        setTimeout(() => {
          cardEl.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 200);
      }
    }

    // 2. Aguarda o flip terminar para ajustar quem controla a altura (Frente ou Verso)
    setTimeout(() => {
      this.isBackActive = this.isFlipped;
    }, 800);

    // 3. Se estiver voltando para o texto (Frente), reinicia o quiz para a próxima vez
    if (!this.isFlipped) {
      // Opcional: Você pode querer manter o estado. 
      // Aqui optamos por reiniciar para o usuário estudar de novo.
      setTimeout(() => this.reiniciarQuiz(), 800);
    }
  }

  // ==========================================================
  // LÓGICA DO QUIZ (MULTI-QUESTÕES)
  // ==========================================================

  verificarResposta(index: number) {
    // Trava se já respondeu (está vendo o feedback)
    if (this.mostrarFeedback) return; 

    this.selectedIndex = index;
    this.mostrarFeedback = true; // Libera o feedback visual

    if (index === this.perguntaAtual.correta) {
      this.acertouAtual = true;
      this.pontos++;
    } else {
      this.acertouAtual = false;
    }
  }

  proximaPergunta() {
    // Reseta estados visuais para a próxima
    this.mostrarFeedback = false;
    this.selectedIndex = -1;

    // Avança ou Finaliza
    if (this.indiceAtual < this.perguntas.length - 1) {
      this.indiceAtual++;
    } else {
      this.quizFinalizado = true; // Mostra a tela de resultado
    }
  }

  reiniciarQuiz() {
    this.indiceAtual = 0;
    this.pontos = 0;
    this.quizFinalizado = false;
    this.mostrarFeedback = false;
    this.selectedIndex = -1;
  }

  // ==========================================================
  // IMPRESSÃO
  // ==========================================================
  imprimir(event: Event) {
    event.stopPropagation();
    this.isOpen = true; // Garante que abra para imprimir

    const nativeElement = this.el.nativeElement;
    nativeElement.classList.add('imprimindo-agora');

    setTimeout(() => {
      window.print();
      nativeElement.classList.remove('imprimindo-agora');
    }, 100);
  }
}