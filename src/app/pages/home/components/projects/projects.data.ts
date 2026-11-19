import { Project } from '../../../../shared/models/project.model';
import { Skill } from '../../../../shared/models/skill.model';

const PLACEHOLDER_TECHNOLOGIES: Skill[] = [
  { name: 'HTML', icon: { src: '/icons/desktop_html.svg', width: 54, height: 60 } },
  { name: 'CSS', icon: { src: '/icons/desktop_css.svg', width: 54, height: 60 } },
  { name: 'JavaScript', icon: { src: '/icons/desktop_js.svg', width: 60, height: 60 } },
];

export const PROJECTS: Project[] = [
  {
    titleKey: 'projects.hollowbloom.title',
    durationKey: 'projects.hollowbloom.duration',
    technologies: PLACEHOLDER_TECHNOLOGIES,
    aboutKey: 'projects.hollowbloom.about',
    workProcessKey: 'projects.hollowbloom.workProcess',
    groupWorkKey: 'projects.hollowbloom.groupWork',
    images: [
      { src: '/images/projects/projects_hollowbloom_1.webp', width: 1200, height: 800 },
      { src: '/images/projects/projects_hollowbloom_2.webp', width: 1200, height: 800 },
      { src: '/images/projects/projects_hollowbloom_3.webp', width: 1200, height: 800 },
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
      { src: '/images/projects/projects_pokedex_1.webp', width: 1200, height: 800 },
      { src: '/images/projects/projects_pokedex_2.webp', width: 1200, height: 800 },
    ],
    liveUrl: 'https://pokedex.rekyi.de',
    githubUrl: 'https://github.com/rekyi/Pokedex',
  },
  {
    titleKey: 'projects.join.title',
    durationKey: 'projects.join.duration',
    technologies: PLACEHOLDER_TECHNOLOGIES,
    aboutKey: 'projects.join.about',
    workProcessKey: 'projects.join.workProcess',
    groupWorkKey: 'projects.join.groupWork',
    images: [{ src: '/images/projects/project_card_placeholder_3.webp', width: 600, height: 400 }],
    liveUrl: 'blub',
    githubUrl: 'blub',
  },
  {
    titleKey: 'projects.ongoing.title',
    technologies: PLACEHOLDER_TECHNOLOGIES,
    isOngoing: true,
    aboutKey: 'projects.ongoing.about',
    images: [{ src: '/images/projects/project_card_placeholder_4.webp', width: 600, height: 400 }],
  },
];
