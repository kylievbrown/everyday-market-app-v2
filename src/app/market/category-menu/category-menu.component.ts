import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-menu',
  standalone: false,
  templateUrl: './category-menu.component.html',
  styleUrl: './category-menu.component.css'
})
export class CategoryMenuComponent {
  @Input() categories: any[] = [];
}
