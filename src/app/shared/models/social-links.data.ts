import { SocialLink } from './social-link.model';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Email',
    url: 'mailto:blub@example.com',
    isExternal: false,
    icons: {
      hero: {
        default: '/icons/desktop_email_hero_1.svg',
        hover: '/icons/desktop_email_hero_2.svg',
      },
      footer: {
        default: '/icons/mobile_email_1.svg',
        hover: '/icons/mobile_email_2.svg',
      },
    },
  },
  {
    label: 'GitHub',
    url: 'https://github.com/rekyi',
    isExternal: true,
    icons: {
      hero: {
        default: '/icons/desktop_github_hero_1.svg',
        hover: '/icons/desktop_github_hero_2.svg',
      },
      footer: {
        default: '/icons/mobile_github_1.svg',
        hover: '/icons/mobile_github_2.svg',
      },
    },
  },
];
