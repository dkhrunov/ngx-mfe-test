import { Component } from '@angular/core';

@Component({
    selector: 'ngx-mfe-test-progress-bar',
    template: ` <mat-progress-bar mode="indeterminate"></mat-progress-bar> `,
    styles: [
        `
			:host {
				display: block;
			}
		`,
    ],
    standalone: false
})
export class ProgressBarComponent {}
