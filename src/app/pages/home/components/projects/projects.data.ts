import { Project } from '../../../../shared/models/project.model';
import { TECHNOLOGIES } from '../../../../shared/models/technologies.data';

/** Projects in tab order. */
export const PROJECTS: Project[] = [
  {
    titleKey: 'projects.hollowbloom.title',
    durationKey: 'projects.hollowbloom.duration',
    technologies: [TECHNOLOGIES.html, TECHNOLOGIES.css, TECHNOLOGIES.javascript],
    aboutKey: 'projects.hollowbloom.about',
    workProcessKey: 'projects.hollowbloom.workProcess',
    learningsKey: 'projects.hollowbloom.learnings',
    images: [
      '/images/projects/projects_hollowbloom_1.webp',
      '/images/projects/projects_hollowbloom_2.webp',
      '/images/projects/projects_hollowbloom_3.webp',
    ],
    liveUrl: 'https://hollowbloom.rekyi.de',
    githubUrl: 'https://github.com/rekyi/hollowbloom',
  },
  {
    titleKey: 'projects.pokedex.title',
    durationKey: 'projects.pokedex.duration',
    technologies: [TECHNOLOGIES.html, TECHNOLOGIES.css, TECHNOLOGIES.javascript],
    aboutKey: 'projects.pokedex.about',
    workProcessKey: 'projects.pokedex.workProcess',
    learningsKey: 'projects.pokedex.learnings',
    images: [
      '/images/projects/projects_pokedex_1.webp',
      '/images/projects/projects_pokedex_2.webp',
    ],
    liveUrl: 'https://pokedex.rekyi.de',
    githubUrl: 'https://github.com/rekyi/pokedex',
  },
  {
    titleKey: 'projects.join.title',
    durationKey: 'projects.join.duration',
    technologies: [TECHNOLOGIES.angular, TECHNOLOGIES.typescript, TECHNOLOGIES.supabase],
    aboutKey: 'projects.join.about',
    workProcessKey: 'projects.join.workProcess',
    groupWorkKey: 'projects.join.groupWork',
    images: ['/images/projects/project_card_placeholder_3.webp'],
    liveUrl: 'https://join.rekyi.de',
    githubUrl: 'blub',
  },
  {
    titleKey: 'projects.ongoing.title',
    technologies: [TECHNOLOGIES.html, TECHNOLOGIES.css, TECHNOLOGIES.javascript],
    isOngoing: true,
    aboutKey: 'projects.ongoing.about',
    images: ['/images/projects/project_card_placeholder_4.webp'],
  },
];
