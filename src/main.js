import './styles/main.css';

import { renderNavigation, initMobileMenu } from './components/Navigation.js';
import { renderHero, initTypingEffect } from './components/Hero.js';
import { renderAbout } from './components/About.js';
import { renderTimezone, initTimezoneClocks } from './components/Timezone.js';
import { renderSkills } from './components/Skills.js';
import { renderExperience } from './components/Experience.js';
import { renderEducation } from './components/Education.js';
import { renderContact, initContactForm } from './components/Contact.js';
import { renderFooter } from './components/Footer.js';

// Render the app
function renderApp() {
  const app = document.getElementById('app');

  app.innerHTML = `
    ${renderNavigation()}
    ${renderHero()}
    <div class="section-separator"></div>
    ${renderAbout()}
    ${renderTimezone()}
    <div class="section-separator"></div>
    ${renderSkills()}
    <div class="section-separator"></div>
    ${renderExperience()}
    <div class="section-separator"></div>
    ${renderEducation()}
    <div class="section-separator"></div>
    ${renderContact()}
    <div class="section-separator-full"></div>
    ${renderFooter()}
  `;
}

// Initialize interactive features after DOM is rendered
function initInteractiveFeatures() {
  initMobileMenu();
  initTypingEffect();
  initTimezoneClocks();
  initContactForm();
}

// Bootstrap the app
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
  initInteractiveFeatures();
});
