import { Component } from '@angular/core';

@Component({
    selector: 'ngx-mfe-test-mfe-test',
    template: ` <p>MFE Component Works!</p> `,
    styles: [
        `
			:host {
				display: block;
			}
		`,
    ],
    standalone: false
})
export class MfeTestComponent {}
