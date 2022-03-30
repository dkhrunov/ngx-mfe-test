/*
 * This RemoteEntryModule is imported here to allow TS to find the Module during
 * compilation, allowing it to be included in the built bundle. This is required
 * for the Module Federation Plugin to expose the Module correctly.
 * */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		RouterModule.forRoot(
			[
				{
					path: 'mfe-fallback',
					loadChildren: () =>
						import('./mfe-fallback/mfe-fallback.module').then(
							(m) => m.MfeFallbackModule
						),
				},
				{
					path: '**',
					redirectTo: 'mfe-fallback',
				},
			],
			{ initialNavigation: 'enabledBlocking' }
		),
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
