import { Component } from '@angular/core';
import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';
import { injectContent, MarkdownComponent } from '@analogjs/content';
import { RouterLink } from '@angular/router';

interface PostAttributes {
  title: string;
  slug: string;
  description: string;
  coverImage: string;
}

@Component({
  selector: 'app-blog-post',
  standalone: true,
    imports: [AsyncPipe, MarkdownComponent, CommonModule, RouterLink, DatePipe],  
    template: `
       <div class="bg-gray-50 min-h-screen pt-16 pb-24">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

        <!-- Async content -->
        <ng-container *ngIf="post$ | async as post">

          <!-- Back Link -->
          <a routerLink="/blog" class="text-blue-600 hover:underline mb-8 inline-block font-medium">
            &larr; Back to Blog Archive
          </a>

          <!-- Article -->
          <article class="bg-white rounded-2xl shadow-lg p-8">

            <!-- Header -->
            <header class="mb-12 text-center">
              <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                {{ post.attributes.title }}
              </h1>
              <p class="text-gray-500 text-sm">
                {{ post.attributes.description }}
              </p>
            </header>

            <!-- Cover Image -->
            <div *ngIf="post.attributes.coverImage" class="mb-12">
              <img 
                class="w-full object-cover rounded-xl shadow-md"
                [src]="post.attributes.coverImage" 
                [alt]="post.attributes.title + ' Cover Image'"
                style="max-height: 400px;" 
              />
            </div>

            <!-- Markdown Content -->
            <div class="
                prose 
                prose-lg 
                sm:prose-xl 
                text-gray-800
                mx-auto
                max-w-none
            ">
              <analog-markdown [content]="post.content" />
            </div>

          </article>

        </ng-container>

        <!-- Loading / Empty State -->
        <ng-container *ngIf="!(post$ | async)">
          <div class="text-center py-24 text-gray-500 text-xl">
            Loading post...
          </div>
        </ng-container>

      </div>
    </div>
  `,
//   styles: `
//     .post__image {
//       max-height: 40vh;
//     }
//   `,
})
export default class BlogPost {
  readonly post$ = injectContent<PostAttributes>('slug');
}
