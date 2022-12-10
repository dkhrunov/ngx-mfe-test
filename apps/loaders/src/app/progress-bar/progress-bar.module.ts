import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';
import { ProgressBarComponent } from './progress-bar.component';

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
