import experienceData from '../data/experiences.json';
import techStackColors from '../data/techStackColors.json';

const achievementGradients = [
  'from-emerald-400 to-cyan-400',
  'from-cyan-400 to-blue-400',
  'from-blue-400 to-purple-400',
  'from-purple-400 to-pink-400',
  'from-pink-400 to-red-400',
  'from-red-400 to-orange-400',
];

function renderExperienceCard(exp, index) {
  const isLeft = exp.position === 'left';
  const flexDirection = isLeft ? 'md:flex-row' : 'md:flex-row-reverse';
  const marginClass = isLeft ? 'md:mr-8' : 'md:ml-8';
  const isLast = index === experienceData.length - 1;

  const achievementsHTML = exp.achievements.map((achievement, i) => `
    <div class="flex items-baseline group/item">
      <div class="w-2 h-2 bg-gradient-to-r ${achievementGradients[i % achievementGradients.length]} rounded-full mr-3 group-hover/item:scale-150 transition-transform duration-300"></div>
      <span class="text-gray-300 group-hover/item:text-white transition-colors duration-300 text-xs md:text-base">${achievement}</span>
    </div>
  `).join('');

  const techStackHTML = exp.techStack.map((tech) => {
    const colors = techStackColors[tech] || { from: 'gray-500', to: 'gray-600', border: 'gray-400', text: 'gray-300' };
    return `<span class="px-3 py-1 bg-gradient-to-r from-${colors.from}/20 to-${colors.to}/20 border border-${colors.border}/30 text-${colors.text} rounded-full text-sm font-medium">${tech}</span>`;
  }).join('');

  return `
    <div class="${isLast ? '' : 'mb-6'} ${isLast ? '' : 'relative'} flex flex-col ${flexDirection} items-center">
      <!-- Timeline Dot -->
      <div class="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r ${exp.colors.dotGradient} rounded-full border-4 border-gray-900 shadow-lg z-10 hidden md:block"></div>

      <!-- Content Card -->
      <div class="w-full md:w-5/12 ml-0 ${marginClass} group">
        <div class="relative bg-gradient-to-br from-gray-800/90 to-slate-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl ${exp.colors.borderColor} ${exp.colors.hoverBorderColor} transition-all duration-500 transform hover:-translate-y-2 ${exp.colors.shadowColor}">
          <!-- Glow Effect -->
          <div class="absolute -inset-1 bg-gradient-to-r ${exp.colors.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-1000"></div>

          <div class="relative">
            <!-- Date Badge -->
            <div class="inline-flex items-center px-4 py-2 bg-gradient-to-r ${exp.colors.badgeGradient} text-white rounded-full text-sm font-bold mb-4 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              ${exp.dateRange}
            </div>

            <h3 class="text-2xl font-bold mb-2 bg-gradient-to-r from-${exp.colors.primary}-400 to-${exp.colors.secondary}-400 bg-clip-text text-transparent">
              ${exp.title}
            </h3>

            <div class="flex flex-wrap items-center gap-2 mb-4">
              <a href="${exp.companyLink}" target="_blank" rel="noopener noreferrer" class="text-gray-300 font-semibold text-lg hover:text-emerald-300 transition-colors duration-300" title="Visit ${exp.company}">
                ${exp.company}
              </a>
              <span class="whitespace-nowrap text-xs px-1.5 py-0.5 rounded-full ${exp.colors.workTypeBg} ${exp.colors.workTypeText} ${exp.colors.workTypeBorder} border">${exp.workType}</span>
              <span class="whitespace-nowrap text-xs px-1.5 py-0.5 rounded-full ${exp.colors.employmentTypeBg} ${exp.colors.employmentTypeText} ${exp.colors.employmentTypeBorder} border">${exp.employmentType}</span>
            </div>

            <p class="text-gray-400 mb-6 leading-relaxed">${exp.description}</p>

            <!-- Achievement Pills -->
            <div class="space-y-3">
              ${achievementsHTML}
            </div>

            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-2 mt-6">
              ${techStackHTML}
            </div>
          </div>
        </div>
      </div>

      <!-- Spacer for desktop -->
      <div class="hidden block w-2/12"></div>
    </div>
  `;
}

export function renderExperience() {
  const experienceHTML = experienceData.map((exp, index) => renderExperienceCard(exp, index)).join('');

  return `
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

      <div class="container mx-auto relative z-10">
        <h2 class="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span class="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Work Experience</span>
        </h2>

        <!-- Timeline Container -->
        <div class="relative">
          <!-- Timeline Line -->
          <div class="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 via-cyan-400 to-purple-400 rounded-full hidden md:block"></div>

          <div id="experience-container" class="space-y-16">
            ${experienceHTML}
          </div>
        </div>
      </div>
    </section>
  `;
}
