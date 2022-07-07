import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [ProgressBarComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([
			{
				path: '',
				component: ProgressBarComponent,
			},
		]),
		MatProgressBarModule,
	],
	exports: [ProgressBarComponent],
})
export class ProgressBarModule {}
