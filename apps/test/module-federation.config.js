module.exports = {
  name: 'test',
  exposes: {
    MfeTestModule: 'apps/test/src/app/mfe-test/mfe-test.module.ts',
    MfeTestComponent: 'apps/test/src/app/mfe-test/mfe-test.component.ts',
    StandaloneComponent: 'apps/test/src/app/standalone/standalone.component.ts',
  },
};
