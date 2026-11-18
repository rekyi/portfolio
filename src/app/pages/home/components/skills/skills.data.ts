import { Skill } from '../../../../shared/models/skill.model';

export const SKILLS: Skill[] = [
  { name: 'Angular', icon: { src: '/icons/desktop_angular.svg', width: 57, height: 60 } },
  { name: 'TypeScript', icon: { src: '/icons/desktop_ts.svg', width: 60, height: 60 } },
  { name: 'JavaScript', icon: { src: '/icons/desktop_js.svg', width: 60, height: 60 } },
  { name: 'HTML', icon: { src: '/icons/desktop_html.svg', width: 54, height: 60 } },
  { name: 'CSS', icon: { src: '/icons/desktop_css.svg', width: 54, height: 60 } },
  { name: 'REST-API', icon: { src: '/icons/desktop_api.svg', width: 56, height: 60 } },
  { name: 'Supabase', icon: { src: '/icons/desktop_supabase.svg', width: 59, height: 60 } },
  { name: 'Git', icon: { src: '/icons/desktop_git.svg', width: 60, height: 60 } },
];

export const LEARNING_SKILLS: Skill[] = [
  { name: 'Cat', icon: { src: '/images/learning_skill_placeholder_1.gif', width: 64, height: 64 } },
  {
    name: 'Another Cat',
    icon: { src: '/images/learning_skill_placeholder_2.gif', width: 128, height: 128 },
  },
];
