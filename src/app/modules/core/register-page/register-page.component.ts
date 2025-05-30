import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CountryValidatorDirective } from './validators/country-validator.directive';

@Component({
  standalone: true,
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    CountryValidatorDirective
  ],
})
export class RegisterPageComponent { 
  
  constructor(private router: Router) {}
  
model = {
    name: '',
    email: '',
    phone: '',
    dob: '',
    address: '',
    province: '',
    country: '',
    termsAccepted: false
  };

  provinces = ['Alberta', 'British Columbia', 'Manitoba', 'Saskatchewan', 'New Brunswick', 'Newfoundland and Lab.', 'Nova Scotia', 'ontario', 'PEI', 'Quebec'];
  countries = ['Canada', 'USA', 'Mexico'];

 


  onSubmit(): void {
    this.router.navigate(['/products'])
 }
}
