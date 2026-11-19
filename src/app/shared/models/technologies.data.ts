import { Skill } from './skill.model';

export const TECHNOLOGIES = {
  angular: { name: 'Angular', icon: { src: '/icons/desktop_angular.svg', width: 57, height: 60 } },
  typescript: { name: 'TypeScript', icon: { src: '/icons/desktop_ts.svg', width: 60, height: 60 } },
  javascript: { name: 'JavaScript', icon: { src: '/icons/desktop_js.svg', width: 60, height: 60 } },
  html: { name: 'HTML', icon: { src: '/icons/desktop_html.svg', width: 54, height: 60 } },
  css: { name: 'CSS', icon: { src: '/icons/desktop_css.svg', width: 54, height: 60 } },
  restApi: { name: 'REST-API', icon: { src: '/icons/desktop_api.svg', width: 56, height: 60 } },
  supabase: {
    name: 'Supabase',
    icon: { src: '/icons/desktop_supabase.svg', width: 59, height: 60 },
  },
  git: { name: 'Git', icon: { src: '/icons/desktop_git.svg', width: 60, height: 60 } },
} satisfies Record<string, Skill>;
