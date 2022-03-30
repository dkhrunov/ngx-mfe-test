import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { loadMfeModule, MfeModule } from 'ngx-mfe';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
	declarations: [AppComponent, NxWelcomeComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(
			[
				{
					path: 'address-form',
					loadChildren: () => loadMfeModule('address-form/form'),
				},
			],
			{ initialNavigation: 'enabledBlocking' }
		),
		MfeModule.forRoot({
			mfeConfig: environment.microfrontends,
			delay: 5000,
		}),
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
