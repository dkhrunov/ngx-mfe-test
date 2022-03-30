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
					path: 'spinner',
					loadChildren: () =>
						import('./spinner/spinner.module').then((m) => m.SpinnerModule),
				},
				{
					path: '**',
					redirectTo: 'spinner',
				},
			],
			{ initialNavigation: 'enabledBlocking' }
		),
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
