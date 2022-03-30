import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner.component';
@NgModule({
	declarations: [SpinnerComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([
			{
				path: '',
				component: SpinnerComponent,
			},
		]),
		MatProgressSpinnerModule,
	],
	exports: [SpinnerComponent],
})
export class SpinnerModule {}
