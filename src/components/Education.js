import educationData from "../data/education.json";
import projectsData from "../data/projects.json";

function renderProject(project) {
  const colorMap = {
    pink: {
      bg: "from-gray-800/50 via-gray-800/30 to-pink-950/20",
      border: "hover:border-pink-500/30",
      text: "text-pink-300",
      hoverText: "group-hover:text-pink-200",
      dot: "bg-pink-400",
      tag: "bg-pink-500/10 text-pink-300",
      borderT: "border-pink-500/20",
      link: "text-pink-400 hover:text-pink-300",
    },
    purple: {
      bg: "from-gray-800/50 via-gray-800/30 to-purple-950/20",
      border: "hover:border-purple-500/30",
      text: "text-purple-300",
      hoverText: "group-hover:text-purple-200",
      dot: "bg-purple-400",
      tag: "bg-purple-500/10 text-purple-300",
      borderT: "border-purple-500/20",
      link: "text-purple-400 hover:text-purple-300",
    },
    blue: {
      bg: "from-gray-800/50 via-gray-800/30 to-blue-950/20",
      border: "hover:border-blue-500/30",
      text: "text-blue-300",
      hoverText: "group-hover:text-blue-200",
      dot: "bg-blue-400",
      tag: "bg-blue-500/10 text-blue-300",
      borderT: "border-blue-500/20",
      link: "text-blue-400 hover:text-blue-300",
    },
  };

  const colors = colorMap[project.color] || colorMap.blue;

  const linksHTML = `
    <a href="${project.github}" target="_blank" class="${
    colors.link
  } transition-colors" title="View ${project.name} on GitHub">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.239 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    </a>
    ${
      project.live
        ? `
    <a href="${project.live}" target="_blank" class="${colors.link} transition-colors" title="Visit ${project.name}">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
      </svg>
    </a>
    `
        : ""
    }
  `;

  return `
    <div class="group bg-gradient-to-br ${
      colors.bg
    } rounded-xl p-6 border border-gray-700/50 ${
    colors.border
  } transition-all duration-300">
      <div class="flex items-center justify-between mb-4">
        <div class="text-3xl group-hover:scale-110 transition-transform duration-300">${
          project.icon
        }</div>
        <div class="flex gap-2">${linksHTML}</div>
      </div>
      <h5 class="font-medium ${colors.text} mb-2 ${
    colors.hoverText
  } transition-colors">${project.name}</h5>
      <p class="text-sm text-gray-400 mb-4">${project.description}</p>
      <div class="space-y-3 mb-4">
        ${project.features
          .map(
            (feature) => `
          <div class="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
            <div class="w-1.5 h-1.5 ${colors.dot} rounded-full"></div>
            <span>${feature}</span>
          </div>
        `
          )
          .join("")}
      </div>
      <div class="flex flex-wrap gap-2 pt-3 border-t ${colors.borderT}">
        ${project.tags
          .map(
            (tag) =>
              `<span class="px-2 py-1 ${colors.tag} rounded-md text-xs">${tag}</span>`
          )
          .join("")}
      </div>
    </div>
  `;
}

export function renderEducation() {
  const { university, courses, thesis } = educationData;

  const coursesHTML = courses
    .map((course) => {
      const colorClass =
        course.color === "blue"
          ? "hover:border-blue-500/30 text-blue-300"
          : course.color === "purple"
          ? "hover:border-purple-500/30 text-purple-300"
          : "hover:border-pink-500/30 text-pink-300";

      return `
      <div class="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 ${colorClass} transition-all duration-300 group/course">
        <div class="text-2xl mb-2">${course.icon}</div>
        <h5 class="font-medium mb-1">${course.name}</h5>
        <p class="text-sm text-gray-400">${course.description}</p>
      </div>
    `;
    })
    .join("");

  const projectsHTML = projectsData
    .map((project) => renderProject(project))
    .join("");

  return `
    <!-- Education Section -->
    <section id="education" class="relative section-bg-pattern section-padding overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div class="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div class="container mx-auto px-4 sm:px-8 md:px-10 lg:px-16 relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            <span class="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 bg-clip-text text-transparent">Academic Journey</span>
          </h2>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Equipped with a strong foundation in Computer Science and Engineering, combining theoretical knowledge with practical applications.
          </p>
        </div>

        <!-- Main Education Card -->
        <div class="mx-auto">
          <div class="group relative">
            <!-- Glow Effect -->
            <div class="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div class="relative bg-gradient-to-br from-gray-800/90 to-slate-800/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500">

              <!-- University Header -->
              <div class="flex flex-col md:flex-row items-center gap-8 mb-12">
                <div class="relative">
                  <div class="w-32 h-32 relative">
                    <div class="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl animate-pulse"></div>
                    <div class="absolute inset-1 bg-gray-900 rounded-2xl flex items-center justify-center">
                      <span class="text-5xl">🎓</span>
                    </div>
                  </div>
                </div>
                <div class="text-center md:text-left">
                  <h3 class="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    ${university.name}
                  </h3>
                  <p class="text-xl text-gray-300 mb-4">${
                    university.location
                  }</p>
                  <div class="flex flex-wrap gap-4 justify-center md:justify-start">
                    <div class="px-4 py-2 bg-blue-500/20 rounded-xl border border-blue-500/30">
                      <span class="text-blue-300 font-medium">${
                        university.years
                      }</span>
                    </div>
                    <div class="px-4 py-2 bg-purple-500/20 rounded-xl border border-purple-500/30">
                      <span class="text-purple-300 font-medium">CGPA: ${
                        university.cgpa
                      }</span>
                    </div>
                    <div class="px-4 py-2 bg-pink-500/20 rounded-xl border border-pink-500/30">
                      <span class="text-pink-300 font-medium">BSc in CS</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Content Grid -->
              <div class="grid md:grid-cols-2 gap-8">
                <!-- Academic Achievements -->
                <div class="space-y-6">
                  <h4 class="text-xl font-semibold text-blue-400 mb-4">Academic Achievements</h4>
                  <div class="space-y-6">
                    <div class="bg-gray-800/30 rounded-xl p-6 border border-blue-500/20 hover:border-blue-400/30 transition-all duration-300">
                      <div class="flex items-center gap-3 mb-4">
                        <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <span class="text-2xl">🎓</span>
                        </div>
                        <div>
                          <h5 class="font-semibold text-blue-300">${
                            university.degree
                          }</h5>
                          <p class="text-sm text-gray-400">Graduated with distinction</p>
                        </div>
                      </div>
                      <div class="space-y-4">
                        ${university.achievements
                          .map((achievement, i) => {
                            const gradients = [
                              "from-blue-400 to-purple-400",
                              "from-purple-400 to-pink-400",
                              "from-pink-400 to-blue-400",
                            ];
                            return `
                            <div class="flex items-start group/item">
                              <div class="w-2 h-2 mt-2 bg-gradient-to-r ${
                                gradients[i % gradients.length]
                              } rounded-full mr-3 group-hover/item:scale-150 transition-transform duration-300"></div>
                              <span class="text-gray-300 group-hover/item:text-white transition-colors duration-300">${achievement}</span>
                            </div>
                          `;
                          })
                          .join("")}
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Key Courses -->
                <div class="space-y-6">
                  <h4 class="text-xl font-semibold text-purple-400 mb-4">Specialized Courses</h4>
                  <div class="grid grid-cols-2 gap-4">
                    ${coursesHTML}
                  </div>
                </div>
              </div>

              <!-- Undergraduate Thesis -->
              <div class="mt-12">
                <h4 class="text-xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                  Undergraduate Thesis
                </h4>

                <div class="group bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-cyan-950/20 rounded-xl p-6 md:p-8 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300">

                    <!-- Header with icon and title -->
                    <div class="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                      <div class="flex-shrink-0">
                        <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                          <span class="text-3xl">⛓️</span>
                        </div>
                      </div>
                      <div class="flex-1">
                        <h5 class="text-xl md:text-2xl font-bold text-cyan-300 mb-2">${
                          thesis.title
                        }</h5>
                        <div class="flex flex-wrap gap-3 text-sm">
                          <span class="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-lg border border-cyan-500/30">${
                            thesis.type
                          }</span>
                          <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg border border-blue-500/30">${
                            thesis.date
                          }</span>
                        </div>
                      </div>
                    </div>

                    <!-- Description -->
                    <p class="text-gray-300 mb-6 leading-relaxed">${
                      thesis.description
                    }</p>

                    <!-- Supervisor & Collaborator -->
                    <div class="flex flex-wrap gap-x-6 gap-y-2 mb-6 text-sm">
                      <div class="flex items-center gap-2">
                        <span class="text-gray-400">Supervisor:</span>
                        <span class="text-purple-300 font-medium">${
                          thesis.supervisor.name
                        }</span>
                        <span class="text-gray-500">(${
                          thesis.supervisor.title
                        })</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <span class="text-gray-400">Co-author:</span>
                        <span class="text-blue-300 font-medium">${
                          thesis.collaborator
                        }</span>
                      </div>
                    </div>

                    <!-- Key Contributions Grid -->
                    <div class="grid md:grid-cols-3 gap-4 mb-6">
                      ${thesis.contributions
                        .map((contribution, index) => {
                          const colors = [
                            {
                              bg: "from-cyan-500/10 to-cyan-500/5",
                              border: "border-cyan-500/20",
                              text: "text-cyan-300",
                              dot: "bg-cyan-400",
                            },
                            {
                              bg: "from-blue-500/10 to-blue-500/5",
                              border: "border-blue-500/20",
                              text: "text-blue-300",
                              dot: "bg-blue-400",
                            },
                            {
                              bg: "from-purple-500/10 to-purple-500/5",
                              border: "border-purple-500/20",
                              text: "text-purple-300",
                              dot: "bg-purple-400",
                            },
                          ];
                          const color = colors[index % colors.length];
                          return `
                          <div class="bg-gradient-to-br ${color.bg} rounded-xl p-4 border ${color.border}">
                            <div class="flex items-center gap-2 mb-2">
                              <div class="w-2 h-2 ${color.dot} rounded-full"></div>
                              <h6 class="font-semibold ${color.text}">${contribution.title}</h6>
                            </div>
                            <p class="text-sm text-gray-400">${contribution.description}</p>
                          </div>
                        `;
                        })
                        .join("")}
                    </div>

                    <!-- Technology Tags -->
                    <div class="flex flex-wrap gap-2 pt-4 border-t border-cyan-500/20">
                      ${thesis.technologies
                        .map(
                          (tech) => `
                        <span class="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-300 rounded-lg text-sm border border-cyan-500/20">${tech}</span>
                      `
                        )
                        .join("")}
                    </div>
                  </div>
              </div>

              <!-- Research & Projects -->
              <div class="mt-12">
                <h4 class="text-xl font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                  Notable Projects
                </h4>
                <div class="grid md:grid-cols-3 gap-6">
                  ${projectsHTML}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
