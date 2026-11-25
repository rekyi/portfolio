/** Placement of the social links; each has its own icon set and order. */
export type SocialLinkVariant = 'hero' | 'footer';

/** Icon pair for the normal and the hover state. */
export interface SocialLinkIcon {
  /** Icon path in the normal state. */
  default: string;
  /** Icon path on hover. */
  hover: string;
}

/** Icon link to a profile or to email. */
export interface SocialLink {
  /** Translation key of the accessible label. */
  labelKey: string;
  /** Target URL (`https://` or `mailto:`). */
  url: string;
  /** Whether the link opens in a new tab. */
  isExternal: boolean;
  /** Icons per placement. */
  icons: Record<SocialLinkVariant, SocialLinkIcon>;
}
