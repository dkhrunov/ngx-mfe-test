import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
	selector: 'ngx-mfe-test-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
	private readonly _theme$ = new BehaviorSubject<'theme-light' | 'theme-dark'>('theme-light');
	public readonly theme$ = this._theme$.asObservable();

	public isHandset$: Observable<boolean> = this._breakpointObserver
		.observe(Breakpoints.Handset)
		.pipe(
			map((result) => result.matches),
			shareReplay()
		);

	constructor(
		private _breakpointObserver: BreakpointObserver,
		@Inject(DOCUMENT) private _document: Document,
		private _renderer: Renderer2
	) {}

	public ngOnInit(): void {
		const appliedTheme: 'theme-light' | 'theme-dark' =
			(localStorage.getItem('activeTheme') as 'theme-light' | 'theme-dark') || 'theme-light';
		this._theme$.next(appliedTheme);
		this._renderer.setAttribute(this._document.body, 'class', this._theme$.value);
	}

	public switchMode() {
		const currentTheme = this._theme$.value;

		if (currentTheme === 'theme-light') {
			this._theme$.next('theme-dark');
		} else {
			this._theme$.next('theme-light');
		}

		this._renderer.setAttribute(this._document.body, 'class', this._theme$.value);
		localStorage.setItem('activeTheme', this._theme$.value);
	}
}
