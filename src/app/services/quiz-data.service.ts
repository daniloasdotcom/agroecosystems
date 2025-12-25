import { Injectable } from '@angular/core';

export interface QuizQuestion {
  pergunta: string;
  opcoes: string[];
  correta: number;
  explicacao?: string; // Opcional: explicar por que acertou/errou
}

@Injectable({
  providedIn: 'root'
})
export class QuizDataService {

  // Agora cada chave guarda um ARRAY de perguntas
  private bancoDeQuestoes: Record<string, QuizQuestion[]> = {

    'intro': [
      {
        pergunta: 'O que é um agroecossistema?',
        opcoes: [
          'Um ecossistema natural sem interferência humana',
          'Um sistema de produção agrícola compreendido como um ecossistema',
          'Um sistema exclusivo de produção industrial'
        ],
        correta: 1
      },
      {
        pergunta: 'Qual é uma das principais diferenças entre agroecossistemas e ecossistemas naturais?',
        opcoes: [
          'Os ecossistemas naturais apresentam maiores perdas de nutrientes',
          'Os agroecossistemas não sofrem perdas de biomassa',
          'Os agroecossistemas possuem presença ativa do ser humano'
        ],
        correta: 2
      },
      {
        pergunta: 'Nos agroecossistemas, as perdas significativas de biomassa e nutrientes ocorrem principalmente devido a:',
        opcoes: [
          'Respiração celular',
          'Processos naturais de reciclagem',
          'Práticas de colheita'
        ],
        correta: 2
      },
      {
        pergunta: 'Qual processo NÃO é considerado uma perda significativa de biomassa nos agroecossistemas?',
        opcoes: [
          'Colheita',
          'Erosão',
          'Decomposição da matéria orgânica'
        ],
        correta: 2
      },
      {
        pergunta: 'Qual situação pode intensificar a perda de nutrientes em agroecossistemas?',
        opcoes: [
          'Policultivos em solos argilosos',
          'Monocultivos em solos arenosos',
          'Alta biodiversidade vegetal'
        ],
        correta: 1
      },
      {
        pergunta: 'Os agroecossistemas ecológicos se caracterizam principalmente por:',
        opcoes: [
          'Dependência intensa de insumos externos',
          'Priorização de processos ecológicos',
          'Manutenção permanente em estágios iniciais de sucessão'
        ],
        correta: 1
      },
      {
        pergunta: 'Em relação à biodiversidade, os agroecossistemas industriais são:',
        opcoes: [
          'Altamente diversificados',
          'Baseados em policultivos',
          'Simplificados, geralmente em monocultivos'
        ],
        correta: 2
      },
      {
        pergunta: 'Como ocorre a sucessão ecológica nos agroecossistemas industriais?',
        opcoes: [
          'É direcionada aos estágios avançados',
          'É mantida nos estágios iniciais',
          'Não ocorre devido à ausência de manejo'
        ],
        correta: 1
      },
      {
        pergunta: 'A alta produtividade primária líquida nos agroecossistemas industriais é mantida principalmente por meio de:',
        opcoes: [
          'Processos naturais de autorregulação',
          'Uso intensivo de insumos e práticas de manejo',
          'Aumento natural da biodiversidade'
        ],
        correta: 1
      },
      {
        pergunta: 'Uma consequência comum da manutenção da sucessão ecológica em estágios iniciais é:',
        opcoes: [
          'Maior resiliência do sistema',
          'Conservação da biodiversidade',
          'Degradação do solo e perda de biodiversidade'
        ],
        correta: 2
      },
      {
        pergunta: 'Qual característica fundamental diferencia os Agroecossistemas dos Ecossistemas Naturais?',
        opcoes: [
          'A ausência total de processos ecológicos como a sucessão',
          'A presença ativa humana e a exportação (perda) de biomassa na colheita',
          'A incapacidade de realizar fotossíntese sem insumos químicos'
        ],
        correta: 1
      },
      {
        pergunta: 'Além da colheita, quais processos podem causar perdas significativas de nutrientes no solo?',
        opcoes: [
          'Apenas a respiração das plantas',
          'Lixiviação, erosão e volatilização',
          'Fotossíntese e fixação biológica de nitrogênio'
        ],
        correta: 1
      },
      {
        pergunta: 'Comparando sistemas, qual é uma característica dos Agroecossistemas Industriais?',
        opcoes: [
          'Alta biodiversidade (Policultivos) e alta resiliência',
          'Sucessão ecológica direcionada aos estágios avançados',
          'Baixa resiliência (vulnerável a pragas) e manutenção nos estágios iniciais de sucessão'
        ],
        correta: 2
      },
      {
        pergunta: 'Como a Produtividade Primária Líquida se comporta nos dois modelos?',
        opcoes: [
          'É sempre baixa nos agroecossistemas ecológicos',
          'É alta nos estágios iniciais de ambos, mas no industrial é mantida alta artificialmente com insumos',
          'Depende exclusivamente do clima e não do manejo'
        ],
        correta: 1
      }
    ],

    // Outros cards...
    'niveisorganizacao': [
      {
        pergunta: 'Qual a ordem correta?',
        opcoes: ['População -> Comunidade', 'Comunidade -> População'],
        correta: 0
      }
    ]
  };

  constructor() { }

  // Retorna um ARRAY agora
  getQuestaoPorId(id: string): QuizQuestion[] | undefined {
    return this.bancoDeQuestoes[id];
  }
}