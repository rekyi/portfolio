import { SocialLink, SocialLinkVariant } from './social-link.model';

const EMAIL_LINK: SocialLink = {
  labelKey: 'social.email',
  url: 'mailto:mail@rekyi.de',
  isExternal: false,
  icons: {
    hero: {
      default: '/icons/desktop_email_hero_1.svg',
      hover: '/icons/desktop_email_hero_2.svg',
    },
    footer: {
      default: '/icons/mobile_footer_mail_1.svg',
      hover: '/icons/mobile_footer_mail_2.svg',
    },
  },
};

const GITHUB_LINK: SocialLink = {
  labelKey: 'social.github',
  url: 'https://github.com/rekyi',
  isExternal: true,
  icons: {
    hero: {
      default: '/icons/desktop_github_hero_1.svg',
      hover: '/icons/desktop_github_hero_2.svg',
    },
    footer: {
      default: '/icons/mobile_footer_github_1.svg',
      hover: '/icons/mobile_footer_github_2.svg',
    },
  },
};

const LINKEDIN_LINK: SocialLink = {
  labelKey: 'social.linkedin',
  url: 'https://www.linkedin.com',
  isExternal: true,
  icons: {
    hero: {
      default: '/icons/desktop_linkedin_hero_1.svg',
      hover: '/icons/desktop_linkedin_hero_2.svg',
    },
    footer: {
      default: '/icons/mobile_footer_linkedin_1.svg',
      hover: '/icons/mobile_footer_linkedin_2.svg',
    },
  },
};

/** Social links per placement, in display order. */
export const SOCIAL_LINKS: Record<SocialLinkVariant, SocialLink[]> = {
  hero: [EMAIL_LINK, GITHUB_LINK, LINKEDIN_LINK],
  footer: [GITHUB_LINK, EMAIL_LINK, LINKEDIN_LINK],
};
