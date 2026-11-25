import { AboutStatement } from '../../../../shared/models/about-statement.model';

/** Statements cycled by the typewriter animation in the about section. */
export const ABOUT_STATEMENTS: AboutStatement[] = [
  {
    id: 'location',
    icon: '/icons/about_location.svg',
    iconWidth: 34,
    iconHeight: 41,
    textKey: 'about.statements.location',
  },
  {
    id: 'remote',
    icon: '/icons/about_remote.svg',
    iconWidth: 38,
    iconHeight: 26,
    textKey: 'about.statements.remote',
  },
  {
    id: 'relocate',
    icon: '/icons/about_relocate.svg',
    iconWidth: 32,
    iconHeight: 53,
    textKey: 'about.statements.relocate',
  },
];
