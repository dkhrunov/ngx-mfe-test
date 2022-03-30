import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MfeFallbackComponent } from './mfe-fallback.component';

@NgModule({
	declarations: [MfeFallbackComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([
			{
				path: '',
				component: MfeFallbackComponent,
			},
		]),
		MatIconModule,
		MatCardModule,
	],
	exports: [MfeFallbackComponent],
})
export class MfeFallbackModule {}
