import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MfeTestComponent } from './mfe-test.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [MfeTestComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([
			{
				path: '',
				component: MfeTestComponent,
			},
		]),
	],
	exports: [MfeTestComponent],
})
export class MfeTestModule {}
