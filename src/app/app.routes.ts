import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { LegalNotice } from './pages/legal-notice/legal-notice';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';

/** App routes; each `title` is a translation key resolved by `TranslatedTitleStrategy`. */
export const routes: Routes = [
  { path: '', component: Home, title: 'pageTitle.home' },
  { path: 'legal-notice', component: LegalNotice, title: 'pageTitle.legalNotice' },
  { path: 'privacy-policy', component: PrivacyPolicy, title: 'pageTitle.privacyPolicy' },
];
