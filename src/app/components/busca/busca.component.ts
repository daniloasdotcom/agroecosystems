import { Component, ElementRef, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, NavigationEnd, Event as RouterEvent } from '@angular/router'; 
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

// Importar as listas de conceitos
import { CONCEITOS_HOME } from '../../conceitos-home'; 
import { CONCEITOS_MANEJO } from '../../conceitos-manejo'; 
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
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit, OnDestroy {
  termo = '';
  mostrarDropdown = false;
  conceitos: Concepto[] = []; 
  
  // NOVA VARIÁVEL: Define o texto padrão do placeholder
  placeholderText: string = '🔍 Buscar...'; 

  private routerSubscription: Subscription | undefined;

  constructor(
    private elementRef: ElementRef,
    private router: Router
  ) {}

  ngOnInit() {
    // Assinar aos eventos de navegação para detectar mudança de página
    this.routerSubscription = this.router.events.pipe(
      filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.termo = ''; 
      this.mostrarDropdown = false; 
      this.carregarConceitosComBaseNaRota(event.urlAfterRedirects);
    });

    // Carregar na inicialização (caso dê refresh na página)
    this.carregarConceitosComBaseNaRota(this.router.url);
  }

  carregarConceitosComBaseNaRota(url: string) {
    // Lógica atualizada para mudar a lista E o texto do placeholder
    if (url.includes('/home') || url === '/') { 
      this.conceitos = CONCEITOS_HOME;
      this.placeholderText = '🔍 Buscar conceito...';

    } else if (url.includes('/manejo')) { 
      this.conceitos = CONCEITOS_MANEJO;
      this.placeholderText = '🔍 Buscar manejo...';

    } else if (url.includes('/componentes')) { 
      this.conceitos = CONCEITOS_COMPONENTES;
      this.placeholderText = '🔍 Buscar componente...';

    } else {
      this.conceitos = []; 
      this.placeholderText = '🔍 Buscar...';
    }
  }

  get resultados() {
    if (!this.termo && !this.mostrarDropdownPeloToggleEsemTermo()) {
       // Lógica mantida
    }
    const termoLower = this.termo.toLowerCase();
    return this.conceitos.filter(c =>
      c.titulo.toLowerCase().includes(termoLower)
    );
  }

  private mostrarDropdownPeloToggleEsemTermo(): boolean {
    return this.mostrarDropdown && !this.termo;
  }

  toggleDropdown() {
    if (!this.mostrarDropdown) { 
        this.termo = '';
    }
    this.mostrarDropdown = !this.mostrarDropdown;
  }

  onInput() {
    this.mostrarDropdown = this.termo.length >= 1;
  }

  navegarPara(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    this.termo = ''; 
    this.mostrarDropdown = false; 
  }

  @HostListener('document:click', ['$event'])
  clickFora(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.mostrarDropdown = false;
    }
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}