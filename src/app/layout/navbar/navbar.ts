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

  private readonly url = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  protected readonly languages = LANGUAGES;
  protected readonly currentLang = this.languageService.currentLang;
  protected readonly isHome = computed(() => this.url().split(/[?#]/)[0] === '/');
  protected readonly isMenuOpen = signal(false);

  protected toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  protected setLanguage(lang: LanguageCode): void {
    this.languageService.use(lang);
  }
}
