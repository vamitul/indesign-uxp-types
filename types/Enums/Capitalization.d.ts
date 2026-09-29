/**
 * Capitalization.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __Capitalization: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface Capitalization extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<Capitalization>): boolean;

  /**
   * @internal **WARNING:** `__Capitalization` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__Capitalization]: never;
}


/**
 * Do not change the capitalization of the text.
 */
interface Capitalization_NORMAL extends Capitalization {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852797549;
}

/**
 * Use small caps for lowercase letters.
 */
interface Capitalization_SMALL_CAPS extends Capitalization {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936548720;
}

/**
 * Use all uppercase letters.
 */
interface Capitalization_ALL_CAPS extends Capitalization {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1634493296;
}

/**
 * Use OpenType small caps.
 */
interface Capitalization_CAP_TO_SMALL_CAP extends Capitalization {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1664250723;
}

/**
 * Use all lowercase letters.
 */
interface Capitalization_LOWER_CASE extends Capitalization {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1819244387;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Capitalization options.
 */
export declare namespace Capitalization {
/**
 * Do not change the capitalization of the text.
 */
type NORMAL = Capitalization_NORMAL;

/**
 * Use small caps for lowercase letters.
 */
type SMALL_CAPS = Capitalization_SMALL_CAPS;

/**
 * Use all uppercase letters.
 */
type ALL_CAPS = Capitalization_ALL_CAPS;

/**
 * Use OpenType small caps.
 */
type CAP_TO_SMALL_CAP = Capitalization_CAP_TO_SMALL_CAP;

/**
 * Use to change to Lower case.
 */
type LOWER_CASE = Capitalization_LOWER_CASE;

}
/**
 * Capitalization options.
 */
export declare const Capitalization: typeof Enumeration & {

  /**
   * Do not change the capitalization of the text.
   */
  readonly NORMAL: Capitalization_NORMAL;
  /**
   * Do not change the capitalization of the text.
   */
  readonly normal: Capitalization_NORMAL;

  /**
   * Use small caps for lowercase letters.
   */
  readonly SMALL_CAPS: Capitalization_SMALL_CAPS;
  /**
   * Use small caps for lowercase letters.
   */
  readonly smallCaps: Capitalization_SMALL_CAPS;
  /**
   * Use small caps for lowercase letters.
   */
  readonly smallcaps: Capitalization_SMALL_CAPS;

  /**
   * Use all uppercase letters.
   */
  readonly ALL_CAPS: Capitalization_ALL_CAPS;
  /**
   * Use all uppercase letters.
   */
  readonly allCaps: Capitalization_ALL_CAPS;
  /**
   * Use all uppercase letters.
   */
  readonly allcaps: Capitalization_ALL_CAPS;

  /**
   * Use OpenType small caps.
   */
  readonly CAP_TO_SMALL_CAP: Capitalization_CAP_TO_SMALL_CAP;
  /**
   * Use OpenType small caps.
   */
  readonly capToSmallCap: Capitalization_CAP_TO_SMALL_CAP;
  /**
   * Use OpenType small caps.
   */
  readonly captosmallcap: Capitalization_CAP_TO_SMALL_CAP;

  /**
   * Use all lowercase letters.
   */
  readonly LOWER_CASE: Capitalization_LOWER_CASE;
  /**
   * Use all lowercase letters.
   */
  readonly lowerCase: Capitalization_LOWER_CASE;
  /**
   * Use all lowercase letters.
   */
  readonly lowercase: Capitalization_LOWER_CASE;

}
