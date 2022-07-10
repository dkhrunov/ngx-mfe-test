import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { loadMfe, MfeModule } from 'ngx-mfe';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from './layout/layout.module';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
	declarations: [AppComponent, NxWelcomeComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		LayoutModule,
		RouterModule.forRoot(
			[
				{
					path: '',
					component: LayoutComponent,
					children: [
						{
							path: '',
							component: NxWelcomeComponent,
						},
						{
							path: 'address',
							loadChildren: () => loadMfe('address-form', 'FormModule'),
						},
					],
				},
				{
					path: '**',
					redirectTo: '',
				},
			],
			{ initialNavigation: 'enabledBlocking' }
		),
		MfeModule.forRoot({
			mfeConfig: environment.microfrontends,
			preload: ['loaders', 'fallbacks'],
			loaderDelay: 1000,
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
