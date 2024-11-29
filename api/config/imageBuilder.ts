import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: '../schema/imageBuilder.yaml',
  apiFile: '../../src/store/emptyImageBuilderApi.ts',
  apiImport: 'emptyImageBuilderApi',
  outputFile: '../../src/store/imageBuilderApi.ts',
  exportName: 'imageBuilderApi',
  hooks: { queries: true, lazyQueries: true, mutations: true },
  unionUndefined: true,
  filterEndpoints: [
    'cloneCompose',
    'composeImage',
    'getComposes',
    'getComposeStatus',
    'getComposeClones',
    'getCloneStatus',
    'getArchitectures',
    'getPackages',
    'getOscapProfiles',
    'getOscapCustomizations',
    'createBlueprint',
    'updateBlueprint',
    'composeBlueprint',
    'getBlueprints',
    'exportBlueprint',
    'getBlueprintComposes',
    'deleteBlueprint',
    'getBlueprint',
    'recommendPackage',
  ],
};

export default config;
