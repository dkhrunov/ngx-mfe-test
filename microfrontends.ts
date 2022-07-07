export const microfrontends = {
	'address-form': 'http://localhost:4201/remoteEntry.js',
	loaders: 'http://localhost:4202/remoteEntry.js',
	fallbacks: 'http://localhost:4203/remoteEntry.js',
	test: 'http://localhost:4204/remoteEntry.js',
};

export type MicrofrontendsMap = {
	[key in keyof typeof microfrontends]: string;
};
