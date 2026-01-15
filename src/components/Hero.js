export function renderHero() {
  const baseUrl = import.meta.env.BASE_URL;
  return `
    <!-- Hero Section -->
    <section id="home" class="relative section-bg-pattern section-padding bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-black/50 dark:from-black/50 dark:via-gray-900/50 dark:to-gray-800/50 overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10 dark:opacity-5">
        <div class="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div class="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div class="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <!-- Floating Elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
        <div class="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-60" style="animation-delay: 1s"></div>
        <div class="absolute bottom-1/4 left-2/3 w-5 h-5 bg-pink-400 rounded-full animate-bounce opacity-60" style="animation-delay: 2s"></div>
        <div class="absolute top-1/2 right-1/3 w-2 h-2 bg-indigo-400 rounded-full animate-bounce opacity-60" style="animation-delay: 3s"></div>
      </div>

      <div class="container mx-auto px-4 sm:px-8 md:px-10 lg:px-16 relative z-10">
        <div class="flex flex-col lg:flex-row items-center min-h-[600px]">
          <div class="mt-2 lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
            <!-- Greeting Badge -->
            <div class="inline-flex items-center px-4 py-2 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-full border border-gray-300 dark:border-gray-600 mb-8 shadow-lg">
              <div class="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Available for new opportunities</span>
            </div>

            <!-- Main Heading -->
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span class="block text-white dark:text-white">Hi, I'm</span>
              <span class="block mt-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
                KIRITI MUKHERJEE
              </span>
            </h1>

            <!-- Subtitle with Typing Effect -->
            <div class="mb-8">
              <h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200 dark:text-gray-300 mb-4">
                <span id="type-display" class="inline-block"></span>
              </h2>
              <div class="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                <span class="px-4 py-2 rounded-full text-base font-medium flex items-center gap-2" style="background-color: rgba(88, 28, 135, 0.3); color: #d8b4fe;">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" class="w-5 h-5" alt="TypeScript" title="TypeScript - Statically typed JavaScript that scales" />
                  TypeScript
                </span>
                <span class="px-4 py-2 rounded-full text-base font-medium flex items-center gap-2" style="background-color: rgba(113, 63, 18, 0.3); color: #fde047;">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" class="w-5 h-5" alt="Python" title="Python - Versatile language for AI, ML, and automation" />
                  Python
                </span>
                <span class="px-4 py-2 rounded-full text-base font-medium flex items-center gap-2" style="background-color: rgba(20, 83, 45, 0.3); color: #86efac;">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" class="w-5 h-5" alt="Node.js" title="Node.js - JavaScript runtime built on Chrome's V8 engine" />
                  Node.js
                </span>
                <span class="px-4 py-2 rounded-full text-base font-medium flex items-center gap-2" style="background-color: rgba(30, 58, 138, 0.3); color: #93c5fd;">
                  <img src="https://cdn.simpleicons.org/nextdotjs/white" class="w-5 h-5" alt="NextJS" title="NextJS - The React framework for production" />
                  Next.Js
                </span>
                <span class="px-4 py-2 rounded-full text-base font-medium flex items-center gap-2" style="background-color: rgba(31, 41, 55, 0.5); color: #d1d5db;">
                  <img src="${baseUrl}aws.svg" class="w-5 h-5" alt="AWS" title="Amazon Web Services - Cloud computing platform" />
                  AWS
                </span>
              </div>
            </div>

            <!-- Description -->
            <p class="text-xl md:text-2xl text-gray-300 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I craft <span class="font-semibold text-blue-600 dark:text-blue-400">exceptional digital experiences</span>
              that combine beautiful design with powerful functionality.
              <span class="font-semibold text-purple-600 dark:text-purple-400">5+ years</span> of turning ideas into reality.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a href="mailto:kimuapon@gmail.com" class="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden" title="Send me an email">
                <span class="relative z-10 flex items-center justify-center">
                  Let's Work Together
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a href="#experience" class="px-8 py-4 border-2 border-blue-500/60 text-white font-semibold rounded-xl hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 flex items-center justify-center group" title="View my professional experience">
                View My Work
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
              <div class="text-center lg:text-left">
                <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">15+</div>
                <div class="text-sm text-gray-400 dark:text-gray-400">Projects Completed</div>
              </div>
              <div class="text-center lg:text-left">
                <div class="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">5+</div>
                <div class="text-sm text-gray-400 dark:text-gray-400">Years Experience</div>
              </div>
              <div class="text-center lg:text-left">
                <div class="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-1">20+</div>
                <div class="text-sm text-gray-400 dark:text-gray-400">Technologies Mastered</div>
              </div>
            </div>
          </div>

          <!-- Profile Image Section -->
          <div class="lg:w-1/2 flex justify-center lg:justify-end">
            <div class="relative">
              <!-- Decorative Elements -->
              <div class="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
              <div class="absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse" style="animation-delay: 1s"></div>

              <!-- Main Image Container -->
              <div class="relative w-80 h-80 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-2">
                <div class="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                  <img src="${baseUrl}Photo_me.jpg" alt="Kiriti Mukherjee" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" title="Kiriti Mukherjee - Full Stack Engineer" />
                </div>
              </div>

              <!-- Floating Tech Icons -->
              <div class="absolute top-8 -left-8 w-16 h-16 bg-gray-900/80 backdrop-blur-sm border border-white/10 rounded-full shadow-lg flex items-center justify-center animate-bounce">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" class="w-8 h-8" title="React - A JavaScript library for building user interfaces" />
              </div>
              <div class="absolute top-1/2 -right-8 w-16 h-16 bg-gray-900/80 backdrop-blur-sm border border-white/10 rounded-full shadow-lg flex items-center justify-center animate-bounce" style="animation-delay: 1s">
                <img src="${baseUrl}aws.svg" alt="AWS" class="w-8 h-8" title="AWS Cloud - Leading cloud computing platform" />
              </div>
              <div class="absolute bottom-8 -left-4 w-16 h-16 bg-gray-900/80 backdrop-blur-sm border border-white/10 rounded-full shadow-lg flex items-center justify-center animate-bounce" style="animation-delay: 2s">
                <img src="${baseUrl}typescript.svg" alt="TS" class="w-8 h-8" title="TypeScript - JavaScript that scales" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div class="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  `;
}

export function initTypingEffect() {
  const titles = ["Full Stack Engineer", "Software Engineer"];
  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingDelay = 100;
  const erasingDelay = 50;
  const newTextDelay = 2000;
  let cursorVisible = true;
  const cursor = "|";

  function updateCursor() {
    const typeDisplay = document.getElementById("type-display");
    if (!typeDisplay) return;
    cursorVisible = !cursorVisible;
    if (cursorVisible) {
      typeDisplay.textContent =
        typeDisplay.textContent.replace(cursor, "") + cursor;
    } else {
      typeDisplay.textContent = typeDisplay.textContent.replace(cursor, "");
    }
  }

  function typeEffect() {
    const currentTitle = titles[titleIndex];
    const typeDisplay = document.getElementById("type-display");
    if (!typeDisplay) return;

    if (isDeleting) {
      typeDisplay.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typeDisplay.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
    }

    if (cursorVisible) {
      typeDisplay.textContent += cursor;
    }

    let typeSpeed = isDeleting ? erasingDelay : typingDelay;

    if (!isDeleting && charIndex === currentTitle.length) {
      typeSpeed = newTextDelay;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
    }

    setTimeout(typeEffect, typeSpeed);
  }

  setInterval(updateCursor, 500);
  typeEffect();
}
