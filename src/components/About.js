export function renderAbout() {
  return `
    <!-- About Section -->
    <section id="about" class="relative section-bg-pattern section-padding overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full filter blur-3xl"></div>
        <div class="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full filter blur-3xl"></div>
      </div>

      <div class="container mx-auto relative z-10">
        <h2 class="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">About Me</span>
        </h2>

        <div class="max-w-4xl mx-auto">
          <div class="bg-white/5 dark:bg-gray-800/5 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/10 dark:border-gray-700/30">
            <div class="flex flex-col md:flex-row gap-8 items-center">
              <div class="md:w-1/3">
                <div class="relative">
                  <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30"></div>
                  <div class="relative bg-gray-900 rounded-2xl p-4">
                    <img src="/Photo_me.jpg" alt="Kiriti Mukherjee" class="rounded-xl w-full" />
                  </div>
                </div>
              </div>
              <div class="md:w-2/3 space-y-4">
                <p class="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate <span class="text-blue-400 font-semibold">Full Stack Engineer</span> with 5+ years of experience building scalable web applications and distributed systems.
                </p>
                <p class="text-lg text-gray-300 leading-relaxed">
                  I specialize in <span class="text-purple-400 font-semibold">TypeScript, Python, and cloud technologies</span>, with a strong focus on creating exceptional user experiences backed by robust backend architecture.
                </p>
                <p class="text-lg text-gray-300 leading-relaxed">
                  Currently working remotely from <span class="text-pink-400 font-semibold">Dhaka, Bangladesh</span>, collaborating with teams across different time zones.
                </p>
                <div class="flex flex-wrap gap-3 pt-4">
                  <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Problem Solver</span>
                  <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Team Player</span>
                  <span class="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">Continuous Learner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
