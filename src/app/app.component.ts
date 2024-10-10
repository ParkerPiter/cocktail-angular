import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import { DrinksComponent } from './drinks/drinks.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root', //Referencia a este componente
  standalone: true,
  imports: [CommonModule, RouterOutlet, TestComponent, DrinksComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  'title': 'Cocktail-API'
}
