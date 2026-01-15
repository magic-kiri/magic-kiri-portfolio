(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();function x(){return`
    <!-- Navigation -->
    <nav class="fixed lg:top-0 left-0 right-0 z-50 lg:z-50 bg-gray-900/95 dark:bg-black/95 backdrop-blur-lg shadow-lg border-b border-purple-900">
      <div class="container mx-auto px-4 sm:px-8 md:px-10 lg:px-16 py-4 flex justify-between items-center">
        <a href="#home" class="text-2xl font-bold bg-gradient-to-r from-white to-white bg-clip-text text-transparent relative z-50 hover:scale-105 transition-transform duration-300" title="KIRITI MUKHERJEE - Full Stack Engineer">KIRITI MUKHERJEE</a>
        <div class="flex items-center">
          <!-- Mobile menu button -->
          <button id="mobile-menu-button" class="lg:hidden text-white p-2" aria-label="Toggle menu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <div class="hidden lg:flex items-center space-x-8">
            <a href="#home" class="text-white hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text transition-all duration-300 hover:-translate-y-0.5 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 hover:after:w-full after:transition-all after:duration-300" title="Home">Home</a>
            <a href="#about" class="text-white hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:bg-clip-text transition-all duration-300 hover:-translate-y-0.5 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-pink-500 after:to-orange-500 hover:after:w-full after:transition-all after:duration-300" title="Learn more about me">About</a>
            <a href="#skills" class="text-white hover:text-transparent hover:bg-gradient-to-r hover:from-amber-500 hover:to-red-500 hover:bg-clip-text transition-all duration-300 hover:-translate-y-0.5 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-amber-500 after:to-red-500 hover:after:w-full after:transition-all after:duration-300" title="View my technical skills and expertise">Skills</a>
            <a href="#experience" class="text-white hover:text-transparent hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 hover:bg-clip-text transition-all duration-300 hover:-translate-y-0.5 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-green-500 after:to-blue-500 hover:after:w-full after:transition-all after:duration-300" title="Check out my professional experience">Experience</a>
            <a href="#education" class="text-white hover:text-transparent hover:bg-gradient-to-r hover:from-teal-500 hover:to-emerald-500 hover:bg-clip-text transition-all duration-300 hover:-translate-y-0.5 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-teal-500 after:to-emerald-500 hover:after:w-full after:transition-all after:duration-300" title="View my educational background">Education</a>
            <a href="#certifications" class="text-white hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:bg-clip-text transition-all duration-300 hover:-translate-y-0.5 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-cyan-500 hover:after:w-full after:transition-all after:duration-300" title="View my professional certifications">Certifications</a>
            <a href="#contact" class="text-white hover:text-transparent hover:bg-gradient-to-r hover:from-rose-500 hover:to-yellow-500 hover:bg-clip-text transition-all duration-300 hover:-translate-y-0.5 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-rose-500 after:to-yellow-500 hover:after:w-full after:transition-all after:duration-300" title="Get in touch with me">Contact</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile menu drawer -->
    <div id="mobile-menu" class="fixed inset-y-0 right-0 w-64 bg-gray-900/95 dark:bg-black/95 backdrop-blur-lg transform translate-x-full transition-transform duration-300 ease-in-out z-50 lg:hidden">
      <div class="flex flex-col p-4 space-y-4">
        <button id="close-menu-button" class="self-end text-white p-2" aria-label="Close menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <a href="#home" class="text-white hover:text-blue-500 transition-colors duration-300">Home</a>
        <a href="#about" class="text-white hover:text-pink-500 transition-colors duration-300">About</a>
        <a href="#skills" class="text-white hover:text-amber-500 transition-colors duration-300">Skills</a>
        <a href="#experience" class="text-white hover:text-green-500 transition-colors duration-300">Experience</a>
        <a href="#education" class="text-white hover:text-teal-500 transition-colors duration-300">Education</a>
        <a href="#certifications" class="text-white hover:text-cyan-500 transition-colors duration-300">Certifications</a>
        <a href="#contact" class="text-white hover:text-rose-500 transition-colors duration-300">Contact</a>
      </div>
    </div>
  `}function h(){const r=document.getElementById("mobile-menu"),a=document.getElementById("mobile-menu-button"),e=document.getElementById("close-menu-button"),i=document.querySelectorAll("#mobile-menu a");function t(){r.classList.toggle("translate-x-full")}a?.addEventListener("click",t),e?.addEventListener("click",t),i.forEach(o=>{o.addEventListener("click",t)}),document.addEventListener("click",o=>{!r.contains(o.target)&&!a.contains(o.target)&&!r.classList.contains("translate-x-full")&&t()})}function y(){return`
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
                  <img src="/aws.svg" class="w-5 h-5" alt="AWS" title="Amazon Web Services - Cloud computing platform" />
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
                  <img src="/Photo_me.jpg" alt="Kiriti Mukherjee" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" title="Kiriti Mukherjee - Full Stack Engineer" />
                </div>
              </div>

              <!-- Floating Tech Icons -->
              <div class="absolute top-8 -left-8 w-16 h-16 bg-gray-900/80 backdrop-blur-sm border border-white/10 rounded-full shadow-lg flex items-center justify-center animate-bounce">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" class="w-8 h-8" title="React - A JavaScript library for building user interfaces" />
              </div>
              <div class="absolute top-1/2 -right-8 w-16 h-16 bg-gray-900/80 backdrop-blur-sm border border-white/10 rounded-full shadow-lg flex items-center justify-center animate-bounce" style="animation-delay: 1s">
                <img src="/aws.svg" alt="AWS" class="w-8 h-8" title="AWS Cloud - Leading cloud computing platform" />
              </div>
              <div class="absolute bottom-8 -left-4 w-16 h-16 bg-gray-900/80 backdrop-blur-sm border border-white/10 rounded-full shadow-lg flex items-center justify-center animate-bounce" style="animation-delay: 2s">
                <img src="/typescript.svg" alt="TS" class="w-8 h-8" title="TypeScript - JavaScript that scales" />
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
  `}function w(){const r=["Full Stack Engineer","Software Engineer"];let a=0,e=0,i=!1;const t=100,o=50,l=2e3;let n=!0;const s="|";function p(){const d=document.getElementById("type-display");d&&(n=!n,n?d.textContent=d.textContent.replace(s,"")+s:d.textContent=d.textContent.replace(s,""))}function g(){const d=r[a],u=document.getElementById("type-display");if(!u)return;i?(u.textContent=d.substring(0,e-1),e--):(u.textContent=d.substring(0,e+1),e++),n&&(u.textContent+=s);let b=i?o:t;!i&&e===d.length?(b=l,i=!0):i&&e===0&&(i=!1,a=(a+1)%r.length),setTimeout(g,b)}setInterval(p,500),g()}function k(){return`
    <!-- About Section -->
    <section id="about" class="relative section-bg-pattern section-padding overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full filter blur-3xl"></div>
        <div class="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full filter blur-3xl"></div>
      </div>

      <div class="container mx-auto px-4 sm:px-8 md:px-10 lg:px-16 relative z-10">
        <h2 class="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">About Me</span>
        </h2>

        <div class="max-w-6xl mx-auto">
          <div class="bg-white/5 dark:bg-gray-800/5 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/10 dark:border-gray-700/30">
            <div class="flex flex-col md:flex-row gap-8 items-center md:items-stretch">
              <div class="md:w-5/12 flex">
                <div class="relative h-full w-full">
                  <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30"></div>
                  <div class="relative bg-gray-900 rounded-2xl p-4 h-full w-full flex">
                    <img
                      src="/photo_myself.jpg"
                      alt="Kiriti Mukherjee"
                      class="rounded-xl w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div class="md:w-7/12 space-y-4">
                <p class="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate <span class="text-blue-400 font-semibold">Full Stack Engineer</span> with 5+ years of experience building scalable web applications and distributed systems—and I'm increasingly focused on <span class="text-blue-300 font-semibold">AI-powered products</span>.
                </p>
                <p class="text-lg text-gray-300 leading-relaxed">
                  I specialize in <span class="text-purple-400 font-semibold">TypeScript, Python, and cloud technologies</span>, and I love shipping features that combine great UX with reliable backend systems—especially where <span class="text-purple-300 font-semibold">ML signals</span> and <span class="text-purple-300 font-semibold">LLM workflows</span> can unlock new value.
                </p>
                <p class="text-lg text-gray-300 leading-relaxed">
                  I'm excited about <span class="text-pink-300 font-semibold">agentic automation</span>: designing tool-using assistants, evaluation-driven iteration, and guardrails that make AI systems dependable in production. Currently working remotely from <span class="text-pink-400 font-semibold">Dhaka, Bangladesh</span>, collaborating with teams across different time zones.
                </p>
                <div class="flex flex-wrap gap-3 pt-4">
                  <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Problem Solver</span>
                  <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Team Player</span>
                  <span class="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">Continuous Learner</span>
                  <span class="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">AI/ML Curious</span>
                  <span class="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">Agentic Workflows</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function S(){const r=[{key:"uk",comment:"UK Time Zone",glowGradient:"from-blue-500 to-cyan-500",border:"border-blue-500/30 hover:border-blue-400/50",clockBorder:"border-blue-400",clockFaceGradient:"from-blue-500/20 to-cyan-500/20",hourHandTop:"top-1/2",hourHand:"bg-blue-400",minuteHand:"bg-cyan-400",minuteHandTop:"top-1/2",minuteHandDelay:"2s",centerDot:"bg-blue-500",flagSrc:"https://flagcdn.com/gb.svg",flagAlt:"UK",flagTitle:"United Kingdom",country:"United Kingdom",countryHover:"group-hover:text-blue-400",timeId:"london-time",timeText:"text-blue-400",locationLabel:"GMT+0 • London",badge:"bg-blue-500/20 text-blue-300",badgeText:"Business Hours: 9AM-6PM"},{key:"bd",comment:"Bangladesh Time Zone",glowGradient:"from-purple-500 to-indigo-500",border:"border-purple-500/30 hover:border-purple-400/50",clockBorder:"border-purple-400",clockFaceGradient:"from-purple-500/20 to-indigo-500/20",hourHandTop:"top-1/2",hourHand:"bg-purple-400",hourHandDelay:"1s",minuteHand:"bg-indigo-400",minuteHandTop:"top-1/2",minuteHandDelay:"3s",centerDot:"bg-purple-500",flagSrc:"https://flagcdn.com/bd.svg",flagAlt:"Bangladesh",flagTitle:"Bangladesh - GMT+6 Time Zone",country:"Bangladesh",countryHover:"group-hover:text-purple-400",timeId:"dhaka-time",timeText:"text-purple-400",locationLabel:"GMT+6 • Dhaka",badge:"bg-purple-500/20 text-purple-300",badgeText:"🏠 Home Base"},{key:"us",comment:"USA Time Zone",glowGradient:"from-cyan-500 to-blue-500",border:"border-cyan-500/30 hover:border-cyan-400/50",clockBorder:"border-cyan-400",clockFaceGradient:"from-cyan-500/20 to-blue-500/20",hourHandTop:"top-1/2",hourHand:"bg-cyan-400",hourHandDelay:"2s",minuteHand:"bg-blue-400",minuteHandTop:"top-1/2",minuteHandDelay:"4s",centerDot:"bg-cyan-500",flagSrc:"https://flagcdn.com/us.svg",flagAlt:"USA",flagTitle:"United States - GMT-5 Time Zone",country:"United States",countryHover:"group-hover:text-cyan-400",timeId:"newyork-time",timeText:"text-cyan-400",locationLabel:"GMT-5 • New York",badge:"bg-cyan-500/20 text-cyan-300",badgeText:"Business Hours: 9AM-6PM"}],a=[{key:"slack",wrapperHoverBorder:"hover:border-blue-400/50",iconSrc:"/slack.svg",iconAlt:"Slack",iconTitle:"Slack/Teams - Real-time communication platform",label:"Slack/Teams",labelHover:"group-hover:text-blue-400",subtitle:"Real-time chat"},{key:"video",wrapperHoverBorder:"hover:border-purple-400/50",iconSrc:"/google-meet.svg",iconAlt:"Google Meet",iconTitle:"Google Meet - Video conferencing platform",label:"Video Calls",labelHover:"group-hover:text-purple-400",subtitle:"Zoom/Meet"},{key:"email",wrapperHoverBorder:"hover:border-cyan-400/50",iconSrc:"/gmail.svg",iconAlt:"Gmail",iconTitle:"Gmail - Email communication",label:"Email",labelHover:"group-hover:text-cyan-400",subtitle:"Async updates"},{key:"tools",wrapperHoverBorder:"hover:border-green-400/50",iconSrc:"/jira.svg",iconAlt:"Jira",iconTitle:"Jira - Project management and issue tracking",label:"Project Tools",labelHover:"group-hover:text-green-400",subtitle:"Jira/Trello"}],e=t=>`
              <!-- ${t.comment} -->
              <div class="group relative">
                <div
                  class="absolute -inset-1 bg-gradient-to-r ${t.glowGradient} rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"
                ></div>
                <div
                  class="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border ${t.border} transition-all duration-300 transform hover:-translate-y-2"
                >
                  <!-- Clock Animation -->
                  <div class="flex justify-center mb-4">
                    <div
                      class="relative w-16 h-16 border-2 ${t.clockBorder} rounded-full"
                    >
                      <div
                        class="absolute inset-2 bg-gradient-to-br ${t.clockFaceGradient} rounded-full"
                      ></div>
                      <div
                        class="absolute ${t.hourHandTop} left-1/2 w-1 h-6 ${t.hourHand} transform -translate-x-1/2 -translate-y-full origin-bottom animate-clock-tick"
                        ${t.hourHandDelay?`style="animation-delay: ${t.hourHandDelay}"`:""}
                      ></div>
                      <div
                        class="absolute ${t.minuteHandTop} left-1/2 w-0.5 h-4 ${t.minuteHand} transform -translate-x-1/2 -translate-y-full origin-bottom animate-clock-tick"
                        style="animation-delay: ${t.minuteHandDelay}"
                      ></div>
                      <div
                        class="absolute top-1/2 left-1/2 w-2 h-2 ${t.centerDot} rounded-full transform -translate-x-1/2 -translate-y-1/2"
                      ></div>
                    </div>
                  </div>

                  <div class="flex items-center justify-center gap-3 mb-3">
                    <img
                      src="${t.flagSrc}"
                      alt="${t.flagAlt}"
                      class="w-8 h-6 rounded shadow-lg"
                      title="${t.flagTitle}"
                    />
                    <span
                      class="text-white font-bold text-lg ${t.countryHover} transition-colors"
                      >${t.country}</span
                    >
                  </div>

                  <div class="text-center">
                    <div
                      class="text-2xl font-mono font-bold ${t.timeText} mb-1"
                      id="${t.timeId}"
                    >
                      --:--
                    </div>
                    <div class="text-gray-400 text-sm">${t.locationLabel}</div>
                    <div
                      class="mt-3 px-3 py-1 ${t.badge} rounded-full text-xs font-medium"
                    >
                      ${t.badgeText}
                    </div>
                  </div>
                </div>
              </div>
`,i=t=>`
              <div
                class="group bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-white/10 ${t.wrapperHoverBorder} transition-all duration-300 transform hover:-translate-y-1"
              >
                <div class="flex items-center gap-3">
                  <div
                    class="w-10 h-10 bg-gradient-to-r rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  >
                    <img
                      src="${t.iconSrc}"
                      alt="${t.iconAlt}"
                      class="w-8 h-8 text-white"
                      title="${t.iconTitle}"
                    />
                  </div>
                  <div>
                    <div
                      class="font-semibold text-white ${t.labelHover} transition-colors"
                    >
                      ${t.label}
                    </div>
                    <div class="text-xs text-gray-400">${t.subtitle}</div>
                  </div>
                </div>
              </div>
`;return`
    <!-- Enhanced Time Zone Flexibility Section -->
    <section
      class="relative section-bg-pattern section-padding overflow-hidden"
    >
      <!-- Enhanced Background Pattern -->
      <div class="absolute inset-0">
        <!-- Animated grid background -->
        <div
          class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Im0wIDQwaDQwdjQwaC00MHoiLz48cGF0aCBkPSJtMCAwaDQwdjQwaDQweiIgc3Ryb2tlPSIjMWYyOTM3IiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9zdmc+')] opacity-20"
        ></div>

        <!-- Animated gradient orbs -->
        <div
          class="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full filter blur-3xl animate-pulse"
        ></div>
        <div
          class="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full filter blur-3xl animate-pulse animation-delay-2000"
        ></div>
        <div
          class="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full filter blur-3xl animate-pulse animation-delay-4000"
        ></div>

        <!-- Floating world dots -->
        <div
          class="world-dot bg-blue-400 top-1/4 left-1/6"
          style="animation-delay: 0s"
        ></div>
        <div
          class="world-dot bg-cyan-400 top-1/3 left-1/2"
          style="animation-delay: 1s"
        ></div>
        <div
          class="world-dot bg-purple-400 top-2/3 right-1/4"
          style="animation-delay: 2s"
        ></div>
        <div
          class="world-dot bg-indigo-400 bottom-1/4 left-3/4"
          style="animation-delay: 3s"
        ></div>

        <!-- Connection lines -->
        <div
          class="connection-line top-1/3 left-1/4 w-1/3 transform rotate-12"
          style="animation-delay: 1s"
        ></div>
        <div
          class="connection-line top-1/2 left-1/2 w-1/4 transform -rotate-45"
          style="animation-delay: 2s"
        ></div>
        <div
          class="connection-line bottom-1/3 left-1/3 w-1/3 transform rotate-45"
          style="animation-delay: 3s"
        ></div>
      </div>

      <div class="container mx-auto px-4 sm:px-8 md:px-10 lg:px-16 relative z-10">
        <div class="mx-auto">
          <!-- Enhanced Header -->
          <div class="text-center mb-16">
            <div
              class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 mb-6"
            >
              <div
                class="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"
              ></div>
              <span class="text-blue-300 font-medium"
                >Available 24/7 Globally</span
              >
            </div>
            <h2 class="text-4xl md:text-5xl font-bold mb-12 text-center">
              <span
                class="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-300 via-cyan-400 to-purple-600 bg-clip-text text-transparent"
              >
                Global Collaboration
              </span>
            </h2>

            <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm very flexible with time zone communications and have
              experience working with teams across
              <span class="font-semibold text-cyan-400"
                >multiple continents</span
              >. Distance is never a barrier to great collaboration.
            </p>
          </div>

          <!-- Enhanced World Map Visualization -->
          <div class="relative mb-16">
            <!-- Central globe/world representation -->
            <div class="flex justify-center mb-12">
              <div class="relative">
                <!-- Rotating outer ring -->
                <div
                  class="w-64 h-64 border-2 border-blue-500/30 rounded-full animate-rotate"
                >
                  <div
                    class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <div
                      class="w-4 h-4 bg-blue-400 rounded-full animate-ping-slow"
                    ></div>
                  </div>
                  <div
                    class="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2"
                  >
                    <div
                      class="w-4 h-4 bg-cyan-400 rounded-full animate-ping-slow"
                      style="animation-delay: 1s"
                    ></div>
                  </div>
                  <div
                    class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
                  >
                    <div
                      class="w-4 h-4 bg-purple-400 rounded-full animate-ping-slow"
                      style="animation-delay: 2s"
                    ></div>
                  </div>
                  <div
                    class="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <div
                      class="w-4 h-4 bg-indigo-400 rounded-full animate-ping-slow"
                      style="animation-delay: 3s"
                    ></div>
                  </div>
                </div>

                <!-- Central globe -->
                <div
                  class="absolute inset-8 bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-full backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center"
                >
                  <div class="text-center">
                    <div class="text-4xl mb-2">🌍</div>
                    <div class="text-cyan-300 font-semibold text-sm">
                      Global Ready
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Enhanced Time Zone Cards with Live Clocks -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
${r.map(e).join("")}
            </div>

            <!-- Enhanced Communication Methods -->
            <div
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
            >
${a.map(i).join("")}
            </div>

            <!-- Enhanced Current Status -->
            <div class="text-center">
              <div
                class="inline-flex items-center gap-4 px-8 py-4 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-white/10"
              >
                <div class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span class="text-lg font-semibold text-white"
                    >Currently in Dhaka, Bangladesh</span
                  >
                </div>
                <div class="w-px h-8 bg-gray-600"></div>
                <div class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span class="text-green-400 font-medium"
                    >Available for collaboration</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Enhanced Decorative Elements -->
      <div
        class="absolute top-1/4 left-0 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse animation-delay-2000"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl animate-pulse animation-delay-4000"
      ></div>
    </section>
  `}function T(){function r(){const a=new Date,e=new Date(a.toLocaleString("en-US",{timeZone:"Asia/Dhaka"})),i=document.getElementById("dhaka-time");i&&(i.textContent=e.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit"}));const t=new Date(a.toLocaleString("en-US",{timeZone:"Europe/London"})),o=document.getElementById("london-time");o&&(o.textContent=t.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit"}));const l=new Date(a.toLocaleString("en-US",{timeZone:"America/New_York"})),n=document.getElementById("newyork-time");n&&(n.textContent=l.toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit"}))}r(),setInterval(r,1e3)}const m=[{name:"Programming Languages",icon:"💻",iconBg:"bg-blue-500/20",textColor:"text-blue-400",borderColor:"border-blue-500/30",hoverBorderColor:"hover:border-blue-400/50",gradient:"from-blue-500 to-blue-600",proficiency:5,skills:[{name:"TypeScript",icon:"https://img.icons8.com/color/36/000000/typescript.png",description:"TypeScript - Statically typed JavaScript that scales"},{name:"JavaScript",icon:"https://img.icons8.com/color/36/000000/javascript.png",description:"JavaScript - The language of the web"},{name:"Python",icon:"https://img.icons8.com/color/36/000000/python.png",description:"Python - Versatile programming language"},{name:"Go",icon:"https://img.icons8.com/color/36/000000/golang.png",description:"Go - Performance-oriented programming language"},{name:"C++",icon:"https://img.icons8.com/color/36/000000/c-plus-plus-logo.png",description:"C++ - High-performance programming language"}]},{name:"Frontend Technologies",icon:"🎨",iconBg:"bg-purple-500/20",textColor:"text-purple-400",borderColor:"border-purple-500/30",hoverBorderColor:"hover:border-purple-400/50",gradient:"from-purple-500 to-purple-600",proficiency:4,skills:[{name:"React",icon:"https://cdn.simpleicons.org/react",description:"React - JavaScript library for building user interfaces"},{name:"Next.js",icon:"https://cdn.simpleicons.org/nextdotjs/white",description:"Next.js - React framework for production"},{name:"HTML",icon:"https://img.icons8.com/color/36/000000/html-5.png",description:"HTML5 - Standard markup language for web pages"},{name:"CSS3",icon:"https://img.icons8.com/color/36/000000/css3.png",description:"CSS3 - Style sheet language for web design"},{name:"Tailwind CSS",icon:"https://cdn.simpleicons.org/tailwindcss",description:"Tailwind CSS - Utility-first CSS framework"}]},{name:"Backend Technologies",icon:"⚙️",iconBg:"bg-green-500/20",textColor:"text-green-400",borderColor:"border-green-500/30",hoverBorderColor:"hover:border-green-400/50",gradient:"from-green-500 to-green-600",proficiency:5,skills:[{name:"Node",icon:"https://cdn.simpleicons.org/nodedotjs",description:"Node.js - JavaScript runtime built on Chrome's V8 engine"},{name:"Express",icon:"https://cdn.simpleicons.org/express/white",description:"Express - Fast, unopinionated web framework for Node.js"},{name:"Deno",icon:"https://img.icons8.com/color/36/000000/deno.png",description:"Deno - Secure runtime for JavaScript and TypeScript"},{name:"NestJS",icon:"https://img.icons8.com/color/36/000000/nestjs.png",description:"NestJS - Progressive Node.js framework"},{name:"FastAPI",icon:"https://cdn.simpleicons.org/fastapi",description:"FastAPI - Modern, fast web framework for Python"},{name:"Kafka",icon:"https://cdn.simpleicons.org/apachekafka/white",description:"Apache Kafka - Distributed streaming platform"}]},{name:"Database & ORM",icon:"🗄️",iconBg:"bg-cyan-500/20",textColor:"text-cyan-400",borderColor:"border-cyan-500/30",hoverBorderColor:"hover:border-cyan-400/50",gradient:"from-cyan-500 to-cyan-600",proficiency:5,skills:[{name:"PostgreSQL",icon:"https://img.icons8.com/color/36/000000/postgreesql.png",description:"PostgreSQL - Advanced open source relational database"},{name:"MongoDB",icon:"https://cdn.simpleicons.org/mongodb/darkgreen",description:"MongoDB - NoSQL document database"},{name:"Redis",icon:"https://img.icons8.com/color/36/000000/redis.png",description:"Redis - In-memory data structure store"},{name:"Prisma",icon:"https://img.icons8.com/color/36/000000/prisma-orm.png",description:"Prisma - Next-generation ORM for Node.js and TypeScript"},{name:"TypeORM",icon:"https://cdn.simpleicons.org/typeorm",description:"TypeORM - Object-relational mapping for TypeScript and JavaScript"}]},{name:"Cloud & DevOps",icon:"☁️",iconBg:"bg-orange-500/20",textColor:"text-orange-400",borderColor:"border-orange-500/30",hoverBorderColor:"hover:border-orange-400/50",gradient:"from-orange-500 to-orange-600",proficiency:4,skills:[{name:"AWS",icon:"/aws.svg",description:"AWS - Leading cloud computing platform"},{name:"Docker",icon:"https://cdn.simpleicons.org/docker",description:"Docker - Platform for developing, shipping, and running applications"},{name:"Lambda",icon:"/aws-lambda.svg",description:"AWS Lambda - Serverless compute service"},{name:"S3",icon:"/s3.svg",description:"Amazon S3 - Scalable storage in the cloud"},{name:"ECS",icon:"/ec2.svg",description:"Amazon ECS - Orchestration service for containers"},{name:"Vercel",icon:"https://cdn.simpleicons.org/vercel/white",description:"Vercel - Platform for frontend and backend development"}]},{name:"Tools & Others",icon:"🛠️",iconBg:"bg-indigo-500/20",textColor:"text-indigo-400",borderColor:"border-indigo-500/30",hoverBorderColor:"hover:border-indigo-400/50",gradient:"from-indigo-500 to-indigo-600",proficiency:5,skills:[{name:"Git",icon:"https://img.icons8.com/color/36/000000/git.png",description:"Git - Distributed version control system"},{name:"GitHub",icon:"https://img.icons8.com/ios-glyphs/36/FFFFFF/github.png",description:"GitHub - Web-based hosting service for version control"},{name:"Playwright",icon:"/playwright.svg",description:"Playwright - Reliable end-to-end testing for modern web apps"},{name:"Jest",icon:"https://cdn.simpleicons.org/jest",description:"Jest - Delightful JavaScript Testing Framework"},{name:"GraphQL",icon:"https://cdn.simpleicons.org/graphql",description:"GraphQL - Query language for APIs"},{name:"BullMQ",icon:"https://img.icons8.com/color/36/000000/bull.png",description:"BullMQ - Premium Queue package for Node.js"}]}];function C(){m.reduce((e,i)=>e+i.skills.length,0);const r=`
    <div class="flex flex-wrap justify-center gap-6 mb-12">
      <div class="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-white/10">
        <div class="text-3xl font-bold text-white mb-1 flex justify-center">30+</div>
        <div class="text-sm text-gray-400">Total Technologies</div>
      </div>
      <div class="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-white/10">
        <div class="text-3xl font-bold text-white mb-1 flex justify-center">${m.length}</div>
        <div class="text-sm text-gray-400">Skill Categories</div>
      </div>
      <div class="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-white/10">
        <div class="text-3xl font-bold text-white mb-1 flex justify-center">5+</div>
        <div class="text-sm text-gray-400">Years Experience</div>
      </div>
    </div>
  `,a=m.map(e=>{const i=e.proficiency/5*100;return`
      <div class="skill-category group">
        <div class="relative">
          <div class="absolute -inset-1 bg-gradient-to-r ${e.gradient} rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
          <div class="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border ${e.borderColor} ${e.hoverBorderColor} transition-all duration-300">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 ${e.iconBg} rounded-xl flex items-center justify-center category-icon">
                  <span class="text-2xl">${e.icon}</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-white group-hover:${e.textColor} transition-colors">${e.name}</h3>
                  <div class="text-sm text-gray-400">${e.skills.length} technologies</div>
                </div>
              </div>
            </div>

            <div class="mb-4">
              <div class="flex justify-between text-xs mb-1">
                <span class="${e.textColor}">Proficiency</span>
                <span class="text-gray-400">${e.proficiency}/5</span>
              </div>
              <div class="proficiency-bar">
                <div class="proficiency-fill bg-gradient-to-r ${e.gradient}" style="width: ${i}%"></div>
              </div>
            </div>

            <div class="skill-scroll flex flex-wrap gap-2 max-h-32 overflow-y-auto pr-2">
              ${e.skills.map(t=>`
                <div class="skill-badge flex items-center gap-2 bg-gray-800/50 rounded-lg px-3 py-1.5 border border-gray-700/50" title="${t.description}">
                  <img src="${t.icon}" alt="${t.name}" class="w-4 h-4" />
                  <span class="text-sm text-gray-300">${t.name}</span>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
    `}).join("");return`
    <!-- Skills Section -->
    <section id="skills" class="relative section-bg-pattern section-padding overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div class="container mx-auto px-4 sm:px-8 md:px-10 lg:px-16 relative z-10">
        <h2 class="text-4xl md:text-5xl font-bold mb-8 text-center">
          <span class="bg-gradient-to-r from-blue-600 via-indigo-400 to-purple-600 bg-clip-text text-transparent">Skills & Technologies</span>
        </h2>
        <div class="max-w-3xl mx-auto text-center mb-12">
          <p class="text-xl text-gray-300 mb-6">
            I've developed expertise in a wide range of technologies, allowing me to build complete, scalable solutions from front-end to back-end.
          </p>
          <div class="flex flex-wrap justify-center gap-4 mb-8">
            <div class="px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-lg border border-blue-500/30">
              <span class="text-blue-300 font-medium">Frontend Development</span>
            </div>
            <div class="px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-lg border border-purple-500/30">
              <span class="text-purple-300 font-medium">Backend Development</span>
            </div>
            <div class="px-4 py-2 bg-cyan-500/20 backdrop-blur-sm rounded-lg border border-cyan-500/30">
              <span class="text-cyan-300 font-medium">DevOps & Cloud</span>
            </div>
          </div>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-10"></div>
        </div>

        <!-- Skills Container -->
        <div id="skills-container" class="skills-container">
          ${r}
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${a}
          </div>
        </div>
      </div>
    </section>
  `}const f=[{id:1,dateRange:"August 2025 - Current",title:"Software Engineering Lead",company:"Techjays",companyLink:"https://techjays.com/",workType:"Remote",employmentType:"Full-time",description:"A leading AI and automation company based in Menlo Park, CA, specializing in custom software, data analytics, and cloud solutions for global businesses.",achievements:[`Engineered "JaysBot," a real-time voice assistant utilizing Azure OpenAI's Live Voice API and custom-indexed knowledge base, enabling low-latency, context-aware vocal interactions through direct voice-to-voice processing`,"Implemented multiple clustering algorithms (K-Means, DBSCAN, HDBSCAN, BIRCH) in C++ for large-scale seismic data analysis, evaluating performance trade-offs across algorithmic approaches","Developed hybrid clustering algorithms combining K-Means with DBSCAN and HDBSCAN to leverage density-based detection of arbitrary-shaped clusters while maintaining computational efficiency","Achieved 4x runtime reduction through GPU parallelization (CUDA) and multi-threading optimization of the clustering pipeline on large seismic datasets","Implemented elbow method for automated determination of optimal cluster count, eliminating manual parameter tuning and improving result reproducibility","Developed AI agent using Gemini-2.5-flash to automate leave management system, deployed across the team"],techStack:["Python","C++","Azure Live Voice API","Unsupervised Learning","LangChain","Gemini"],colors:{primary:"cyan",secondary:"purple",gradient:"from-cyan-400 via-blue-400 to-purple-400",dotGradient:"from-cyan-400 to-purple-500",badgeGradient:"from-cyan-500 to-purple-500",borderColor:"border-cyan-500/20",hoverBorderColor:"hover:border-cyan-400/40",shadowColor:"hover:shadow-cyan-500/20",workTypeBg:"bg-cyan-400/10",workTypeText:"text-cyan-400",workTypeBorder:"border-cyan-400/20",employmentTypeBg:"bg-purple-400/10",employmentTypeText:"text-purple-400",employmentTypeBorder:"border-purple-400/20"},position:"left"},{id:2,dateRange:"March 2024 - August 2025",title:"Software Engineer II",company:"Green Pants Studio",companyLink:"https://www.greenpantsstudio.com/",workType:"Remote",employmentType:"Full-time",description:"A technology consulting agency providing engineering talent to external clients.",achievements:["Engineered and launched a scalable livestream platform handling 10K+ concurrent viewers, resulting in a 40% increase in seller engagement","Led as Product Manager and engineer integrating Freightquote API, automating U.S. truckload logistics; reduced manual effort by 70%, errors by 50%, and improved real-time shipment tracking","Implemented CI/CD pipelines to streamline deployments, reducing errors by 60% and accelerating release cycles.","Built a CSV-based bulk product upload system that streamlined catalog onboarding, saving sellers 90% of time compared to manual entry","Developed a custom CRM to enable sellers to easily invite buyers into groups, enhancing engagement by 30%.","Defined and implemented integration tests to ensure API integrity and maintain the reliability of the system."],techStack:["TypeScript","Python","Next.js","NestJS","AWS","PostgreSQL","Microservices"],colors:{primary:"emerald",secondary:"cyan",gradient:"from-emerald-400 via-cyan-400 to-blue-400",dotGradient:"from-emerald-400 to-cyan-500",badgeGradient:"from-emerald-500 to-cyan-500",borderColor:"border-emerald-500/20",hoverBorderColor:"hover:border-emerald-400/40",shadowColor:"hover:shadow-emerald-500/20",workTypeBg:"bg-emerald-400/10",workTypeText:"text-emerald-400",workTypeBorder:"border-emerald-400/20",employmentTypeBg:"bg-cyan-400/10",employmentTypeText:"text-cyan-400",employmentTypeBorder:"border-cyan-400/20"},position:"right"},{id:3,dateRange:"November 2022 - March 2024",title:"Founding Software Engineer",company:"Sendout",companyLink:"https://sendout.ai/",workType:"Remote",employmentType:"Full-time",description:"Led core engineering initiatives in automation and security, significantly improving system efficiency and resilience.",achievements:["Reverse-engineered LinkedIn's private Voyager API for automation, cutting manual effort and costs by 80%.","Implemented a workflow sequence builder using React Flow to orchestrate outreach campaigns.","Built identity-spoofing mechanisms to raise account security from 20% to 80%.","Built LinkedIn data scrapers for automated collection from searches, groups, events and messages.","Developed customizable workflow sequence builder to automate outreach events."],techStack:["TypeScript","Kafka","FastAPI","NestJS","MongoDB","Playwright"],colors:{primary:"blue",secondary:"purple",gradient:"from-blue-400 via-purple-400 to-pink-400",dotGradient:"from-blue-400 to-purple-500",badgeGradient:"from-blue-500 to-purple-500",borderColor:"border-blue-500/20",hoverBorderColor:"hover:border-blue-400/40",shadowColor:"hover:shadow-blue-500/20",workTypeBg:"bg-blue-400/10",workTypeText:"text-blue-400",workTypeBorder:"border-blue-400/20",employmentTypeBg:"bg-purple-400/10",employmentTypeText:"text-purple-400",employmentTypeBorder:"border-purple-400/20"},position:"left"},{id:4,dateRange:"July 2022 - October 2022",title:"Back End Engineer",company:"Azimuth",companyLink:"https://azimuth.fm/",workType:"Remote",employmentType:"Contract",description:"Enhanced system performance and optimized backend processes for radio song filtering and dashboard operations.",achievements:["Migrated Python scripts to JavaScript, enhancing the overall development ecosystem","Developed edge functions with Deno to efficiently filter songs played on the radio","Reduced memory consumption in microcontrollers and optimized dashboard processing time from 140s to 5s"],techStack:["JavaScript","Deno","Python","Serverless"],colors:{primary:"purple",secondary:"pink",gradient:"from-purple-400 via-pink-400 to-red-400",dotGradient:"from-purple-400 to-pink-500",badgeGradient:"from-purple-500 to-pink-500",borderColor:"border-purple-500/20",hoverBorderColor:"hover:border-purple-400/40",shadowColor:"hover:shadow-purple-500/20",workTypeBg:"bg-purple-400/10",workTypeText:"text-purple-400",workTypeBorder:"border-purple-400/20",employmentTypeBg:"bg-pink-400/10",employmentTypeText:"text-pink-400",employmentTypeBorder:"border-pink-400/20"},position:"right"},{id:5,dateRange:"November 2021 - May 2022",title:"Software Engineer",company:"Recruit",companyLink:"https://recruit.so/",workType:"On-site",employmentType:"Full-time",description:"Contributed to multiple YC startups including Osmind (YC S20) and Replo (YC S21), focusing on code quality and UI development.",achievements:["At Osmind (YC S20): wrote unit and E2E tests to achieve 80%+ coverage, boosting reliability and confidence in deployments","Migrated core codebase from JavaScript to TypeScript, improving maintainability and reducing production issues by 40%","At Replo (YC S21): created and refactored reusable UI components shared across the team"],techStack:["React.js","TypeScript","Jest","Node.js","Prisma","Docker","Tailwind"],colors:{primary:"pink",secondary:"red",gradient:"from-pink-400 via-red-400 to-orange-400",dotGradient:"from-pink-400 to-red-500",badgeGradient:"from-pink-500 to-red-500",borderColor:"border-pink-500/20",hoverBorderColor:"hover:border-pink-400/40",shadowColor:"hover:shadow-pink-500/20",workTypeBg:"bg-pink-400/10",workTypeText:"text-pink-400",workTypeBorder:"border-pink-400/20",employmentTypeBg:"bg-orange-400/10",employmentTypeText:"text-orange-300",employmentTypeBorder:"border-orange-400/20"},position:"left"}],$={bg:"#ede9fe",text:"#5b21b6"},B={bg:"#fef3c7",text:"#92400e"},M={bg:"#fce7f3",text:"#9d174d"},A={bg:"#ffedd5",text:"#9a3412"},j={bg:"#dbeafe",text:"#1e40af"},E={bg:"#ffedd5",text:"#9a3412"},I={bg:"#ede9fe",text:"#5b21b6"},L={bg:"#ccfbf1",text:"#115e59"},D={bg:"#dcfce7",text:"#166534"},H={bg:"#dcfce7",text:"#166534"},P={bg:"#f3f4f6",text:"#1f2937"},G={bg:"#fef3c7",text:"#92400e"},R={bg:"#ffedd5",text:"#9a3412"},F={bg:"#fee2e2",text:"#991b1b"},N={bg:"#e0e7ff",text:"#3730a3"},J={bg:"#dbeafe",text:"#1e40af"},U={bg:"#cffafe",text:"#155e75"},z={bg:"#dcfce7",text:"#166534"},V={bg:"#ccfbf1",text:"#115e59"},K={bg:"#fae8ff",text:"#86198f"},W={bg:"#dbeafe",text:"#1e40af"},O={TypeScript:$,Python:B,"Next.js":{bg:"#dbeafe",text:"#1e40af"},NestJS:M,AWS:A,PostgreSQL:j,Microservices:E,Kafka:I,FastAPI:L,MongoDB:D,Playwright:H,Deno:P,JavaScript:G,Serverless:R,"React.js":{bg:"#cffafe",text:"#155e75"},Jest:F,"Node.js":{bg:"#dcfce7",text:"#166534"},Prisma:N,Docker:J,Tailwind:U,"C++":{bg:"#dbeafe",text:"#1e40af"},CUDA:z,LangChain:V,"Azure OpenAI":{bg:"#e0f2fe",text:"#075985"},"Azure Live Voice API":{bg:"#e0f2fe",text:"#075985"},"K-Means":{bg:"#ede9fe",text:"#5b21b6"},LLM:K,"Unsupervised Learning":{bg:"#ede9fe",text:"#5b21b6"},Gemini:W},v=["from-emerald-400 to-cyan-400","from-cyan-400 to-blue-400","from-blue-400 to-purple-400","from-purple-400 to-pink-400","from-pink-400 to-red-400","from-red-400 to-orange-400"];function Q(r,a){const e=r.position==="left",i=e?"md:flex-row":"md:flex-row-reverse",t=e?"md:mr-8":"md:ml-8",o=a===f.length-1,l=r.achievements.map((s,p)=>`
    <div class="flex items-baseline group/item">
      <div class="w-2 h-2 bg-gradient-to-r ${v[p%v.length]} rounded-full mr-3 group-hover/item:scale-150 transition-transform duration-300"></div>
      <span class="text-gray-300 group-hover/item:text-white transition-colors duration-300 text-xs md:text-base">${s}</span>
    </div>
  `).join(""),n=r.techStack.map(s=>{const p=O[s]||{bg:"#f3f4f6",text:"#1f2937"};return`<span class="px-3 py-1 rounded-full text-sm font-medium" style="background-color: ${p.bg}; color: ${p.text};">${s}</span>`}).join("");return`
    <div class="${o?"":"mb-6"} ${o?"":"relative"} flex flex-col ${i} items-center">
      <!-- Timeline Dot -->
      <div class="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r ${r.colors.dotGradient} rounded-full border-4 border-gray-900 shadow-lg z-10 hidden md:block"></div>

      <!-- Content Card -->
      <div class="w-full md:w-5/12 ml-0 ${t} group">
        <div class="relative bg-gradient-to-br from-gray-800/90 to-slate-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl ${r.colors.borderColor} ${r.colors.hoverBorderColor} transition-all duration-500 transform hover:-translate-y-2 ${r.colors.shadowColor}">
          <!-- Glow Effect -->
          <div class="absolute -inset-1 bg-gradient-to-r ${r.colors.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-1000"></div>

          <div class="relative">
            <!-- Date Badge -->
            <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r ${r.colors.badgeGradient} text-white rounded-full text-sm font-bold mb-4 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              ${r.dateRange}
            </div>

            <h3 class="text-2xl font-bold mb-2 bg-gradient-to-r from-${r.colors.primary}-400 via-${r.colors.primary}-300 to-${r.colors.secondary}-400 bg-clip-text text-transparent">
              ${r.title}
            </h3>

            <div class="flex flex-wrap items-center gap-2 mb-4">
              <a href="${r.companyLink}" target="_blank" rel="noopener noreferrer" class="text-gray-300 font-semibold text-lg hover:text-emerald-300 transition-colors duration-300" title="Visit ${r.company}">
                ${r.company}
              </a>
              <span class="whitespace-nowrap text-xs px-1.5 py-0.5 rounded-full ${r.colors.workTypeBg} ${r.colors.workTypeText} ${r.colors.workTypeBorder} border">${r.workType}</span>
              <span class="whitespace-nowrap text-xs px-1.5 py-0.5 rounded-full ${r.colors.employmentTypeBg} ${r.colors.employmentTypeText} ${r.colors.employmentTypeBorder} border">${r.employmentType}</span>
            </div>

            <p class="text-gray-400 mb-6 leading-relaxed">${r.description}</p>

            <!-- Achievement Pills -->
            <div class="space-y-3">
              ${l}
            </div>

            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-2 mt-6">
              ${n}
            </div>
          </div>
        </div>
      </div>

      <!-- Spacer for desktop -->
      <div class="hidden block w-2/12"></div>
    </div>
  `}function Z(){return`
    <!-- Experience Section -->
    <section id="experience" class="relative section-bg-pattern section-padding overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div class="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <!-- Floating Elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-1/4 left-1/4 w-3 h-3 bg-emerald-400 rounded-full animate-bounce opacity-40"></div>
        <div class="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-40" style="animation-delay: 1s"></div>
        <div class="absolute bottom-1/4 left-1/3 w-4 h-4 bg-cyan-400 rounded-full animate-bounce opacity-40" style="animation-delay: 2s"></div>
        <div class="absolute top-1/2 right-1/3 w-2 h-2 bg-pink-400 rounded-full animate-bounce opacity-40" style="animation-delay: 3s"></div>
      </div>

      <div class="container mx-auto px-4 sm:px-8 md:px-10 lg:px-16 relative z-10">
        <h2 class="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span class="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Work Experience</span>
        </h2>

        <!-- Timeline Container -->
        <div class="relative">
          <!-- Timeline Line -->
          <div class="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 via-cyan-400 to-purple-400 rounded-full hidden md:block"></div>

          <div id="experience-container" class="space-y-16">
            ${f.map((a,e)=>Q(a,e)).join("")}
          </div>
        </div>
      </div>
    </section>
  `}const Y={name:"Shahjalal University of Science and Technology",location:"Sylhet, Bangladesh",degree:"B.Sc. in Computer Science & Engineering",years:"2018 - 2022",cgpa:"3.86/4.00",achievements:["CGPA: 3.86/4.00","Ranked 4th in the graduating cohort, reflecting sustained academic excellence","Deep expertise in software development, algorithms, data structures, and system design, demonstrated through rigorous coursework and hands-on projects"]},_={title:"BlockURS: A Blockchain-based Unified Reputation System",type:"Bachelor of Science Thesis",date:"February 2023",supervisor:{name:"Dr. Farida Chowdhury",title:"Professor, Dept. of CSE, BRAC University"},collaborator:"Kiriti Mukherjee",description:"Designed and developed a novel blockchain-based reputation system that unifies reputation scores across multiple domains into a single, trustworthy metric. The system addresses critical limitations in traditional reputation systems including centralization, data tampering, and lack of cross-platform portability.",contributions:[{title:"System Architecture",description:"Permissioned blockchain with smart contracts, middleware infrastructure, and provisioning scheme for secure data communication"},{title:"Reputation Algorithms",description:"Financial & E-commerce domain engines with unified score aggregation using logarithmic scaling and sigmoid functions"},{title:"Security & Privacy",description:"STRIDE threat modeling, cryptographic protocols, HTTPS communications, and user-controlled privacy settings"}],technologies:["Blockchain","Smart Contracts","Cryptography","Distributed Systems","Protocol Design"]},q=[{icon:"💻",name:"Advanced Algorithms",description:"Data structures & algorithmic complexity",color:"blue"},{icon:"🔐",name:"System Security",description:"Cryptography & network security",color:"purple"},{icon:"🤖",name:"AI & ML",description:"Machine learning fundamentals",color:"pink"},{icon:"🌐",name:"Web Systems",description:"Modern web architectures",color:"blue"}],X={university:Y,thesis:_,courses:q},ee=[{id:1,name:"Boibitan",icon:"📚",description:"Modern e-commerce platform for books with secure payments, wishlist management, and seller dashboards.",features:["Secure payment integration","Seller dashboard & analytics","Wishlist & review system"],tags:["E-commerce","Web API","Vercel"],github:"https://github.com/magic-kiri/Boibitaan-Web-API-Project",live:"https://boibitaan-web-api-project.vercel.app/",color:"pink"},{id:2,name:"OEMS",icon:"📝",description:"Next.js-based online exam management system with auto-grading, real-time monitoring, and analytics.",features:["Secure authentication system","Real-time exam monitoring","Analytics dashboard"],tags:["Next.js","TypeScript","Real-time"],github:"https://github.com/magic-kiri/OEMS",live:null,color:"purple"},{id:3,name:"GeoCal",icon:"📐",description:"JavaFx web application for interactive 2D geometry with precise calculations and RESTful APIs.",features:["Interactive 2D shape manipulation","Precise geometric calculations","Export and sharing capabilities"],tags:["JavaFx","REST API","Geometry"],github:"https://github.com/magic-kiri/MyGeoCal/",live:null,color:"blue"}];function te(r){const a={pink:{bg:"from-gray-800/50 via-gray-800/30 to-pink-950/20",border:"hover:border-pink-500/30",text:"text-pink-300",hoverText:"group-hover:text-pink-200",dot:"bg-pink-400",tag:"bg-pink-500/10 text-pink-300",borderT:"border-pink-500/20",link:"text-pink-400 hover:text-pink-300"},purple:{bg:"from-gray-800/50 via-gray-800/30 to-purple-950/20",border:"hover:border-purple-500/30",text:"text-purple-300",hoverText:"group-hover:text-purple-200",dot:"bg-purple-400",tag:"bg-purple-500/10 text-purple-300",borderT:"border-purple-500/20",link:"text-purple-400 hover:text-purple-300"},blue:{bg:"from-gray-800/50 via-gray-800/30 to-blue-950/20",border:"hover:border-blue-500/30",text:"text-blue-300",hoverText:"group-hover:text-blue-200",dot:"bg-blue-400",tag:"bg-blue-500/10 text-blue-300",borderT:"border-blue-500/20",link:"text-blue-400 hover:text-blue-300"}},e=a[r.color]||a.blue,i=`
    <a href="${r.github}" target="_blank" class="${e.link} transition-colors" title="View ${r.name} on GitHub">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.239 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    </a>
    ${r.live?`
    <a href="${r.live}" target="_blank" class="${e.link} transition-colors" title="Visit ${r.name}">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
      </svg>
    </a>
    `:""}
  `;return`
    <div class="group bg-gradient-to-br ${e.bg} rounded-xl p-6 border border-gray-700/50 ${e.border} transition-all duration-300">
      <div class="flex items-center justify-between mb-4">
        <div class="text-3xl group-hover:scale-110 transition-transform duration-300">${r.icon}</div>
        <div class="flex gap-2">${i}</div>
      </div>
      <h5 class="font-medium ${e.text} mb-2 ${e.hoverText} transition-colors">${r.name}</h5>
      <p class="text-sm text-gray-400 mb-4">${r.description}</p>
      <div class="space-y-3 mb-4">
        ${r.features.map(t=>`
          <div class="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
            <div class="w-1.5 h-1.5 ${e.dot} rounded-full"></div>
            <span>${t}</span>
          </div>
        `).join("")}
      </div>
      <div class="flex flex-wrap gap-2 pt-3 border-t ${e.borderT}">
        ${r.tags.map(t=>`<span class="px-2 py-1 ${e.tag} rounded-md text-xs">${t}</span>`).join("")}
      </div>
    </div>
  `}function re(){const{university:r,courses:a,thesis:e}=X,i=a.map(o=>`
      <div class="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 ${o.color==="blue"?"hover:border-blue-500/30 text-blue-300":o.color==="purple"?"hover:border-purple-500/30 text-purple-300":"hover:border-pink-500/30 text-pink-300"} transition-all duration-300 group/course">
        <div class="text-2xl mb-2">${o.icon}</div>
        <h5 class="font-medium mb-1">${o.name}</h5>
        <p class="text-sm text-gray-400">${o.description}</p>
      </div>
    `).join(""),t=ee.map(o=>te(o)).join("");return`
    <!-- Education Section -->
    <section id="education" class="relative section-bg-pattern section-padding overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div class="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div class="container mx-auto px-4 sm:px-8 md:px-10 lg:px-16 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            <span class="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 bg-clip-text text-transparent">Academic Journey</span>
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Equipped with a strong foundation in Computer Science and Engineering, combining theoretical knowledge with practical applications.
          </p>
        </div>

        <!-- Main Education Card -->
        <div class="mx-auto">
          <div class="group relative">
            <!-- Glow Effect -->
            <div class="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div class="relative bg-gradient-to-br from-gray-800/90 to-slate-800/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500">

              <!-- University Header -->
              <div class="flex flex-col md:flex-row items-center gap-8 mb-12">
                <div class="relative">
                  <div class="w-32 h-32 relative">
                    <div class="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl animate-pulse"></div>
                    <div class="absolute inset-1 bg-gray-900 rounded-2xl flex items-center justify-center">
                      <span class="text-5xl">🎓</span>
                    </div>
                  </div>
                </div>
                <div class="text-center md:text-left">
                  <h3 class="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    ${r.name}
                  </h3>
                  <p class="text-xl text-gray-300 mb-4">${r.location}</p>
                  <div class="flex flex-wrap gap-4 justify-center md:justify-start">
                    <div class="px-4 py-2 bg-blue-500/20 rounded-xl border border-blue-500/30">
                      <span class="text-blue-300 font-medium">${r.years}</span>
                    </div>
                    <div class="px-4 py-2 bg-purple-500/20 rounded-xl border border-purple-500/30">
                      <span class="text-purple-300 font-medium">CGPA: ${r.cgpa}</span>
                    </div>
                    <div class="px-4 py-2 bg-pink-500/20 rounded-xl border border-pink-500/30">
                      <span class="text-pink-300 font-medium">BSc in CS</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Content Grid -->
              <div class="grid md:grid-cols-2 gap-8">
                <!-- Academic Achievements -->
                <div class="space-y-6">
                  <h4 class="text-xl font-semibold text-blue-400 mb-4">Academic Achievements</h4>
                  <div class="space-y-6">
                    <div class="bg-gray-800/30 rounded-xl p-6 border border-blue-500/20 hover:border-blue-400/30 transition-all duration-300">
                      <div class="flex items-center gap-3 mb-4">
                        <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <span class="text-2xl">🎓</span>
                        </div>
                        <div>
                          <h5 class="font-semibold text-blue-300">${r.degree}</h5>
                          <p class="text-sm text-gray-400">Graduated with distinction</p>
                        </div>
                      </div>
                      <div class="space-y-4">
                        ${r.achievements.map((o,l)=>{const n=["from-blue-400 to-purple-400","from-purple-400 to-pink-400","from-pink-400 to-blue-400"];return`
                            <div class="flex items-start group/item">
                              <div class="w-2 h-2 mt-2 bg-gradient-to-r ${n[l%n.length]} rounded-full mr-3 group-hover/item:scale-150 transition-transform duration-300"></div>
                              <span class="text-gray-300 group-hover/item:text-white transition-colors duration-300">${o}</span>
                            </div>
                          `}).join("")}
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Key Courses -->
                <div class="space-y-6">
                  <h4 class="text-xl font-semibold text-purple-400 mb-4">Specialized Courses</h4>
                  <div class="grid grid-cols-2 gap-4">
                    ${i}
                  </div>
                </div>
              </div>

              <!-- Undergraduate Thesis -->
              <div class="mt-12">
                <h4 class="text-xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                  Undergraduate Thesis
                </h4>

                <div class="group bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-cyan-950/20 rounded-xl p-6 md:p-8 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300">

                    <!-- Header with icon and title -->
                    <div class="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                      <div class="flex-shrink-0">
                        <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                          <span class="text-3xl">⛓️</span>
                        </div>
                      </div>
                      <div class="flex-1">
                        <h5 class="text-xl md:text-2xl font-bold text-cyan-300 mb-2">${e.title}</h5>
                        <div class="flex flex-wrap gap-3 text-sm">
                          <span class="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-lg border border-cyan-500/30">${e.type}</span>
                          <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg border border-blue-500/30">${e.date}</span>
                        </div>
                      </div>
                    </div>

                    <!-- Description -->
                    <p class="text-gray-300 mb-6 leading-relaxed">${e.description}</p>

                    <!-- Supervisor & Collaborator -->
                    <div class="flex flex-wrap gap-x-6 gap-y-2 mb-6 text-sm">
                      <div class="flex items-center gap-2">
                        <span class="text-gray-400">Supervisor:</span>
                        <span class="text-purple-300 font-medium">${e.supervisor.name}</span>
                        <span class="text-gray-500">(${e.supervisor.title})</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <span class="text-gray-400">Co-author:</span>
                        <span class="text-blue-300 font-medium">${e.collaborator}</span>
                      </div>
                    </div>

                    <!-- Key Contributions Grid -->
                    <div class="grid md:grid-cols-3 gap-4 mb-6">
                      ${e.contributions.map((o,l)=>{const n=[{bg:"from-cyan-500/10 to-cyan-500/5",border:"border-cyan-500/20",text:"text-cyan-300",dot:"bg-cyan-400"},{bg:"from-blue-500/10 to-blue-500/5",border:"border-blue-500/20",text:"text-blue-300",dot:"bg-blue-400"},{bg:"from-purple-500/10 to-purple-500/5",border:"border-purple-500/20",text:"text-purple-300",dot:"bg-purple-400"}],s=n[l%n.length];return`
                          <div class="bg-gradient-to-br ${s.bg} rounded-xl p-4 border ${s.border}">
                            <div class="flex items-center gap-2 mb-2">
                              <div class="w-2 h-2 ${s.dot} rounded-full"></div>
                              <h6 class="font-semibold ${s.text}">${o.title}</h6>
                            </div>
                            <p class="text-sm text-gray-400">${o.description}</p>
                          </div>
                        `}).join("")}
                    </div>

                    <!-- Technology Tags -->
                    <div class="flex flex-wrap gap-2 pt-4 border-t border-cyan-500/20">
                      ${e.technologies.map(o=>`
                        <span class="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-300 rounded-lg text-sm border border-cyan-500/20">${o}</span>
                      `).join("")}
                    </div>
                  </div>
              </div>

              <!-- Research & Projects -->
              <div class="mt-12">
                <h4 class="text-xl font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                  Notable Projects
                </h4>
                <div class="grid md:grid-cols-3 gap-6">
                  ${t}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}const oe=[{id:1,name:"Professional Cloud Architect",issuer:"Google Cloud",issueDate:"October 2025",description:"Professional Cloud Architects enable organizations to leverage Google Cloud technologies. With a thorough understanding of cloud architecture and Google Cloud, they design, develop, and manage robust, secure, scalable, highly available, and dynamic solutions to drive business objectives.",level:"Advanced",skills:["Cloud Architecture","Google Cloud Platform","Cloud Security","Networking","Scalability","Databases","GKE","IAM"],credentialUrl:"https://www.credly.com/badges/8ce7a003-86f6-4d38-b58d-6f5c6b31b159/public_url",badgeImage:"https://images.credly.com/size/680x680/images/71c579e0-51fd-4247-b493-d2fa8167157a/image.png"}],ae={certifications:oe};function ie(){const{certifications:r}=ae;return`
    <!-- Certifications Section -->
    <section id="certifications" class="relative section-bg-pattern section-padding overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div class="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400 to-green-500 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div class="container mx-auto px-4 sm:px-8 md:px-10 lg:px-16 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            <span class="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional credentials validating expertise in cloud technologies and architecture.
          </p>
        </div>

        <!-- Certifications Card -->
        <div class="mx-auto">
          <div class="group relative">
            <!-- Glow Effect -->
            <div class="absolute -inset-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div class="relative bg-gradient-to-br from-gray-800/90 to-slate-800/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500">
              ${r.map(e=>{const i=e.skills.map(t=>`<span class="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-lg text-sm border border-blue-500/20">${t}</span>`).join("");return`
        <div class="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <!-- Badge Image -->
          <div class="flex-shrink-0 flex justify-center md:justify-start">
            <div class="relative">
              <div class="w-40 h-40 md:w-48 md:h-48 overflow-hidden bg-transparent">
                <img
                  src="${e.badgeImage}"
                  alt="${e.name} Badge"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

            <!-- Details -->
            <div class="flex-1">
              <!-- Header -->
              <div class="mb-4">
                <h3 class="text-xl md:text-2xl font-bold text-blue-300 mb-2 group-hover:text-blue-200 transition-colors">
                  ${e.name}
                </h3>
                <div class="flex flex-wrap gap-3 text-sm">
                  <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg border border-blue-500/30">
                    ${e.issuer}
                  </span>
                  <span class="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-lg border border-cyan-500/30">
                    ${e.issueDate}
                  </span>
                  <span class="px-3 py-1 bg-green-500/20 text-green-300 rounded-lg border border-green-500/30">
                    ${e.level}
                  </span>
                </div>
              </div>

              <!-- Description -->
              <p class="text-gray-300 mb-6 leading-relaxed">${e.description}</p>

              <!-- Skills -->
              <div class="mb-6">
                <h4 class="text-sm font-medium text-gray-400 mb-3">Skills Validated</h4>
                <div class="flex flex-wrap gap-2">
                  ${i}
                </div>
              </div>

              <!-- Verify Button -->
              <a
                href="${e.credentialUrl}"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 group/btn"
              >
                <span>Verify Credential</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>
        </div>
      `}).join("")}
            </div>
          </div>
        </div>
      </div>
    </section>
  `}const ne={github:"https://github.com/magic-kiri",linkedin:"https://linkedin.com/in/magic-kiri",upwork:"https://www.upwork.com/freelancers/~01c7a18d6a5053d4b3"},le={email:"kimuapon@gmail.com",phone:"+8801556542573",location:"Dhaka, Bangladesh"},c={social:ne,contact:le};function se(){return`
    <!-- Contact Section -->
    <section id="contact" class="relative section-bg-pattern section-padding overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-1/4 right-0 w-48 h-48 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full filter blur-2xl animate-pulse"></div>
        <div class="absolute bottom-1/4 left-0 w-48 h-48 bg-gradient-to-r from-rose-400 to-red-500 rounded-full filter blur-2xl animate-pulse animation-delay-2000"></div>
      </div>

      <div class="container mx-auto px-4 sm:px-8 md:px-10 lg:px-16 relative z-10">
        <h2 class="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Get In Touch</span>
        </h2>

        <div class="flex flex-col md:flex-row gap-10">
          <div class="md:w-1/2">
            <div class="bg-white/5 dark:bg-gray-800/5 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/10 dark:border-gray-700/30">
              <!-- Toast Notification -->
              <div id="toast-notification" class="fixed top-2 right-8 transform translate-x-full opacity-0 transition-all duration-300 bg-gray-900/95 text-white px-6 py-3 rounded-xl border border-blue-500/30 backdrop-blur-sm shadow-xl z-50">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <p>This feature is under development</p>
                </div>
              </div>

              <form id="contact-form" class="space-y-6">
                <div>
                  <label for="email" class="block mb-2 font-semibold text-gray-200 dark:text-gray-300">Email</label>
                  <input type="email" id="email" class="w-full px-4 py-3 bg-white/5 dark:bg-gray-800/5 border border-white/10 dark:border-gray-700/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/40 text-white backdrop-blur-xl" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label for="message" class="block mb-2 font-semibold text-gray-200 dark:text-gray-300">Message</label>
                  <textarea id="message" rows="6" class="w-full px-4 py-3 bg-white/5 dark:bg-gray-800/5 border border-white/10 dark:border-gray-700/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/40 text-white backdrop-blur-xl resize-none" placeholder="Your message..."></textarea>
                </div>
                <button type="submit" class="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-default hover:cursor-pointer">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div class="md:w-1/2">
            <div class="bg-white/5 dark:bg-gray-800/5 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/10 dark:border-gray-700/30">
              <h3 class="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Contact Information
              </h3>

              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-4">
                    <a href="mailto:${c.contact.email}" target="_blank" title="Email me">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </a>
                  </div>
                  <div>
                    <h4 class="text-lg font-medium text-white">Email</h4>
                    <a href="mailto:${c.contact.email}" class="text-gray-300 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" target="_blank" title="Email me">
                      ${c.contact.email}
                    </a>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-4">
                    <a href="tel:${c.contact.phone}" target="_blank" title="Call me on phone">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </a>
                  </div>
                  <div>
                    <h4 class="text-lg font-medium text-white">Phone</h4>
                    <a href="tel:${c.contact.phone}" class="text-gray-300 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" title="Call me on phone">
                      +880 (1556) 542-573
                    </a>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-medium text-white">Location</h4>
                    <p class="text-gray-300 dark:text-gray-200">${c.contact.location}</p>
                  </div>
                </div>
              </div>

              <div class="mt-8">
                <h4 class="font-semibold mb-4 text-lg text-gray-200 dark:text-gray-200">Connect with me</h4>
                <div class="flex space-x-4">
                  <a href="${c.social.github}" target="_blank" class="p-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110" title="Follow me on GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.239 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="${c.social.linkedin}" target="_blank" class="p-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110" title="Connect with me on LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                    </svg>
                  </a>
                  <a href="${c.social.upwork}" target="_blank" class="p-3 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-xl hover:from-green-500 hover:to-emerald-600 transition-all duration-300 transform hover:scale-110" title="Hire me on Upwork">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function de(){const r=document.getElementById("contact-form");function a(){const e=document.getElementById("toast-notification");e&&(e.classList.remove("translate-x-full","opacity-0"),e.classList.add("translate-x-0","opacity-100"),setTimeout(()=>{e.classList.remove("translate-x-0","opacity-100"),e.classList.add("translate-x-full","opacity-0")},2e3))}r?.addEventListener("submit",e=>{e.preventDefault(),a()})}function ce(){return`
    <!-- Footer -->
    <footer class="relative section-bg-pattern py-12 overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div class="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div class="container mx-auto px-4 sm:px-8 md:px-10 lg:px-16 relative z-10">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-6 md:mb-0 text-center md:text-left">
            <h3 class="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              KIRITI MUKHERJEE
            </h3>
            <p class="text-gray-300">Full Stack Engineer</p>
            <p class="text-gray-400 text-sm mt-2">Building the future, one line of code at a time</p>
          </div>
          <div class="text-center md:text-right">
            <p class="text-gray-400 mb-2">&copy; ${new Date().getFullYear()} Kiriti Mukherjee. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  `}function pe(){const r=document.getElementById("app");r.innerHTML=`
    ${x()}
    ${y()}
    <div class="section-separator"></div>
    ${k()}
    <div class="section-separator"></div>
    ${S()}
    <div class="section-separator"></div>
    ${C()}
    <div class="section-separator"></div>
    ${Z()}
    <div class="section-separator"></div>
    ${re()}
    <div class="section-separator"></div>
    ${ie()}
    <div class="section-separator"></div>
    ${se()}
    <div class="section-separator-full"></div>
    ${ce()}
  `}function ue(){h(),w(),T(),de()}document.addEventListener("DOMContentLoaded",()=>{pe(),ue()});
