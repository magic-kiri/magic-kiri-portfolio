import certificationsData from "../data/certifications.json";

export function renderCertifications() {
  const { certifications } = certificationsData;

  const certificationsHTML = certifications
    .map((cert) => {
      const skillsHTML = cert.skills
        .map(
          (skill) =>
            `<span class="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-lg text-sm border border-blue-500/20">${skill}</span>`
        )
        .join("");

      return `
        <div class="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <!-- Badge Image -->
          <div class="flex-shrink-0 flex justify-center md:justify-start">
            <div class="relative">
              <div class="w-40 h-40 md:w-48 md:h-48 overflow-hidden bg-transparent">
                <img
                  src="${cert.badgeImage}"
                  alt="${cert.name} Badge"
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
                  ${cert.name}
                </h3>
                <div class="flex flex-wrap gap-3 text-sm">
                  <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg border border-blue-500/30">
                    ${cert.issuer}
                  </span>
                  <span class="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-lg border border-cyan-500/30">
                    ${cert.issueDate}
                  </span>
                  <span class="px-3 py-1 bg-green-500/20 text-green-300 rounded-lg border border-green-500/30">
                    ${cert.level}
                  </span>
                </div>
              </div>

              <!-- Description -->
              <p class="text-gray-300 mb-6 leading-relaxed">${cert.description}</p>

              <!-- Skills -->
              <div class="mb-6">
                <h4 class="text-sm font-medium text-gray-400 mb-3">Skills Validated</h4>
                <div class="flex flex-wrap gap-2">
                  ${skillsHTML}
                </div>
              </div>

              <!-- Verify Button -->
              <a
                href="${cert.credentialUrl}"
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
      `;
    })
    .join("");

  return `
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
              ${certificationsHTML}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
