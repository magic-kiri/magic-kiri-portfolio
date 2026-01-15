import meta from '../data/meta.json';

export function renderContact() {
  return `
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
                <button type="submit" class="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
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
                    <a href="mailto:${meta.contact.email}" target="_blank" title="Email me">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </a>
                  </div>
                  <div>
                    <h4 class="text-lg font-medium text-white">Email</h4>
                    <a href="mailto:${meta.contact.email}" class="text-gray-300 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" target="_blank" title="Email me">
                      ${meta.contact.email}
                    </a>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-4">
                    <a href="tel:${meta.contact.phone}" target="_blank" title="Call me on phone">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </a>
                  </div>
                  <div>
                    <h4 class="text-lg font-medium text-white">Phone</h4>
                    <a href="tel:${meta.contact.phone}" class="text-gray-300 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" title="Call me on phone">
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
                    <p class="text-gray-300 dark:text-gray-200">${meta.contact.location}</p>
                  </div>
                </div>
              </div>

              <div class="mt-8">
                <h4 class="font-semibold mb-4 text-lg text-gray-200 dark:text-gray-200">Connect with me</h4>
                <div class="flex space-x-4">
                  <a href="${meta.social.github}" target="_blank" class="p-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110" title="Follow me on GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.239 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="${meta.social.linkedin}" target="_blank" class="p-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110" title="Connect with me on LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                    </svg>
                  </a>
                  <a href="${meta.social.upwork}" target="_blank" class="p-3 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-xl hover:from-green-500 hover:to-emerald-600 transition-all duration-300 transform hover:scale-110" title="Hire me on Upwork">
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
  `;
}

export function initContactForm() {
  const form = document.getElementById('contact-form');

  function showToast() {
    const toast = document.getElementById('toast-notification');
    if (!toast) return;

    toast.classList.remove('translate-x-full', 'opacity-0');
    toast.classList.add('translate-x-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.remove('translate-x-0', 'opacity-100');
      toast.classList.add('translate-x-full', 'opacity-0');
    }, 2000);
  }

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast();
  });
}
