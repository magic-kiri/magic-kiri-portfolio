export function renderTimezone() {
  const timezones = [
    {
      key: "uk",
      comment: "UK Time Zone",
      glowGradient: "from-blue-500 to-cyan-500",
      border: "border-blue-500/30 hover:border-blue-400/50",
      clockBorder: "border-blue-400",
      clockFaceGradient: "from-blue-500/20 to-cyan-500/20",
      hourHandTop: "top-1/2",
      hourHand: "bg-blue-400",
      minuteHand: "bg-cyan-400",
      minuteHandTop: "top-1/2",
      minuteHandDelay: "2s",
      centerDot: "bg-blue-500",
      flagSrc: "https://flagcdn.com/gb.svg",
      flagAlt: "UK",
      flagTitle: "United Kingdom",
      country: "United Kingdom",
      countryHover: "group-hover:text-blue-400",
      timeId: "london-time",
      timeText: "text-blue-400",
      locationLabel: "GMT+0 • London",
      badge: "bg-blue-500/20 text-blue-300",
      badgeText: "Business Hours: 9AM-6PM",
    },
    {
      key: "bd",
      comment: "Bangladesh Time Zone",
      glowGradient: "from-purple-500 to-indigo-500",
      border: "border-purple-500/30 hover:border-purple-400/50",
      clockBorder: "border-purple-400",
      clockFaceGradient: "from-purple-500/20 to-indigo-500/20",
      hourHandTop: "top-1/2",
      hourHand: "bg-purple-400",
      hourHandDelay: "1s",
      minuteHand: "bg-indigo-400",
      minuteHandTop: "top-1/2",
      minuteHandDelay: "3s",
      centerDot: "bg-purple-500",
      flagSrc: "https://flagcdn.com/bd.svg",
      flagAlt: "Bangladesh",
      flagTitle: "Bangladesh - GMT+6 Time Zone",
      country: "Bangladesh",
      countryHover: "group-hover:text-purple-400",
      timeId: "dhaka-time",
      timeText: "text-purple-400",
      locationLabel: "GMT+6 • Dhaka",
      badge: "bg-purple-500/20 text-purple-300",
      badgeText: "🏠 Home Base",
    },
    {
      key: "us",
      comment: "USA Time Zone",
      glowGradient: "from-cyan-500 to-blue-500",
      border: "border-cyan-500/30 hover:border-cyan-400/50",
      clockBorder: "border-cyan-400",
      clockFaceGradient: "from-cyan-500/20 to-blue-500/20",
      hourHandTop: "top-1/2",
      hourHand: "bg-cyan-400",
      hourHandDelay: "2s",
      minuteHand: "bg-blue-400",
      minuteHandTop: "top-1/2",
      minuteHandDelay: "4s",
      centerDot: "bg-cyan-500",
      flagSrc: "https://flagcdn.com/us.svg",
      flagAlt: "USA",
      flagTitle: "United States - GMT-5 Time Zone",
      country: "United States",
      countryHover: "group-hover:text-cyan-400",
      timeId: "newyork-time",
      timeText: "text-cyan-400",
      locationLabel: "GMT-5 • New York",
      badge: "bg-cyan-500/20 text-cyan-300",
      badgeText: "Business Hours: 9AM-6PM",
    },
  ];

  const communicationMethods = [
    {
      key: "slack",
      wrapperHoverBorder: "hover:border-blue-400/50",
      iconSrc: "/slack.svg",
      iconAlt: "Slack",
      iconTitle: "Slack/Teams - Real-time communication platform",
      label: "Slack/Teams",
      labelHover: "group-hover:text-blue-400",
      subtitle: "Real-time chat",
    },
    {
      key: "video",
      wrapperHoverBorder: "hover:border-purple-400/50",
      iconSrc: "/google-meet.svg",
      iconAlt: "Google Meet",
      iconTitle: "Google Meet - Video conferencing platform",
      label: "Video Calls",
      labelHover: "group-hover:text-purple-400",
      subtitle: "Zoom/Meet",
    },
    {
      key: "email",
      wrapperHoverBorder: "hover:border-cyan-400/50",
      iconSrc: "/gmail.svg",
      iconAlt: "Gmail",
      iconTitle: "Gmail - Email communication",
      label: "Email",
      labelHover: "group-hover:text-cyan-400",
      subtitle: "Async updates",
    },
    {
      key: "tools",
      wrapperHoverBorder: "hover:border-green-400/50",
      iconSrc: "/jira.svg",
      iconAlt: "Jira",
      iconTitle: "Jira - Project management and issue tracking",
      label: "Project Tools",
      labelHover: "group-hover:text-green-400",
      subtitle: "Jira/Trello",
    },
  ];

  const renderTimezoneCard = (tz) => `
              <!-- ${tz.comment} -->
              <div class="group relative">
                <div
                  class="absolute -inset-1 bg-gradient-to-r ${
                    tz.glowGradient
                  } rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"
                ></div>
                <div
                  class="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border ${
                    tz.border
                  } transition-all duration-300 transform hover:-translate-y-2"
                >
                  <!-- Clock Animation -->
                  <div class="flex justify-center mb-4">
                    <div
                      class="relative w-16 h-16 border-2 ${
                        tz.clockBorder
                      } rounded-full"
                    >
                      <div
                        class="absolute inset-2 bg-gradient-to-br ${
                          tz.clockFaceGradient
                        } rounded-full"
                      ></div>
                      <div
                        class="absolute ${tz.hourHandTop} left-1/2 w-1 h-6 ${
    tz.hourHand
  } transform -translate-x-1/2 -translate-y-full origin-bottom animate-clock-tick"
                        ${
                          tz.hourHandDelay
                            ? `style="animation-delay: ${tz.hourHandDelay}"`
                            : ""
                        }
                      ></div>
                      <div
                        class="absolute ${
                          tz.minuteHandTop
                        } left-1/2 w-0.5 h-4 ${
    tz.minuteHand
  } transform -translate-x-1/2 -translate-y-full origin-bottom animate-clock-tick"
                        style="animation-delay: ${tz.minuteHandDelay}"
                      ></div>
                      <div
                        class="absolute top-1/2 left-1/2 w-2 h-2 ${
                          tz.centerDot
                        } rounded-full transform -translate-x-1/2 -translate-y-1/2"
                      ></div>
                    </div>
                  </div>

                  <div class="flex items-center justify-center gap-3 mb-3">
                    <img
                      src="${tz.flagSrc}"
                      alt="${tz.flagAlt}"
                      class="w-8 h-6 rounded shadow-lg"
                      title="${tz.flagTitle}"
                    />
                    <span
                      class="text-white font-bold text-lg ${
                        tz.countryHover
                      } transition-colors"
                      >${tz.country}</span
                    >
                  </div>

                  <div class="text-center">
                    <div
                      class="text-2xl font-mono font-bold ${tz.timeText} mb-1"
                      id="${tz.timeId}"
                    >
                      --:--
                    </div>
                    <div class="text-gray-400 text-sm">${tz.locationLabel}</div>
                    <div
                      class="mt-3 px-3 py-1 ${
                        tz.badge
                      } rounded-full text-xs font-medium"
                    >
                      ${tz.badgeText}
                    </div>
                  </div>
                </div>
              </div>
`;

  const renderCommunicationMethod = (m) => `
              <div
                class="group bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-white/10 ${m.wrapperHoverBorder} transition-all duration-300 transform hover:-translate-y-1"
              >
                <div class="flex items-center gap-3">
                  <div
                    class="w-10 h-10 bg-gradient-to-r rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  >
                    <img
                      src="${m.iconSrc}"
                      alt="${m.iconAlt}"
                      class="w-8 h-8 text-white"
                      title="${m.iconTitle}"
                    />
                  </div>
                  <div>
                    <div
                      class="font-semibold text-white ${m.labelHover} transition-colors"
                    >
                      ${m.label}
                    </div>
                    <div class="text-xs text-gray-400">${m.subtitle}</div>
                  </div>
                </div>
              </div>
`;

  return `
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
${timezones.map(renderTimezoneCard).join("")}
            </div>

            <!-- Enhanced Communication Methods -->
            <div
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
            >
${communicationMethods.map(renderCommunicationMethod).join("")}
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
  `;
}

export function initTimezoneClocks() {
  function updateTimes() {
    const now = new Date();

    // Bangladesh time (GMT+6)
    const dhaka = new Date(
      now.toLocaleString("en-US", { timeZone: "Asia/Dhaka" })
    );
    const dhakaEl = document.getElementById("dhaka-time");
    if (dhakaEl) {
      dhakaEl.textContent = dhaka.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      });
    }

    // UK time (GMT+0)
    const london = new Date(
      now.toLocaleString("en-US", { timeZone: "Europe/London" })
    );
    const londonEl = document.getElementById("london-time");
    if (londonEl) {
      londonEl.textContent = london.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      });
    }

    // USA time (GMT-5)
    const newYork = new Date(
      now.toLocaleString("en-US", { timeZone: "America/New_York" })
    );
    const nyEl = document.getElementById("newyork-time");
    if (nyEl) {
      nyEl.textContent = newYork.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      });
    }
  }

  updateTimes();
  setInterval(updateTimes, 1000);
}
