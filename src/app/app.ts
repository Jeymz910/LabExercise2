import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsComponent],  // ✅ keep this
  templateUrl: './app.html',
  styleUrls: ['./app.css']   // ✅ CORRECT
})
export class App {
  title = 'J-TECH SHOP';
}

