import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-menu-item',
  standalone: true,
  templateUrl: './category-menu-item.component.html',
  styleUrls: ['./category-menu-item.component.css']
})
export class CategoryMenuItemComponent {
  @Input() categoryName!: string;
  @Output() categorySelected = new EventEmitter<string>();

  onClick() {
    this.categorySelected.emit(this.categoryName);
  }
}
