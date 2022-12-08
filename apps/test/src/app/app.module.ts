/*
 * This RemoteEntryModule is imported here to allow TS to find the Module during
 * compilation, allowing it to be included in the built bundle. This is required
 * for the Module Federation Plugin to expose the Module correctly.
 * */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MfeModule } from 'ngx-mfe';
import { environment } from '../environments/environment';
import { StandaloneComponent } from './standalone/standalone.component';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		RouterModule.forRoot(
			[
				{
					path: '',
					loadChildren: () =>
						import('./mfe-test/mfe-test.module').then((m) => m.MfeTestModule),
				},
				{
					path: 'standalone',
					loadComponent: () =>
						import('./standalone/standalone.component').then(
							(c) => c.StandaloneComponent
						),
				},
			],
			{ initialNavigation: 'enabledBlocking' }
		),
		// Configured for working with MFE as Standalone app
		MfeModule.forRoot({
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
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
