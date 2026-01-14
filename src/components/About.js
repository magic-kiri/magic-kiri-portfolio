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
  `;
}
