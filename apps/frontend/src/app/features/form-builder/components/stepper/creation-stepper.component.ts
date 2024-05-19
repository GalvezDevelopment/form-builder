import { Component, computed, signal } from '@angular/core';

const DEFAULT_INITIAL_STEP = 0;
const DEFAULT_MAX_STEP = 2;
const STEPS_BUTTON_TEXTS = ['Go ahead', 'Start designing'];

@Component({
  selector: 'builder-creation-form',
  templateUrl: 'creation-stepper.component.html',
  styleUrl: 'creation-stepper.component.scss',
})
export class CreationFormStepperComponent {
  current = signal<number>(DEFAULT_INITIAL_STEP);
  textBtn = computed(() => STEPS_BUTTON_TEXTS[this.current()]);
  formName = signal('');

  buttonsConfig = computed(() => ({
    left: {
      title: 'Back',
      onClick: this.back.bind(this),
      hide: this.current() === 0 ? ('hidden' as const) : ('visible' as const),
    },
    right: {
      title: this.textBtn(),
      onClick: this.next.bind(this),
      hide: 'visible' as const,
      disabled: () => !!this.formName(),
    },
  }));

  next(): void {
    if (this.current() + 1 < DEFAULT_MAX_STEP)
      this.current.update((curr) => curr + 1);
  }

  back(): void {
    this.current.update((curr) => curr - 1);
  }
}
