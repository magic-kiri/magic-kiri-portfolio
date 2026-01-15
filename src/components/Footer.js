export function renderFooter() {
  const currentYear = new Date().getFullYear();

  return `
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
            <p class="text-gray-400 mb-2">&copy; ${currentYear} Kiriti Mukherjee. All rights reserved.</p>
            <p class="text-gray-500 text-sm">Made with love and lots of coffee</p>
          </div>
        </div>
      </div>
    </footer>
  `;
}
