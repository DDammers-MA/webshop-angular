import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: false,
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  
  product = input<any>()


  addToCard(item: any) {
  item.stringify = JSON.stringify(item);
  let card = localStorage.getItem("cart");
  let cardItems = card ? JSON.parse(card) : [];
  cardItems.push(item);
  localStorage.setItem("cart", JSON.stringify(cardItems));

  }
}
