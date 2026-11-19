import { Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { translate, TranslatePipe } from '@ngx-translate/core';
import { PrimaryButton } from '../../../../shared/components/primary-button/primary-button';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';
import { StableText } from '../../../../shared/components/stable-text/stable-text';
import { ABOUT_STATEMENTS } from './about.data';

const TYPE_DELAY = 120;
const DELETE_DELAY = 60;
const HOLD_DELAY = 2000;
const ICON_DELAY = 300;

@Component({
  imports: [RouterLink, TranslatePipe, PrimaryButton, SectionTitle, StableText],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {
  private readonly statements = ABOUT_STATEMENTS;
  private readonly activeIndex = signal(0);
  private readonly typedLength = signal(0);
  private readonly isReducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  private timeoutId?: ReturnType<typeof setTimeout>;
  protected readonly isIconVisible = signal(false);
  protected readonly activeStatement = computed(() => this.statements[this.activeIndex()]);
  private readonly translatedStatement = translate(() => this.activeStatement().textKey);
  private readonly statementText = computed(() => String(this.translatedStatement()));
  protected readonly typedText = computed(() =>
    this.statementText().slice(0, this.typedLength()),
  );

  constructor() {
    inject(DestroyRef).onDestroy(() => clearTimeout(this.timeoutId));
    this.showIcon();
  }

  private schedule(step: () => void, delay: number): void {
    this.timeoutId = setTimeout(step, delay);
  }

  private getLetterDelay(delay: number): number {
    return this.isReducedMotion ? 0 : delay;
  }

  private showIcon(): void {
    this.isIconVisible.set(true);
    this.schedule(() => this.typeNextLetter(), ICON_DELAY);
  }

  private typeNextLetter(): void {
    if (this.typedLength() >= this.statementText().length) {
      this.schedule(() => this.deleteLastLetter(), HOLD_DELAY);
      return;
    }
    this.typedLength.update((length) => length + 1);
    this.schedule(() => this.typeNextLetter(), this.getLetterDelay(TYPE_DELAY));
  }

  private deleteLastLetter(): void {
    if (this.typedLength() <= 0) {
      this.hideIcon();
      return;
    }
    this.typedLength.update((length) => Math.min(length, this.statementText().length) - 1);
    this.schedule(() => this.deleteLastLetter(), this.getLetterDelay(DELETE_DELAY));
  }

  private hideIcon(): void {
    this.isIconVisible.set(false);
    this.schedule(() => this.showNextStatement(), ICON_DELAY);
  }

  private showNextStatement(): void {
    this.activeIndex.update((index) => (index + 1) % this.statements.length);
    this.showIcon();
  }
}
