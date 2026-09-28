/**
 * UpdateLinkOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __UpdateLinkOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface UpdateLinkOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<UpdateLinkOptions>): boolean;

  /**
   * @internal **WARNING:** `__UpdateLinkOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__UpdateLinkOptions]: never;
}


/**
 * Unspecified update option.
 */
interface UpdateLinkOptions_UNKNOWN extends UpdateLinkOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1433299822;
}

/**
 * Changes the visibility settings to match the modified file.
 */
interface UpdateLinkOptions_APPLICATION_SETTINGS extends UpdateLinkOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1819243873;
}

/**
 * Ignores the modified settings and maintains those specified in the current document.
 */
interface UpdateLinkOptions_KEEP_OVERRIDES extends UpdateLinkOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1819241327;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * How a modified linked file's settings are reconciled when the link updates — matching the
 * file's visibility settings, or keeping the ones set in the document.
 */
export declare namespace UpdateLinkOptions {
/**
 * Unspecified update option.
 */
type UNKNOWN = UpdateLinkOptions_UNKNOWN;

/**
 * Changes the visibility settings to match the modified file.
 */
type APPLICATION_SETTINGS = UpdateLinkOptions_APPLICATION_SETTINGS;

/**
 * Ignores the modified settings and maintains those specified in the current document.
 */
type KEEP_OVERRIDES = UpdateLinkOptions_KEEP_OVERRIDES;

}
/**
 * How a modified linked file's settings are reconciled when the link updates — matching the
 * file's visibility settings, or keeping the ones set in the document.
 */
export declare const UpdateLinkOptions: typeof Enumeration & {

  /**
   * Unspecified update option.
   */
  readonly UNKNOWN: UpdateLinkOptions_UNKNOWN;
  /**
   * Unspecified update option.
   */
  readonly unknown: UpdateLinkOptions_UNKNOWN;

  /**
   * Changes the visibility settings to match the modified file.
   */
  readonly APPLICATION_SETTINGS: UpdateLinkOptions_APPLICATION_SETTINGS;
  /**
   * Changes the visibility settings to match the modified file.
   */
  readonly applicationSettings: UpdateLinkOptions_APPLICATION_SETTINGS;
  /**
   * Changes the visibility settings to match the modified file.
   */
  readonly applicationsettings: UpdateLinkOptions_APPLICATION_SETTINGS;

  /**
   * Ignores the modified settings and maintains those specified in the current document.
   */
  readonly KEEP_OVERRIDES: UpdateLinkOptions_KEEP_OVERRIDES;
  /**
   * Ignores the modified settings and maintains those specified in the current document.
   */
  readonly keepOverrides: UpdateLinkOptions_KEEP_OVERRIDES;
  /**
   * Ignores the modified settings and maintains those specified in the current document.
   */
  readonly keepoverrides: UpdateLinkOptions_KEEP_OVERRIDES;

}
