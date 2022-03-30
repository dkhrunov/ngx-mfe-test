import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'ngx-mfe-test-fallbacks-mfe',
	template: `
		<mat-card>
			<mat-card-header>
				<mat-icon mat-card-avatar color="warn">view_in_ar</mat-icon>
				<mat-card-title>Micro-frontend failed to display</mat-card-title>
				<mat-card-subtitle>Try reloading the page or contact support</mat-card-subtitle>
			</mat-card-header>
		</mat-card>
	`,
	styles: [
		`
			mat-card {
				width: max-content;
			}

			mat-card .mat-icon {
				font-size: 3.2rem;
				height: 3.2rem;
				width: 3.2rem;
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MfeFallbackComponent {}
