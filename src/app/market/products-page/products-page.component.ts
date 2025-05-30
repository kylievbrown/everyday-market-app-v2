import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryMenuItemComponent } from '../category-menu-item/category-menu-item.component';

export interface Category {
  name: string;
}

@Component({
  selector: 'app-products-page',
  standalone: true,
  template: `<h2>Products Page<h2>`,
  imports: [CommonModule, CategoryMenuItemComponent],
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {
  categories: Category[] = [
    { name: 'Books' },
    { name: 'Crafts' },
    { name: 'Drinks' },
    { name: 'Music' }
  ];

  // property to store slected category
  selectedCategory: string = '';


onCategorySelected(category: string) {
  this.selectedCategory = category;
  console.log('User selected category:', category);
  }
}
