import { SocialLink } from './social-link.model';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    labelKey: 'social.email',
    url: 'mailto:mail@rekyi.de',
    isExternal: false,
    icons: {
      hero: {
        default: '/icons/desktop_email_hero_1.svg',
        hover: '/icons/desktop_email_hero_2.svg',
      },
      footer: {
        default: '/icons/mobile_footer_mail_2.svg',
        hover: '/icons/mobile_footer_mail_1.svg',
      },
    },
  },
  {
    labelKey: 'social.github',
    url: 'https://github.com/rekyi',
    isExternal: true,
    icons: {
      hero: {
        default: '/icons/desktop_github_hero_1.svg',
        hover: '/icons/desktop_github_hero_2.svg',
      },
      footer: {
        default: '/icons/mobile_footer_github_2.svg',
        hover: '/icons/mobile_footer_github_1.svg',
      },
    },
  },
];
