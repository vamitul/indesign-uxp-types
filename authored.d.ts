/**
 * indesign-uxp-types/authored — the `indesign` module from the authored tree.
 *
 * The same API as the default entry, declared with its full generics: every class carries
 * its parent and plural mode as type arguments. Tooltips are longer. Enable it in
 * tsconfig.json instead of the default:
 *
 *     "types": ["indesign-uxp-types/authored"]
 */
/// <reference types="@adobe/cc-ext-uxp-types/uxp" />
declare module 'indesign' {
  export * from 'indesign-uxp-types/types';
}
