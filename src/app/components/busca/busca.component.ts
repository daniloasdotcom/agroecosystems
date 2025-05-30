// src/app/components/busca/busca.component.ts

import { Component, ElementRef, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, NavigationEnd, Event as RouterEvent } from '@angular/router'; // Importar Router e eventos
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

// Importar as novas listas de conceitos
import { CONCEITOS_HOME } from '../../conceitos-home'; // Ajuste o caminho se necessário
import { CONCEITOS_MANEJO } from '../../conceitos-manejo'; // Ajuste o caminho se necessário
import { CONCEITOS_COMPONENTES } from '../../conceitos-componentes';

interface Concepto {
  id: string;
  titulo: string;
}

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss'] // Corrigido para styleUrls (plural e array)
})
export class BuscaComponent implements OnInit, OnDestroy {
  termo = '';
  mostrarDropdown = false;
  conceitos: Concepto[] = []; // Lista de conceitos será carregada dinamicamente
  private routerSubscription: Subscription | undefined;

  constructor(
    private elementRef: ElementRef,
    private router: Router // Injetar o Router
  ) {}

  ngOnInit() {
    // Assinar aos eventos de navegação do roteador
    this.routerSubscription = this.router.events.pipe(
      filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Quando a navegação terminar, atualizar a lista de conceitos
      this.termo = ''; // Limpar termo de busca ao navegar
      this.mostrarDropdown = false; // Esconder dropdown
      this.carregarConceitosComBaseNaRota(event.urlAfterRedirects);
    });

    // Carregar conceitos para a rota atual no momento da inicialização do componente
    // Isso garante que, se o componente for carregado em uma página que não seja a home,
    // os conceitos corretos sejam carregados imediatamente.
    this.carregarConceitosComBaseNaRota(this.router.url);
  }

  carregarConceitosComBaseNaRota(url: string) {
    if (url.includes('/home') || url === '/') { // Se a URL contém /home ou é a raiz
      this.conceitos = CONCEITOS_HOME;
    } else if (url.includes('/manejo')) { // Se a URL contém /manejo
      this.conceitos = CONCEITOS_MANEJO;
    } else if (url.includes('/componentes')) { // Se a URL contém /componentes
      this.conceitos = CONCEITOS_COMPONENTES;
    } else {
      this.conceitos = []; // Nenhuma lista de conceito para outras rotas, ou defina um padrão
    }
  }

  get resultados() {
    // Não mostrar resultados se o termo estiver vazio, a menos que o dropdown seja aberto pelo toggle
    if (!this.termo && !this.mostrarDropdownPeloToggleEsemTermo()) {
        // return []; // Originalmente, se !termo, o *ngIf="mostrarDropdown && !termo" mostrava todos.
        // A lógica do template lida com mostrar todos os `this.conceitos` quando `!termo`.
        // Este getter é mais para resultados filtrados.
    }
    const termoLower = this.termo.toLowerCase();
    return this.conceitos.filter(c =>
      c.titulo.toLowerCase().includes(termoLower)
    );
  }

  // Helper para a lógica de resultados, para ser mais explícito
  private mostrarDropdownPeloToggleEsemTermo(): boolean {
    // Esta condição é quando o dropdown é aberto pelo toggle (▼) e o termo está vazio,
    // para listar todos os conceitos. O template já trata disso com *ngIf="mostrarDropdown && !termo".
    // O getter `resultados` é principalmente para quando `termo` existe.
    return this.mostrarDropdown && !this.termo;
  }


  toggleDropdown() {
    // Lógica original: Limpa o termo ao abrir pela seta para mostrar todos os conceitos da página atual
    if (!this.mostrarDropdown) { // Se estiver fechado e vai abrir
        this.termo = '';
    }
    this.mostrarDropdown = !this.mostrarDropdown;
  }

  onInput() {
    // Mostra o dropdown se o usuário começar a digitar
    this.mostrarDropdown = this.termo.length >= 1;
  }

  navegarPara(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    this.termo = ''; // Limpar termo após navegação
    this.mostrarDropdown = false; // Fechar dropdown
  }

  @HostListener('document:click', ['$event'])
  clickFora(event: MouseEvent) {
    // Fecha o dropdown se o clique for fora do componente de busca
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.mostrarDropdown = false;
    }
  }

  ngOnDestroy() {
    // Importante: cancelar a inscrição para evitar vazamentos de memória
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}