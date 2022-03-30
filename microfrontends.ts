export const microfrontends = {
	'address-form': 'http://localhost:4201/remoteEntry.js',
};

export type MicrofrontendsMap = {
	[key in keyof typeof microfrontends]: string;
};
