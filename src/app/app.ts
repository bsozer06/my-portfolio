import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
    standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
    <div class="min-h-screen bg-gray-50 text-gray-900">
    <!-- NAVBAR -->
    <nav
      class="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm"
    >
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between items-center h-16">

          <!-- Logo -->
          <a routerLink="/" class="text-2xl font-extrabold text-gray-900 flex items-center gap-1">
            <i class="fa-solid fa-laptop-code text-blue-600"></i>
            Burhan<span class="text-blue-600">.Dev</span>
          </a>

          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center space-x-6">
            <a routerLink="/" class="nav-link flex items-center gap-1">
              <i class="fa-solid fa-house"></i> Home
            </a>
            <a routerLink="/portfolio" class="nav-link flex items-center gap-1">
              <i class="fa-solid fa-folder-open"></i> Portfolio
            </a>
            <a routerLink="/blog" class="nav-link flex items-center gap-1">
              <i class="fa-solid fa-blog"></i> Blog
            </a>
            <a routerLink="/contact" class="nav-link flex items-center gap-1">
              <i class="fa-solid fa-envelope"></i> Contact
            </a>
          </div>

          <!-- Mobile Hamburger -->
          <button
            class="md:hidden p-2 rounded-lg bg-gray-100"
            (click)="isMenuOpen = !isMenuOpen"
          >
            <span *ngIf="!isMenuOpen">☰</span>
            <span *ngIf="isMenuOpen">✕</span>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        *ngIf="isMenuOpen"
        class="md:hidden px-4 pb-4 space-y-3 text-lg bg-white border-t border-gray-200"
      >
        <a routerLink="/" class="block nav-link-mobile flex items-center gap-2">
          <i class="fa-solid fa-house"></i> Home
        </a>
        <a routerLink="/portfolio" class="block nav-link-mobile flex items-center gap-2">
          <i class="fa-solid fa-folder-open"></i> Portfolio
        </a>
        <a routerLink="/blog" class="block nav-link-mobile flex items-center gap-2">
          <i class="fa-solid fa-blog"></i> Blog
        </a>
        <a routerLink="/contact" class="block nav-link-mobile flex items-center gap-2">
          <i class="fa-solid fa-envelope"></i> Contact
        </a>
      </div>
    </nav>

    <!-- PAGE CONTENT -->
    <div class="pt-20">
      <router-outlet></router-outlet>
    </div>

  </div>
  `,
   styles: `
    .nav-link {
      @apply text-gray-700 hover:text-gray-900 font-medium transition;
    }

    .nav-link-mobile {
      @apply text-gray-700 hover:text-gray-900 font-medium py-2;
    }
  `,
})
export class App {
   isMenuOpen = false;
}