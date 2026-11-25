import { ViewportScroller } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter, TitleStrategy, withInMemoryScrolling } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { routes } from './app.routes';
import { LanguageService } from './core/services/language';
import { TranslatedTitleStrategy } from './core/services/title-strategy';

/** Space in px kept above a section when scrolling to its anchor. */
const NAV_SCROLL_OFFSET = 40;

/**
 * App-wide providers: HTTP, translations from `/i18n/`, router with anchor scrolling,
 * translated page titles and language setup before the first render.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideTranslateService({
      loader: provideTranslateHttpLoader({ prefix: '/i18n/', suffix: '.json' }),
    }),
    provideRouter(
      routes,
      withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
    ),
    { provide: TitleStrategy, useClass: TranslatedTitleStrategy },
    provideAppInitializer(() => inject(ViewportScroller).setOffset([0, NAV_SCROLL_OFFSET])),
    provideAppInitializer(() => inject(LanguageService).init()),
  ],
};
