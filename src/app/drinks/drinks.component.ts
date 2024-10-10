import { Component } from '@angular/core';
import { ApiService } from '../api-service/api-service.component';

@Component({
  selector: 'app-drinks',
  standalone: true,
  imports: [],
  templateUrl: './drinks.component.html',
  styleUrl: './drinks.component.css'
})
export class DrinksComponent {
  drinks: any[] = [];
  j: number = 0;
  showDetails: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchDrinks();
  }

  fetchDrinks() {
    const drinksData = [];
    for (let i = 0; i <= 14; i++) {
      const id = 11000 + i;
      this.apiService.getDrink(id).subscribe(data => {
        this.drinks.push({
          id: data.drinks[0].idDrink,
          name: data.drinks[0].strDrink,
          image: data.drinks[0].strDrinkThumb,
          ingredients: [
            data.drinks[0].strIngredient1,
            data.drinks[0].strIngredient2,
            data.drinks[0].strIngredient3,
            data.drinks[0].strIngredient4
          ],
          measures: [
            data.drinks[0].strMeasure1,
            data.drinks[0].strMeasure2,
            data.drinks[0].strMeasure3,
            data.drinks[0].strMeasure4
          ].filter(measure => measure)
        });
      }, error => console.error('Error al traer los datos:', error));
    }
  }

  sumarIterador() {
    if (this.j < this.drinks.length - 1) {
      this.j++;
    }
  }

  restarIterador() {
    if (this.j > 0) {
      this.j--;
    }
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  } 
}
