import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ⬅️ Importar aqui
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { LuzComponent } from '../luz/luz.component';

@Component({
  selector: 'app-componentes',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, LuzComponent],
  templateUrl: './componentes.component.html',
  styleUrl: './componentes.component.scss'
})
export class ComponentesComponent {

}
