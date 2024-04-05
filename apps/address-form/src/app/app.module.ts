/*
 * This RemoteEntryModule is imported here to allow TS to find the Module during
 * compilation, allowing it to be included in the built bundle. This is required
 * for the Module Federation Plugin to expose the Module correctly.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MfeModule } from 'ngx-mfe';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(
			[
				{
					path: '',
					loadChildren: () => import('./form/form.module').then((m) => m.FormModule),
				},
			],
			{ initialNavigation: 'enabledBlocking' }
		),
		// Configured for working with MFE as Standalone app
		MfeModule.forRoot({
			// // Async Promise load mfe config
			// mfeConfig: {
			// 	useLoader: () => {
			// 		console.log('loader call :>> ');
			// 		return new Promise<MfeConfig>((resolve, reject) => {
			// 			setTimeout(() => {
			// 				resolve(environment.microfrontends);
			// 			}, 2000);
			// 		});
			// 	},
			// },
			mfeConfig: environment.microfrontends,
			loaderDelay: 1000,
			preload: ['loaders', 'fallbacks'],
			loader: {
				app: 'loaders',
				module: 'SpinnerModule',
				component: 'SpinnerComponent',
			},
			fallback: {
				app: 'fallbacks',
				module: 'MfeFallbackModule',
				component: 'MfeFallbackComponent',
			},
		}),
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
