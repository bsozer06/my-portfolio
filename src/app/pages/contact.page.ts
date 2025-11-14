import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
  <div class="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
  <div class="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
    
    <h1 class="text-4xl font-extrabold text-gray-900 mb-4 text-center">
      Get in Touch
    </h1>
    <p class="text-gray-600 text-center mb-10">
      I'm currently focused on new projects, but I'm always open to discussing Geospatial architecture, Full-Stack opportunities, or collaboration on challenging technical problems.
    </p>

    <div class="mt-12 text-center">
      <p class="text-gray-700 mb-6 text-xl font-semibold">
        Let's Connect Directly:
      </p>
      <div class="flex justify-center flex-wrap gap-4">
        
        <a 
          href="mailto:Ebsozer06@gmail.com?subject=Inquiry%20from%20Portfolio&body=Hello%20Burhan," 
          class="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-colors duration-300 shadow-lg text-lg"
        >
          <i class="fa-solid fa-envelope"></i> Send an Email
        </a>
        
        <a 
          href="https://linkedin.com/in/burhansozer" target="_blank" 
          class="flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-full font-bold transition-colors duration-300 shadow-lg text-lg"
        >
          <i class="fa-brands fa-linkedin"></i> Connect on LinkedIn
        </a>
        
        <a 
          href="/assets/Burhan_Sozer_CV_eng.pdf" download
          class="flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-full font-bold transition-colors duration-300 shadow-lg text-lg"
        >
          <i class="fa-solid fa-download"></i> Download CV
        </a>
      </div>
    </div>
    
    <div class="mt-16 pt-8 border-t border-gray-200 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">See My Activities</h2>
        <div class="flex justify-center gap-6">
            <a href="https://github.com/bsozer06" target="_blank" class="flex flex-col items-center p-6 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition shadow-md w-48">
                <i class="fa-brands fa-github text-4xl mb-3"></i>
                <span class="text-xl font-semibold">GitHub</span>
                <span class="text-sm opacity-75 mt-1">Latest Commits</span>
            </a>
            
            <a routerLink="/blog" class="flex flex-col items-center p-6 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition shadow-md w-48">
                <i class="fa-solid fa-blog text-4xl mb-3"></i>
                <span class="text-xl font-semibold">My Blog</span>
                <span class="text-sm opacity-75 mt-1">Blog Insights</span>
            </a>
        </div>
    </div>
    
  </div>
</div>
    <!-- <div class="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
        <h1 class="text-4xl font-extrabold text-gray-900 mb-4 text-center">
          Contact Me
        </h1>
        <p class="text-gray-600 text-center mb-10">
          Have a question or want to work together? Send me a message!
        </p>

        <form (ngSubmit)="onSubmit()" #contactForm="ngForm" class="space-y-6">
          <div>
            <label class="block text-gray-700 font-medium mb-2" for="name">Name</label>
            <input type="text" id="name" name="name" ngModel required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label class="block text-gray-700 font-medium mb-2" for="email">Email</label>
            <input type="email" id="email" name="email" ngModel required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label class="block text-gray-700 font-medium mb-2" for="message">Message</label>
            <textarea id="message" name="message" ngModel required rows="6"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>

          <div class="text-center">
            <button type="submit" [disabled]="!contactForm.valid"
              class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-md">
              Send Message
            </button>
          </div>
        </form>

       <div class="mt-12 text-center">
        <p class="text-gray-600 dark:text-gray-400 mb-4 font-medium">
            Or reach me via:
        </p>
        <div class="flex justify-center gap-4">
            <a href="mailto:youremail@example.com" 
            class="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-colors duration-300 shadow-md">
            <i class="fa-solid fa-envelope"></i> Email
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" 
            class="flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-full font-semibold transition-colors duration-300 shadow-md">
            <i class="fa-brands fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://github.com/yourprofile" target="_blank" 
            class="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-semibold transition-colors duration-300 shadow-md">
            <i class="fa-brands fa-github"></i> GitHub
            </a>
        </div>
        </div>

      </div>
    </div> -->
  `
})
export default class ContactPage {
  onSubmit() {
    alert('Thank you! Your message has been sent.');
  }
}
