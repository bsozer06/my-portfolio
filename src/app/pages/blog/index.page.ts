import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { injectContentFiles } from '@analogjs/content';
import { CommonModule, DatePipe } from '@angular/common';

interface PostAttributes {
  title: string;
  slug: string;
  description: string;
  coverImage: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink, CommonModule, DatePipe],  
  template: `
 <div class="bg-gray-50 min-h-screen py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        <!-- Header -->
        <header class="text-center mb-16">
          <h1 class="text-5xl font-extrabold text-gray-900 mb-4">
            Blog Archive
          </h1>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Technical insights, software architecture deep dives, and thoughts from a Computer Engineer.
          </p>
        </header>

        <!-- Blog Posts -->
        <div class="space-y-8">
          <ng-container *ngIf="posts.length; else noPosts">
            <a 
              *ngFor="let post of posts"
              [routerLink]="['/blog', post.slug]" 
              class="block p-6 bg-white rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 transform border border-gray-200 group"
            >
              <div class="flex flex-col md:flex-row gap-6 items-center">

                <!-- Text Content -->
                <div class="flex-grow">
                  <h2 class="text-2xl font-bold text-blue-600 group-hover:text-blue-700 transition mb-2">
                    {{ post.attributes.title }}
                  </h2>
                  <p class="text-gray-700 text-base leading-relaxed">
                    {{ post.attributes.description }}
                  </p>
                </div>

                <!-- Cover Image -->
                <div *ngIf="post.attributes.coverImage" class="md:w-1/4 flex-shrink-0 hidden md:block">
                  <img 
                    [src]="post.attributes.coverImage" 
                    [alt]="post.attributes.title + ' Cover Image'" 
                    class="w-full h-32 object-cover rounded-lg shadow-md"
                  />
                </div>

              </div>
            </a>
          </ng-container>

          <!-- No Posts Message -->
          <ng-template #noPosts>
            <div class="text-center py-20 text-gray-500 text-xl">
              No posts found yet. Check back soon!
            </div>
          </ng-template>
        </div>

      </div>
    </div>
  `,
})
export default class Blog {
  readonly posts = injectContentFiles<PostAttributes>();
}
