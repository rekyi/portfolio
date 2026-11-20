import { Project } from '../../../../shared/models/project.model';
import { Skill } from '../../../../shared/models/skill.model';
import { TECHNOLOGIES } from '../../../../shared/models/technologies.data';

const PLACEHOLDER_TECHNOLOGIES: Skill[] = [
  TECHNOLOGIES.html,
  TECHNOLOGIES.css,
  TECHNOLOGIES.javascript,
];

export const PROJECTS: Project[] = [
  {
    titleKey: 'projects.hollowbloom.title',
    durationKey: 'projects.hollowbloom.duration',
    technologies: PLACEHOLDER_TECHNOLOGIES,
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
    technologies: PLACEHOLDER_TECHNOLOGIES,
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
    technologies: PLACEHOLDER_TECHNOLOGIES,
    aboutKey: 'projects.join.about',
    workProcessKey: 'projects.join.workProcess',
    groupWorkKey: 'projects.join.groupWork',
    images: ['/images/projects/project_card_placeholder_3.webp'],
    liveUrl: 'blub',
    githubUrl: 'blub',
  },
  {
    titleKey: 'projects.ongoing.title',
    technologies: PLACEHOLDER_TECHNOLOGIES,
    isOngoing: true,
    aboutKey: 'projects.ongoing.about',
    images: ['/images/projects/project_card_placeholder_4.webp'],
  },
];
