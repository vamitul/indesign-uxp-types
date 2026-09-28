/**
 * indesign-uxp-types — TypeScript declarations for the Adobe InDesign UXP scripting DOM.
 *
 * This entry declares the `indesign` module from the flattened tree: the same API as the
 * authored one, with readable tooltips. Enable it in tsconfig.json:
 *
 *     "types": ["indesign-uxp-types"]
 *
 * For the authored, fully generic tree use `"types": ["indesign-uxp-types/authored"]`
 * instead — never both.
 */
/// <reference types="@adobe/cc-ext-uxp-types/uxp" />
declare module 'indesign' {
  export * from 'indesign-uxp-types/flat';
}
