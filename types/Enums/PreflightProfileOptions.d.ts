/**
 * PreflightProfileOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PreflightProfileOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PreflightProfileOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PreflightProfileOptions>): boolean;

  /**
   * @internal **WARNING:** `__PreflightProfileOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PreflightProfileOptions]: never;
}


/**
 * Preflight using the embedded profile.
 */
interface PreflightProfileOptions_USE_EMBEDDED_PROFILE extends PreflightProfileOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1885619533;
}

/**
 * Preflight using the working profile.
 */
interface PreflightProfileOptions_USE_WORKING_PROFILE extends PreflightProfileOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1885622342;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Which profile a preflight run uses — the document's embedded one, or the one named in the
 * process.
 */
export declare namespace PreflightProfileOptions {
/**
 * Preflight using the embedded profile.
 */
type USE_EMBEDDED_PROFILE = PreflightProfileOptions_USE_EMBEDDED_PROFILE;

/**
 * Preflight using the working profile.
 */
type USE_WORKING_PROFILE = PreflightProfileOptions_USE_WORKING_PROFILE;

}
/**
 * Which profile a preflight run uses — the document's embedded one, or the one named in the
 * process.
 */
export declare const PreflightProfileOptions: typeof Enumeration & {

  /**
   * Preflight using the embedded profile.
   */
  readonly USE_EMBEDDED_PROFILE: PreflightProfileOptions_USE_EMBEDDED_PROFILE;
  /**
   * Preflight using the embedded profile.
   */
  readonly useEmbeddedProfile: PreflightProfileOptions_USE_EMBEDDED_PROFILE;
  /**
   * Preflight using the embedded profile.
   */
  readonly useembeddedprofile: PreflightProfileOptions_USE_EMBEDDED_PROFILE;

  /**
   * Preflight using the working profile.
   */
  readonly USE_WORKING_PROFILE: PreflightProfileOptions_USE_WORKING_PROFILE;
  /**
   * Preflight using the working profile.
   */
  readonly useWorkingProfile: PreflightProfileOptions_USE_WORKING_PROFILE;
  /**
   * Preflight using the working profile.
   */
  readonly useworkingprofile: PreflightProfileOptions_USE_WORKING_PROFILE;

}
