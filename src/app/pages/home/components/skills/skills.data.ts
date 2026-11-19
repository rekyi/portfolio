import { Skill } from '../../../../shared/models/skill.model';
import { TECHNOLOGIES } from '../../../../shared/models/technologies.data';

export const SKILLS: Skill[] = [
  TECHNOLOGIES.angular,
  TECHNOLOGIES.typescript,
  TECHNOLOGIES.javascript,
  TECHNOLOGIES.html,
  TECHNOLOGIES.css,
  TECHNOLOGIES.restApi,
  TECHNOLOGIES.supabase,
  TECHNOLOGIES.git,
];

export const LEARNING_SKILLS: Skill[] = [
  { name: 'Cat', icon: { src: '/images/learning_skill_placeholder_1.gif', width: 64, height: 64 } },
  {
    name: 'Another Cat',
    icon: { src: '/images/learning_skill_placeholder_2.gif', width: 128, height: 128 },
  },
];
