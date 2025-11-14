import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <div class="min-h-screen bg-gray-50 text-gray-900 py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="text-center mb-16">
          <img 
            src="/images/bs.png" 
            alt="Burhan Sözer Profile Photo"
            class="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-blue-600 shadow-xl"
          >

          <h1 class="text-5xl md:text-6xl font-extrabold text-gray-900 mb-2">
            Burhan Sözer
          </h1>

          <p class="text-2xl text-blue-600 font-semibold mb-6">
            Software Engineer | MSc | GIS & GEOINT
          </p>

          <p class="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
A seasoned Software Developer specializing in Full-Stack web development and Geoinformatics (GIS) solutions. Experienced in contributing to mission-critical, international projects, notably the NATO AirC2IS geospatial platform. Bringing strong technical depth and holding two Master's degrees in related fields, focused on delivering scalable, high-performance, and standards-compliant software architectures.
          </p>
        </div>

        <div class="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
          <h2 class="text-3xl font-bold text-gray-900 mb-6 border-b pb-2 border-gray-200">
            Technical Expertise
          </h2>
          
          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-semibold text-gray-700 mb-3">Programming Languages:</h3>
              <div class="flex flex-wrap gap-3">
                @for (lang of ['C#', 'JavaScript', 'Python', 'SQL']; track lang) {
                  <span class="skill-badge">{{ lang }}</span>
                }
              </div>
            </div>

            <div>
              <h3 class="text-xl font-semibold text-gray-700 mb-3">Frameworks & Platforms:</h3>
              <div class="flex flex-wrap gap-3">
                @for (fw of ['Angular', '.NET', 'React']; track fw) {
                  <span class="skill-badge">{{ fw }}</span>
                }
                @for (platform of ['ArcGIS Portal','ArcGIS Server', 'ArcGIS JS SDK', 'PostGIS', 'QGIS', 'ArcGIS Pro']; track platform) {
                  <span class="skill-badge bg-green-50 text-green-700 hover:bg-green-100">{{ platform }}</span>
                }
              </div>
            </div>

            <div>
              <h3 class="text-xl font-semibold text-gray-700 mb-3">Core Technical Areas:</h3>
              <div class="flex flex-wrap gap-3">
                @for (area of ['Docker', 'Git/GitHub', 'RESTful API', 'Clean Code', 'OGC Standards', 'SLD', 'CIMSymbol']; track area) {
                  <span class="skill-badge bg-purple-50 text-purple-700 hover:bg-purple-100">{{ area }}</span>
                }
              </div>
            </div>
          </div>
        </div>


        <div class="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
          <h2 class="text-3xl font-bold text-gray-900 mb-6 border-b pb-2 border-gray-200">
            Professional Experience
          </h2>
          
          <div class="experience-card">
            <h3 class="text-xl font-bold text-blue-600">Atos | Software Engineer</h3>
            <span class="text-gray-600 text-sm italic">October 2022 – Present | Ankara, Turkey</span>
            <ul class="list-disc list-inside mt-2 text-gray-700 space-y-1">
              <li>Core developer on the NATO AirC2IS project, specializing in geospatial and full-stack implementation.</li>
              <li>Engineered both Angular (frontend) and .NET Framework (backend) services for high-performance data handling.</li>
              <li>Expertly utilized the ArcGIS Ecosystem (Pro, Server, Portal, JS SDK) for developing complex geospatial modules.</li>
              <li>Pioneered the implementation of advanced symbol rendering using CIMSymbol and managed custom .stylx file publishing.</li>
              <li>Successfully integrated NATO’s COREGIS service into the application infrastructure.</li>
              <li>Developed crucial functionalities for importing and exporting NVG files (NATO Vector Graphics).</li>
              <li>Played a key role in system design, actively participating in the development of the new symbology architecture.</li>
              <li>Contributed to international collaboration efforts, including delivering a project acceptance presentation in the Netherlands.</li>
            </ul>
          </div>
          
          <div class="experience-card mt-6 pt-6 border-t border-gray-100">
            <h3 class="text-xl font-bold text-gray-900">GEOSYS GIS & Consultancy | Full Stack Developer</h3>
            <span class="text-gray-600 text-sm italic">March 2022 – September 2022 | Ankara, Turkey</span>
            <ul class="list-disc list-inside mt-2 text-gray-700 space-y-1">
              <li>Developed and maintained web-based GIS applications for the MCBS and NEFES projects.</li>
              <li>Utilized .NET Core for building robust backend services and React for dynamic frontend development.</li>
              <li>Performed regular bug fixes, feature improvements, and provided production support within an established Agile workflow.</li>
              <li>Contributed to maintaining code quality and ensuring the scalability of the application infrastructure.</li>
            </ul>
          </div>

          <div class="experience-card mt-6 pt-6 border-t border-gray-100">
            <h3 class="text-xl font-bold text-gray-900">Belsis Computer Software Ltd. Co. | Software Developer</h3>
            <span class="text-gray-600 text-sm italic">April 2021 – February 2022 | Ankara, Turkey</span>
            <ul class="list-disc list-inside mt-2 text-gray-700 space-y-1">
              <li>Provided comprehensive full-stack development and support for large-scale projects, including EÜAŞ and Web Tapu.</li>
              <li>Utilized .NET Core and Angular for backend and frontend enhancements within the EÜAŞ project.</li>
              <li>Engineered scalable web-based GIS solutions for the Web Tapu project using Node.js and Angular.</li>
              <li>Responsible for performance improvements, bug fixing, and ensuring application stability across both platforms.</li>
            </ul>
          </div>
          
          <div class="experience-card mt-6 pt-6 border-t border-gray-100">
            <h3 class="text-xl font-bold text-gray-900">OdakGIS | GIS Software Developer</h3>
            <span class="text-gray-600 text-sm italic">July 2020 – April 2021 | Ankara, Turkey</span>
            <ul class="list-disc list-inside mt-2 text-gray-700 space-y-1">
              <li>Managed and published WMS/WFS services for TADLAB and TedPORTAL projects using GeoServer.</li>
              <li>Handled complex spatial data manipulation and queries using PostGIS.</li>
              <li>Configured and maintained SLD files for service-side styling and rendering optimization.</li>
            </ul>
          </div>

        </div>

        <div class="grid md:grid-cols-2 gap-8 mb-12">
            <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-2xl font-bold text-gray-900 mb-6 border-b pb-2 border-gray-200">
                    Education
                </h2>
                <div class="space-y-6 text-gray-700">
                    
                    <div class="border-l-4 border-blue-600 pl-4 relative">
                        <span class="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full border-2 border-white"></span>
                        <p class="text-lg font-bold text-gray-900">M.Sc., Software Engineering</p>
                        <p class="text-md text-gray-700">Hacettepe University</p>
                        <span class="text-sm text-gray-500 italic">2023 – 2024</span>
                    </div>

                    <div class="border-l-4 border-gray-300 pl-4 relative">
                        <span class="absolute -left-2 top-0 w-4 h-4 bg-gray-300 rounded-full border-2 border-white"></span>
                        <p class="text-lg font-bold text-gray-900">M.Sc., Geomatics Engineering</p>
                        <p class="text-md text-gray-700">Hacettepe University</p>
                        <span class="text-sm text-gray-500 italic">2018 – 2020</span>
                    </div>

                    <div class="border-l-4 border-gray-300 pl-4 relative">
                        <span class="absolute -left-2 top-0 w-4 h-4 bg-gray-300 rounded-full border-2 border-white"></span>
                        <p class="text-lg font-bold text-gray-900">B.Sc., Geomatics Engineering</p>
                        <p class="text-md text-gray-700">Erciyes University</p>
                        <span class="text-sm text-gray-500 italic">2011 – 2016</span>
                    </div>

                </div>
            </div>

           <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 class="text-2xl font-bold text-gray-900 mb-6 border-b pb-2 border-gray-200">
                    Key Certifications
                </h2>
                
                <div class="space-y-2 text-gray-700"> 
                    
                    @for (cert of certifications; track cert.name) {
                        <div class="flex items-start gap-2 p-2 bg-gray-50 rounded-lg border border-gray-100 hover:bg-gray-100 transition duration-200">
                            <div class="flex-shrink-0 pt-1">
                                <i class="fas fa-{{ cert.icon }} text-lg text-blue-600"></i>
                            </div>
                            <div class="flex-grow">
                                <p class="font-semibold text-gray-900 leading-tight">{{ cert.name }}</p>
                                <span class="text-sm text-gray-600">{{ cert.source }} ({{ cert.year }})</span>
                            </div>
                        </div>
                    } @empty {
                         <p class="text-center text-gray-500">No certifications listed.</p>
                    }
                </div>
            </div>
        </div>
        
        <div class="bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100">
          <h2 class="text-3xl font-bold text-gray-900 mb-6 border-b pb-2 border-gray-200">
            Connect with Me
          </h2>
          
          <div class="flex flex-wrap justify-center gap-6 mb-10">
            
            <a href="mailto:bsozer06@gmail.com" class="contact-card-link text-red-600 hover:bg-red-50">
              <i class="fas fa-envelope text-2xl"></i>
              <span class="font-semibold">Email</span>
              <span class="text-sm"> bsozer06@gmail.com</span>
            </a>
            
            <a href="https://www.linkedin.com/in/burhansozer" target="_blank" class="contact-card-link text-blue-600 hover:bg-blue-100">
              <i class="fab fa-linkedin text-2xl"></i>
              <span class="font-semibold">LinkedIn</span>
              <span class="text-sm">/burhansozer</span>
            </a>
            
            <a href="https://github.com/bsozer06" target="_blank" class="contact-card-link text-gray-700 hover:bg-gray-200">
              <i class="fab fa-github text-2xl"></i>
              <span class="font-semibold">GitHub</span>
              <span class="text-sm">/bsozer06</span>
            </a>
          </div>
          
        </div>

      </div>
    </div>
  `,
  styles: [`
    .skill-badge {
      @apply py-2 px-4 bg-blue-50 text-blue-700 rounded-full font-medium text-sm text-center hover:bg-blue-100 transition duration-200;
    }
    .contact-link {
      @apply flex items-center gap-2 text-blue-600 hover:text-blue-800 transition duration-200 font-semibold;
    }
  `]
})
export default class HomePage {
  readonly certifications = [
    { name: 'Clean Coding', source: 'ATOS', year: 2023, icon: 'code' },
    { name: 'Object-Oriented Design', source: 'ATOS', year: 2023, icon: 'cubes' },
    { name: 'Angular', source: 'ATOS', year: 2022, icon: 'laptop-code' },
    { name: 'GIS, Mapping, and Spatial Analysis', source: 'Coursera', year: 2020, icon: 'map-marker-alt' },
    { name: 'Speexx English CEFR Level B2.2', source: 'Speexx', year: 2023, icon: 'language' }
  ];
}