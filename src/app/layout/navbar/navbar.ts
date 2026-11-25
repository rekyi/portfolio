import { UpperCasePipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { filter, map } from 'rxjs';
import { LanguageService } from '../../core/services/language';
import { Logo } from '../../shared/components/logo/logo';
import { StableText } from '../../shared/components/stable-text/stable-text';
import { LanguageCode } from '../../shared/models/language.model';
import { LANGUAGES } from './navbar.data';

/** Site header with logo, section links, language switch and mobile menu. */
@Component({
  host: { '[class.is-home]': 'isHome()' },
  imports: [RouterLink, TranslatePipe, UpperCasePipe, Logo, StableText],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
  private readonly router = inject(Router);
  private readonly languageService = inject(LanguageService);

  /** Current URL after redirects, updated on every finished navigation. */
  private readonly url = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  /** Options of the language switch. */
  protected readonly languages = LANGUAGES;

  /** Active language, highlights the matching switch option. */
  protected readonly currentLang = this.languageService.currentLang;

  /** Whether the home page is shown (ignores query and fragment); sets the `is-home` class. */
  protected readonly isHome = computed(() => this.url().split(/[?#]/)[0] === '/');

  /** Whether the mobile menu is open. */
  protected readonly isMenuOpen = signal(false);

  /** Opens or closes the mobile menu. */
  protected toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  /** Closes the mobile menu, e.g. after a link was clicked. */
  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  /**
   * Switches the UI language.
   *
   * @param lang - Language to activate.
   */
  protected setLanguage(lang: LanguageCode): void {
    this.languageService.use(lang);
  }
}
