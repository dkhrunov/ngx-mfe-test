import { microfrontends as _microfrontends, MicrofrontendsMap } from './microfrontends';

export const microfrontends: MicrofrontendsMap = {
	..._microfrontends,
	'address-form': 'http://localhost:5201/remoteEntry.js',
};
