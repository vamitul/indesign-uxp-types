/**
 * FeatureSetOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __FeatureSetOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface FeatureSetOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<FeatureSetOptions>): boolean;

  /**
   * @internal **WARNING:** `__FeatureSetOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__FeatureSetOptions]: never;
}


/**
 * Uses the Roman feature set and defaults.
 */
interface FeatureSetOptions_ROMAN extends FeatureSetOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1383034222;
}

/**
 * Uses the Japanese feature set and defaults.
 */
interface FeatureSetOptions_JAPANESE extends FeatureSetOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1247899758;
}

/**
 * Uses the right-to-left feature set and defaults.
 */
interface FeatureSetOptions_RIGHTTOLEFT extends FeatureSetOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1381265228;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for specifying a feature set.
 */
export declare namespace FeatureSetOptions {
/**
 * Uses the Roman feature set and defaults.
 */
type ROMAN = FeatureSetOptions_ROMAN;

/**
 * Uses the Japanese feature set and defaults.
 */
type JAPANESE = FeatureSetOptions_JAPANESE;

/**
 * Uses the R2L feature set
 */
type RIGHTTOLEFT = FeatureSetOptions_RIGHTTOLEFT;

}
/**
 * Options for specifying a feature set.
 */
export declare const FeatureSetOptions: typeof Enumeration & {

  /**
   * Uses the Roman feature set and defaults.
   */
  readonly ROMAN: FeatureSetOptions_ROMAN;
  /**
   * Uses the Roman feature set and defaults.
   */
  readonly roman: FeatureSetOptions_ROMAN;

  /**
   * Uses the Japanese feature set and defaults.
   */
  readonly JAPANESE: FeatureSetOptions_JAPANESE;
  /**
   * Uses the Japanese feature set and defaults.
   */
  readonly japanese: FeatureSetOptions_JAPANESE;

  /**
   * Uses the right-to-left feature set and defaults.
   */
  readonly RIGHTTOLEFT: FeatureSetOptions_RIGHTTOLEFT;
  /**
   * Uses the right-to-left feature set and defaults.
   */
  readonly righttoleft: FeatureSetOptions_RIGHTTOLEFT;

}
