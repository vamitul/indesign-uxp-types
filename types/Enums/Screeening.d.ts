/**
 * Screeening.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __Screeening: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface Screeening extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<Screeening>): boolean;

  /**
   * @internal **WARNING:** `__Screeening` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__Screeening]: never;
}


/**
 * Uses the default screening settings.
 */
interface Screeening_DEFAULT_VALUE extends Screeening {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1147563124;
}

/**
 * Uses custom screening settings for ink angle and frequency. For information, see composite angle and composite frequency.
 */
interface Screeening_CUSTOM extends Screeening {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1131639917;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for ink screening for composite gray output in PostScript or PDF format.
 */
export declare namespace Screeening {
/**
 * Uses the default screening settings.
 */
type DEFAULT_VALUE = Screeening_DEFAULT_VALUE;

/**
 * Uses custom screening settings for ink angle and frequency. For information, see composite angle and composite frequency.
 */
type CUSTOM = Screeening_CUSTOM;

}
/**
 * Options for ink screening for composite gray output in PostScript or PDF format.
 */
export declare const Screeening: typeof Enumeration & {

  /**
   * Uses the default screening settings.
   */
  readonly DEFAULT_VALUE: Screeening_DEFAULT_VALUE;
  /**
   * Uses the default screening settings.
   */
  readonly defaultValue: Screeening_DEFAULT_VALUE;
  /**
   * Uses the default screening settings.
   */
  readonly defaultvalue: Screeening_DEFAULT_VALUE;

  /**
   * Uses custom screening settings for ink angle and frequency. For information, see composite angle and composite frequency.
   */
  readonly CUSTOM: Screeening_CUSTOM;
  /**
   * Uses custom screening settings for ink angle and frequency. For information, see composite angle and composite frequency.
   */
  readonly custom: Screeening_CUSTOM;

}
