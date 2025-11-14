// src/app/pages/portfolio.page.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../interfaces/project.interface'; 
import { ProjectCardComponent } from '../components/project-card/project-card.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent], 
  template: `
     <section class="min-h-screen bg-gray-50 py-20 px-6">

    <!-- Header -->
    <div class="max-w-7xl mx-auto text-center mb-16">
      <h1 class="text-5xl font-extrabold text-gray-900 mb-4">
        Portfolio
      </h1>

      <p class="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        A curated selection of my software projects, highlighting my work in
        modern web development, clean architecture, and scalable systems.
      </p>

      <div class="mt-6 w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
    </div>

    <!-- Project Grid -->
    <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

      <app-project-card
        *ngFor="let project of projects"
        [project]="project">
      </app-project-card>

    </div>

  </section>
  `,
})
export default class PortfolioPage {
  readonly projects: Project[] = [
    {
      id: 1,
      title: 'E-Ticaret Platformu',
      description: 'Microservice mimarisi kullanılarak geliştirilmiş, yüksek performanslı bir e-ticaret uygulaması.',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Docker'],
      githubUrl: 'https://github.com/kullanici/ecommerce-platform',
      liveUrl: 'https://demo.ecommerce.com',
      imageUrl: '/images/test.jpg',     //TODO !!
    },
    {
      id: 2,
      title: 'Blog CMS Sistemi',
      description: 'Markdown tabanlı, hızlı ve SEO odaklı içerik yönetim sistemi (CMS).',
      technologies: ['AnalogJS', 'Tailwind CSS', 'TypeScript', 'Node.js'],
      githubUrl: 'https://github.com/kullanici/blog-cms',
      imageUrl: '/images/test.jpg',     //TODO !!
    },
    {
      id: 3,
      title: 'Gerçek Zamanlı Sohbet Uygulaması',
      description: 'WebSockets kullanarak geliştirilmiş düşük gecikmeli anlık mesajlaşma uygulaması.',
      technologies: ['React', 'NestJS', 'Socket.IO', 'Redis'],
      githubUrl: 'https://github.com/kullanici/realtime-chat',
      imageUrl: '/images/test.jpg',     //TODO !!
    },
  ];
}