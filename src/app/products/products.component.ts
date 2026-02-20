// src/app/products/products.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  // Product list
  products = [
    { name: 'Smartphone X', category: 'Phones', price: 999, image: 'POCO X7.jpg', description: 'Latest AI-powered smartphone with high-resolution camera.', available: true },
    { name: 'Laptop Pro', category: 'Laptops', price: 1499, image: 'LAPTOP.jpg', description: 'Powerful laptop for gaming and productivity.', available: true },
    { name: 'Wireless Earbuds', category: 'Audio', price: 199, image: 'AIRPODS.jpg', description: 'Noise-cancelling earbuds with long battery life.', available: false },
    { name: 'Smartwatch Z', category: 'Wearables', price: 299, image: 'SMARTWATCH.jpg', description: 'Fitness tracking smartwatch with GPS.', available: true },
    { name: 'Tablet Ultra', category: 'Tablets', price: 599, image: 'TABLET.jpg', description: 'Lightweight tablet for work and entertainment.', available: true },
    { name: 'Gaming Console', category: 'Gaming', price: 499, image: 'GAMINGCONSOLE.jpg', description: 'Next-gen console with immersive graphics.', available: true },
    { name: 'Bluetooth Speaker', category: 'Audio', price: 149, image: 'BLUETOTHSPEK.jpg', description: 'Portable speaker with deep bass and waterproof design.', available: true },
    { name: 'VR Headset', category: 'Gaming', price: 399, image: 'VR HEADSET.jpg', description: 'Virtual reality headset for immersive experiences.', available: true },
    { name: 'Drone Camera', category: 'Drones', price: 799, image: 'DRONECAM.jpg', description: 'High-flying drone with 4K camera for aerial shots.', available: true },
    { name: 'Smart Home Hub', category: 'Smart Home', price: 249, image: 'SMARTHOMEAD.jpg', description: 'Control your home devices with voice commands.', available: true }
  ];

  cartCount = 0;      // Number of items in cart
  totalPrice = 0;     // Total cart price
  selectedCategory = 'All'; // Filter category

  // Add product to cart
  addToCart(product: any) {
  if (!product.available) {
    alert(product.name + ' is out of stock!');
    return;
  }

  // Increment cart
  this.cartCount++;
  this.totalPrice += product.price;

  // Show alert with product name + current total
  alert(`${product.name} added to cart!\nItems in Cart: ${this.cartCount}\nTotal Price: $${this.totalPrice}`);
}

  // Return filtered products
  get filteredProducts() {
    if (this.selectedCategory === 'All') return this.products;
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  // Change category
  filterCategory(category: string) {
    this.selectedCategory = category;
  }
}