export type SocialLinkVariant = 'hero' | 'footer';

export interface SocialLinkIcon {
  default: string;
  hover: string;
}

export interface SocialLink {
  labelKey: string;
  url: string;
  isExternal: boolean;
  icons: Record<SocialLinkVariant, SocialLinkIcon>;
}
