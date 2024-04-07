import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { MfeModule } from 'ngx-mfe';
import { FormComponent } from './form.component';
import { environment } from '../../environments/environment';

@NgModule({
	declarations: [FormComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([
			{
				path: '',
				component: FormComponent,
			},
		]),
		MfeModule,
		// Configured for working with MFE as Standalone app
		// MfeModule.forRoot({
		// 	mfeConfig: environment.microfrontends,
		// 	loaderDelay: 1000,
		// 	preload: ['loaders', 'fallbacks'],
		// 	loader: {
		// 		app: 'loaders',
		// 		module: 'SpinnerModule',
		// 		component: 'SpinnerComponent',
		// 	},
		// 	fallback: {
		// 		app: 'fallbacks',
		// 		module: 'MfeFallbackModule',
		// 		component: 'MfeFallbackComponent',
		// 	},
		// }),
		MatInputModule,
		MatButtonModule,
		MatSelectModule,
		MatRadioModule,
		MatCardModule,
		ReactiveFormsModule,
	],
})
export class FormModule {}
