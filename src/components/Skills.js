import skillsData from "../data/skills.json";

export function renderSkills() {
  const totalSkills = skillsData.reduce(
    (total, category) => total + category.skills.length,
    0
  );

  const statsHTML = `
    <div class="flex flex-wrap justify-center gap-6 mb-12">
      <div class="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-white/10">
        <div class="text-3xl font-bold text-white mb-1 flex justify-center">30+</div>
        <div class="text-sm text-gray-400">Total Technologies</div>
      </div>
      <div class="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-white/10">
        <div class="text-3xl font-bold text-white mb-1 flex justify-center">${skillsData.length}</div>
        <div class="text-sm text-gray-400">Skill Categories</div>
      </div>
      <div class="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-white/10">
        <div class="text-3xl font-bold text-white mb-1 flex justify-center">5+</div>
        <div class="text-sm text-gray-400">Years Experience</div>
      </div>
    </div>
  `;

  const categoriesHTML = skillsData
    .map((category) => {
      const proficiencyWidth = (category.proficiency / 5) * 100;

      return `
      <div class="skill-category group">
        <div class="relative">
          <div class="absolute -inset-1 bg-gradient-to-r ${
            category.gradient
          } rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
          <div class="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border ${
            category.borderColor
          } ${category.hoverBorderColor} transition-all duration-300">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 ${
                  category.iconBg
                } rounded-xl flex items-center justify-center category-icon">
                  <span class="text-2xl">${category.icon}</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-white group-hover:${
                    category.textColor
                  } transition-colors">${category.name}</h3>
                  <div class="text-sm text-gray-400">${
                    category.skills.length
                  } technologies</div>
                </div>
              </div>
            </div>

            <div class="mb-4">
              <div class="flex justify-between text-xs mb-1">
                <span class="${category.textColor}">Proficiency</span>
                <span class="text-gray-400">${category.proficiency}/5</span>
              </div>
              <div class="proficiency-bar">
                <div class="proficiency-fill bg-gradient-to-r ${
                  category.gradient
                }" style="width: ${proficiencyWidth}%"></div>
              </div>
            </div>

            <div class="skill-scroll flex flex-wrap gap-2 max-h-32 overflow-y-auto pr-2">
              ${category.skills
                .map(
                  (skill) => `
                <div class="skill-badge flex items-center gap-2 bg-gray-800/50 rounded-lg px-3 py-1.5 border border-gray-700/50" title="${skill.description}">
                  <img src="${skill.icon}" alt="${skill.name}" class="w-4 h-4" />
                  <span class="text-sm text-gray-300">${skill.name}</span>
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        </div>
      </div>
    `;
    })
    .join("");

  return `
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
          ${statsHTML}
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${categoriesHTML}
          </div>
        </div>
      </div>
    </section>
  `;
}
