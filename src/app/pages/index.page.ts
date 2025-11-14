import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
  <div class="min-h-screen bg-gray-50 text-gray-900">
    <div class="max-w-5xl mx-auto p-8">

      <!-- HEADER -->
      <div class="text-center mb-16">
        <img 
          src="/images/bs.png" 
          alt="Profile Photo"
          class="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-blue-500 shadow-md"
        >

        <h1 class="text-5xl font-extrabold text-gray-900 mb-2">
          Burhan Sözer
        </h1>

        <p class="text-2xl text-blue-600 font-semibold mb-4">
          Software Engineer & GIS Solution Expert
        </p>

        <p class="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
          Experienced in modern web technologies, scalable software architectures, and GIS solutions.  
          This portfolio highlights selected projects, technical articles, and professional achievements.
        </p>
      </div>

      <!-- TECH SKILLS -->
      <div class="bg-white rounded-2xl shadow-lg p-8 mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <span class="py-2 px-4 bg-blue-50 text-blue-700 rounded-lg font-medium text-sm text-center hover:bg-blue-100 transition">
            Angular
          </span>
          <span class="py-2 px-4 bg-blue-50 text-blue-700 rounded-lg font-medium text-sm text-center hover:bg-blue-100 transition">
            .NET
          </span>
          <span class="py-2 px-4 bg-blue-50 text-blue-700 rounded-lg font-medium text-sm text-center hover:bg-blue-100 transition">
            React
          </span>
          <span class="py-2 px-4 bg-blue-50 text-blue-700 rounded-lg font-medium text-sm text-center hover:bg-blue-100 transition">
            NestJS
          </span>
          <span class="py-2 px-4 bg-blue-50 text-blue-700 rounded-lg font-medium text-sm text-center hover:bg-blue-100 transition">
            TypeScript
          </span>
          <span class="py-2 px-4 bg-blue-50 text-blue-700 rounded-lg font-medium text-sm text-center hover:bg-blue-100 transition">
            PostgreSQL
          </span>
          <span class="py-2 px-4 bg-blue-50 text-blue-700 rounded-lg font-medium text-sm text-center hover:bg-blue-100 transition">
            Docker
          </span>
          <span class="py-2 px-4 bg-blue-50 text-blue-700 rounded-lg font-medium text-sm text-center hover:bg-blue-100 transition">
            GIS Solutions
          </span>
        </div>
      </div>


      <!-- EXPERIENCE -->
      <div class="bg-white rounded-xl shadow-lg p-6 mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h2>
        
        <div class="mb-6">
          <h3 class="text-xl font-semibold text-gray-900">Software Engineer - Company ABC</h3>
          <span class="text-gray-600 text-sm">Jan 2022 – Present</span>
          <ul class="list-disc list-inside mt-2 text-gray-700">
            <li>Developed high-performance e-commerce platform using Angular & Spring Boot.</li>
            <li>Implemented microservices architecture for scalable web applications.</li>
            <li>Integrated PostgreSQL and Docker for robust deployments.</li>
          </ul>
        </div>

        <div class="mb-6">
          <h3 class="text-xl font-semibold text-gray-900">GIS Developer - Company XYZ</h3>
          <span class="text-gray-600 text-sm">Jun 2020 – Dec 2021</span>
          <ul class="list-disc list-inside mt-2 text-gray-700">
            <li>Designed GIS mapping solutions for defense and commercial clients.</li>
            <li>Optimized spatial data processing using modern JS frameworks.</li>
            <li>Collaborated with cross-functional teams on software architecture design.</li>
          </ul>
        </div>
      </div>

      <!-- EDUCATION -->
      <div class="bg-white rounded-xl shadow-lg p-6 mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
        <p class="text-gray-700 mb-2">B.Sc. in Computer Engineering - University of XYZ (2015 – 2019)</p>
        <p class="text-gray-700 mb-2">Certified Angular Developer – 2022</p>
        <p class="text-gray-700">Certified GIS Specialist – 2021</p>
      </div>

      <!-- PORTFOLIO / BLOG -->
      <!-- <div class="bg-white rounded-xl shadow-lg p-6 mb-12 text-center">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Portfolio & Blog</h2>
        <p class="text-gray-700 mb-6">
          Explore my projects and technical articles.
        </p>
        <div class="space-x-4">
          <a routerLink="/portfolio" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition">
            🚀 Portfolio
          </a>
          <a routerLink="/blog" class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg shadow-sm transition">
            ✍️ Blog
          </a>
        </div>
      </div>

    </div> -->
     <!-- CONTACT -->
<div class="bg-white rounded-xl shadow-lg p-6 mb-12">
  <h2 class="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
  <p class="text-gray-700 mb-4">You can reach me via:</p>
  
  <div class="flex flex-wrap gap-6">
    <a href="mailto:bsozer06@gmail.com" class="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition font-semibold">
      <i class="fas fa-envelope text-lg"></i>
      <span>Email</span>
    </a>
    
    <a href="https://www.linkedin.com/in/burhansozer/" target="_blank" class="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition font-semibold">
      <i class="fab fa-linkedin text-lg"></i>
      <span>LinkedIn</span>
    </a>
    
    <a href="https://github.com/kullanici" target="_blank" class="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition font-semibold">
      <i class="fab fa-github text-lg"></i>
      <span>GitHub</span>
    </a>
  </div>
</div>
  </div>
  `
})
export default class HomePage {}
