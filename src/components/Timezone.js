export function renderTimezone() {
  return `
    <!-- Timezone Section -->
    <section class="relative section-bg-pattern py-16 overflow-hidden">
      <div class="container mx-auto relative z-10">
        <h3 class="text-2xl md:text-3xl font-bold mb-8 text-center">
          <span class="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Global Availability</span>
        </h3>
        <p class="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
          I work with clients across different time zones. Here's my availability in major regions.
        </p>

        <!-- Clock Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <!-- London -->
          <div class="group relative">
            <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <div class="relative bg-gradient-to-br from-gray-800/90 to-slate-800/90 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 text-center">
              <div class="text-4xl mb-4">🇬🇧</div>
              <div id="london-time" class="text-4xl font-mono text-cyan-300 mb-2">--:--</div>
              <div class="text-gray-400 text-sm">GMT+0 • London</div>
              <div class="text-xs text-gray-500 mt-2">United Kingdom</div>
            </div>
          </div>

          <!-- Dhaka -->
          <div class="group relative">
            <div class="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <div class="relative bg-gradient-to-br from-gray-800/90 to-slate-800/90 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 text-center">
              <div class="text-4xl mb-4">🇧🇩</div>
              <div id="dhaka-time" class="text-4xl font-mono text-emerald-300 mb-2">--:--</div>
              <div class="text-gray-400 text-sm">GMT+6 • Dhaka</div>
              <div class="text-xs text-green-400 mt-2">My Location</div>
            </div>
          </div>

          <!-- New York -->
          <div class="group relative">
            <div class="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <div class="relative bg-gradient-to-br from-gray-800/90 to-slate-800/90 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 text-center">
              <div class="text-4xl mb-4">🇺🇸</div>
              <div id="newyork-time" class="text-4xl font-mono text-purple-300 mb-2">--:--</div>
              <div class="text-gray-400 text-sm">GMT-5 • New York</div>
              <div class="text-xs text-gray-500 mt-2">United States</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initTimezoneClocks() {
  function updateTimes() {
    const now = new Date();

    // Bangladesh time (GMT+6)
    const dhaka = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Dhaka' }));
    const dhakaEl = document.getElementById('dhaka-time');
    if (dhakaEl) {
      dhakaEl.textContent = dhaka.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
      });
    }

    // UK time (GMT+0)
    const london = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/London' }));
    const londonEl = document.getElementById('london-time');
    if (londonEl) {
      londonEl.textContent = london.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
      });
    }

    // USA time (GMT-5)
    const newYork = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
    const nyEl = document.getElementById('newyork-time');
    if (nyEl) {
      nyEl.textContent = newYork.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
      });
    }
  }

  updateTimes();
  setInterval(updateTimes, 1000);
}
