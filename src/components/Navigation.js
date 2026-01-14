export function renderNavigation() {
  return `
    <!-- Navigation -->
    <nav class="fixed md:top-0 left-0 right-0 z-50 md:z-50 bg-gray-900/95 dark:bg-black/95 backdrop-blur-lg shadow-lg border-b border-purple-900">
      <div class="container mx-auto py-4 flex justify-between items-center">
        <a href="#" class="text-2xl font-bold bg-gradient-to-r from-white to-white bg-clip-text text-transparent relative z-50 hover:scale-105 transition-transform duration-300" title="KIRITI MUKHERJEE - Full Stack Engineer">KIRITI MUKHERJEE</a>
        <div class="flex items-center">
          <!-- Mobile menu button -->
          <button id="mobile-menu-button" class="md:hidden text-white p-2" aria-label="Toggle menu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <div class="hidden md:flex items-center space-x-8">
            <a href="#" class="text-white hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:bg-clip-text transition-all duration-300 hover:-translate-y-0.5 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 hover:after:w-full after:transition-all after:duration-300" title="Home">Home</a>
            <a href="#about" class="text-white hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:bg-clip-text transition-all duration-300 hover:-translate-y-0.5 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-pink-500 after:to-orange-500 hover:after:w-full after:transition-all after:duration-300" title="Learn more about me">About</a>
            <a href="#skills" class="text-white hover:text-transparent hover:bg-gradient-to-r hover:from-amber-500 hover:to-red-500 hover:bg-clip-text transition-all duration-300 hover:-translate-y-0.5 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-amber-500 after:to-red-500 hover:after:w-full after:transition-all after:duration-300" title="View my technical skills and expertise">Skills</a>
            <a href="#experience" class="text-white hover:text-transparent hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 hover:bg-clip-text transition-all duration-300 hover:-translate-y-0.5 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-green-500 after:to-blue-500 hover:after:w-full after:transition-all after:duration-300" title="Check out my professional experience">Experience</a>
            <a href="#education" class="text-white hover:text-transparent hover:bg-gradient-to-r hover:from-teal-500 hover:to-emerald-500 hover:bg-clip-text transition-all duration-300 hover:-translate-y-0.5 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-teal-500 after:to-emerald-500 hover:after:w-full after:transition-all after:duration-300" title="View my educational background">Education</a>
            <a href="#contact" class="text-white hover:text-transparent hover:bg-gradient-to-r hover:from-rose-500 hover:to-yellow-500 hover:bg-clip-text transition-all duration-300 hover:-translate-y-0.5 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-rose-500 after:to-yellow-500 hover:after:w-full after:transition-all after:duration-300" title="Get in touch with me">Contact</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile menu drawer -->
    <div id="mobile-menu" class="fixed inset-y-0 right-0 w-64 bg-gray-900/95 dark:bg-black/95 backdrop-blur-lg transform translate-x-full transition-transform duration-300 ease-in-out z-50 md:hidden">
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
        <a href="#contact" class="text-white hover:text-rose-500 transition-colors duration-300">Contact</a>
      </div>
    </div>
  `;
}

export function initMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const closeMenuButton = document.getElementById('close-menu-button');
  const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');

  function toggleMenu() {
    mobileMenu.classList.toggle('translate-x-full');
  }

  mobileMenuButton?.addEventListener('click', toggleMenu);
  closeMenuButton?.addEventListener('click', toggleMenu);

  mobileMenuLinks.forEach((link) => {
    link.addEventListener('click', toggleMenu);
  });

  document.addEventListener('click', (e) => {
    if (
      !mobileMenu.contains(e.target) &&
      !mobileMenuButton.contains(e.target) &&
      !mobileMenu.classList.contains('translate-x-full')
    ) {
      toggleMenu();
    }
  });
}
