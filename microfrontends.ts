export const microfrontends = {
	'address-form': 'http://localhost:4201/remoteEntry.mjs',
	loaders: 'http://localhost:4202/remoteEntry.mjs',
	fallbacks: 'http://localhost:4203/remoteEntry.mjs',
	test: 'http://localhost:4204/remoteEntry.mjs',
};

export type MicrofrontendsMap = {
	[key in keyof typeof microfrontends]: string;
};
