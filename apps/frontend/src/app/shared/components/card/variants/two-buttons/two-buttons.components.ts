import { Component, TemplateRef, computed, input } from '@angular/core';

export type CardActionsAlignment = 'left' | 'right' | 'space-between';
export type CardButtonConfig = {
  title: string;
  onClick?: () => void;
  hide: 'visible' | 'hidden';
  disabled?: () => boolean;
  class?: string;
};
export type CardFooterButtonsConfig = {
  left: CardButtonConfig;
  right: CardButtonConfig;
  customButtons?: TemplateRef<any>;
};

@Component({
  selector: 'builder-card-actions',
  template: `
    <builder-card>
      <builder-card-title>{{ title() }}</builder-card-title>
      <builder-card-body>
        <ng-container *ngTemplateOutlet="bodyTemplate()"></ng-container>
      </builder-card-body>
      <builder-card-footer>
        <section class="{{ alignment() }}">
          <button
            mat-flat-button
            (click)="leftButton().onClick?.()"
            [ngStyle]="{ visibility: leftButton().hide }"
          >
            {{ leftButton().title }}
          </button>
          <button
            mat-flat-button
            color="primary"
            (click)="rightButton().onClick?.()"
            [disabled]="rightButton().disabled?.()"
          >
            {{ rightButton().title }}
          </button>
        </section>
      </builder-card-footer>
    </builder-card>
  `,
  styleUrl: './two-buttons.components.scss',
})
export class CardWithActionsComponent {
  private readonly defaultButtonConfig: CardFooterButtonsConfig = {
    left: { title: 'CANCEL', hide: 'visible' as const },
    right: { title: 'ACCEPT', hide: 'visible' as const },
  };

  // INPUT
  title = input<string>('');
  bodyTemplate = input.required<TemplateRef<any>>();
  alignment = input<CardActionsAlignment>('right');
  buttonsConfig = input<CardFooterButtonsConfig, CardFooterButtonsConfig>(
    this.defaultButtonConfig,
    {
      transform: this.buttonConfigTransform.bind(this),
    }
  );

  // COMPUTED
  protected leftButton = computed(() => this.buttonsConfig().left);
  protected rightButton = computed(() => this.buttonsConfig().right);

  // METHODS
  private buttonConfigTransform(
    config: CardFooterButtonsConfig
  ): CardFooterButtonsConfig {
    const configCloned = { ...config };
    if (config.left?.title.trim()) {
      configCloned.left.title = config.left.title.toUpperCase();
    }
    if (config.right?.title.trim()) {
      configCloned.right.title = config.right.title.toUpperCase();
    }
    return configCloned;
  }
}
