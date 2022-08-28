import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'ngx-mfe-test-standalone',
	standalone: true,
	imports: [CommonModule],
	template: ` <p>Standalone component works!</p> `,
	styles: [],
})
export class StandaloneComponent {}
