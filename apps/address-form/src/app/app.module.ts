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
		MfeModule.forRoot({
			mfeConfig: environment.microfrontends,
			loaderDelay: 1000,
			preload: ['loaders', 'fallbacks'],
			loader: 'loaders/spinner',
			fallback: 'fallbacks/mfe-fallback',
		}),
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
