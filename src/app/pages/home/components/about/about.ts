import { Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { translate, TranslatePipe } from '@ngx-translate/core';
import { PrimaryButton } from '../../../../shared/components/primary-button/primary-button';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';
import { StableText } from '../../../../shared/components/stable-text/stable-text';
import { ABOUT_STATEMENTS } from './about.data';

/** Delay in ms between two typed letters. */
const TYPE_DELAY = 120;

/** Delay in ms between two deleted letters. */
const DELETE_DELAY = 60;

/** Time in ms a fully typed statement stays visible. */
const HOLD_DELAY = 2000;

/** Delay in ms between showing/hiding the icon and the next step. */
const ICON_DELAY = 300;

/**
 * About section with a typewriter animation that cycles through {@link ABOUT_STATEMENTS}:
 * show icon → type → hold → delete → hide icon → next statement.
 * With `prefers-reduced-motion`, letters change without delay.
 */
@Component({
  imports: [RouterLink, TranslatePipe, PrimaryButton, SectionTitle, StableText],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {
  private readonly statements = ABOUT_STATEMENTS;

  /** Index of the current statement. */
  private readonly activeIndex = signal(0);

  /** Number of visible letters of the current statement. */
  private readonly typedLength = signal(0);

  /** Whether the user prefers reduced motion. */
  private readonly isReducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /** Pending animation step, cleared on destroy. */
  private timeoutId?: ReturnType<typeof setTimeout>;

  /** Whether the icon of the current statement is visible. */
  protected readonly isIconVisible = signal(false);

  /** Statement currently being animated. */
  protected readonly activeStatement = computed(() => this.statements[this.activeIndex()]);

  /** Current statement translated into the active language. */
  private readonly translatedStatement = translate(() => this.activeStatement().textKey);

  /** Current statement as plain string. */
  private readonly statementText = computed(() => String(this.translatedStatement()));

  /** Visible part of the current statement. */
  protected readonly typedText = computed(() =>
    this.statementText().slice(0, this.typedLength()),
  );

  /** Starts the animation and clears the pending step when the component is destroyed. */
  constructor() {
    inject(DestroyRef).onDestroy(() => clearTimeout(this.timeoutId));
    this.showIcon();
  }

  /**
   * Runs the next animation step after a delay.
   *
   * @param step - Step to run.
   * @param delay - Delay in ms.
   */
  private schedule(step: () => void, delay: number): void {
    this.timeoutId = setTimeout(step, delay);
  }

  /**
   * Returns the delay between two letters, respecting reduced motion.
   *
   * @param delay - Regular delay in ms.
   * @returns `0` with reduced motion, otherwise `delay`.
   */
  private getLetterDelay(delay: number): number {
    return this.isReducedMotion ? 0 : delay;
  }

  /** Shows the icon, then starts typing. */
  private showIcon(): void {
    this.isIconVisible.set(true);
    this.schedule(() => this.typeNextLetter(), ICON_DELAY);
  }

  /** Types one letter; once the statement is complete, holds it and then starts deleting. */
  private typeNextLetter(): void {
    if (this.typedLength() >= this.statementText().length) {
      this.schedule(() => this.deleteLastLetter(), HOLD_DELAY);
      return;
    }
    this.typedLength.update((length) => length + 1);
    this.schedule(() => this.typeNextLetter(), this.getLetterDelay(TYPE_DELAY));
  }

  /**
   * Deletes one letter; once empty, hides the icon. Clamps to the text length
   * in case a language switch made the statement shorter.
   */
  private deleteLastLetter(): void {
    if (this.typedLength() <= 0) {
      this.hideIcon();
      return;
    }
    this.typedLength.update((length) => Math.min(length, this.statementText().length) - 1);
    this.schedule(() => this.deleteLastLetter(), this.getLetterDelay(DELETE_DELAY));
  }

  /** Hides the icon, then switches to the next statement. */
  private hideIcon(): void {
    this.isIconVisible.set(false);
    this.schedule(() => this.showNextStatement(), ICON_DELAY);
  }

  /** Advances to the next statement (looping) and restarts the cycle. */
  private showNextStatement(): void {
    this.activeIndex.update((index) => (index + 1) % this.statements.length);
    this.showIcon();
  }
}
