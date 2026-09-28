/**
 * KinsokuHangTypes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __KinsokuHangTypes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface KinsokuHangTypes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<KinsokuHangTypes>): boolean;

  /**
   * @internal **WARNING:** `__KinsokuHangTypes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__KinsokuHangTypes]: never;
}


/**
 * Disables hanging punctuation.
 */
interface KinsokuHangTypes_NONE extends KinsokuHangTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}

/**
 * Enables hanging punctuation and allows punctuation marks to be placed on or outside the
 * text frame but allows burasagari characters to hang as little as possible.
 *
 * Note: Differs for justified and nonjustified text. For information on justification, see
 * line alignment.
 */
interface KinsokuHangTypes_KINSOKU_HANG_REGULAR extends KinsokuHangTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1248553074;
}

/**
 * Enables hanging punctuation but forces hanging punctuation outside the text frame and does not allow the punctuation to be placed on the text frame.
 */
interface KinsokuHangTypes_KINSOKU_HANG_FORCE extends KinsokuHangTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1248553062;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Hanging punctuation options when a kinsoku set is in effect.
 */
export declare namespace KinsokuHangTypes {
/**
 * Disables hanging punctuation.
 */
type NONE = KinsokuHangTypes_NONE;

/**
 * Enables hanging punctuation and allows punctuation marks to be placed on or outside the
 * text frame but allows burasagari characters to hang as little as possible.
 *
 * Note: Differs for justified and nonjustified text. For information on justification, see
 * line alignment.
 */
type KINSOKU_HANG_REGULAR = KinsokuHangTypes_KINSOKU_HANG_REGULAR;

/**
 * Enables hanging punctuation but forces hanging punctuation outside the text frame and does not allow the punctuation to be placed on the text frame.
 */
type KINSOKU_HANG_FORCE = KinsokuHangTypes_KINSOKU_HANG_FORCE;

}
/**
 * Hanging punctuation options when a kinsoku set is in effect.
 */
export declare const KinsokuHangTypes: typeof Enumeration & {

  /**
   * Disables hanging punctuation.
   */
  readonly NONE: KinsokuHangTypes_NONE;
  /**
   * Disables hanging punctuation.
   */
  readonly none: KinsokuHangTypes_NONE;

  /**
   * Enables hanging punctuation and allows punctuation marks to be placed on or outside the
   * text frame but allows burasagari characters to hang as little as possible.
   *
   * Note: Differs for justified and nonjustified text. For information on justification, see
   * line alignment.
   */
  readonly KINSOKU_HANG_REGULAR: KinsokuHangTypes_KINSOKU_HANG_REGULAR;
  /**
   * Enables hanging punctuation and allows punctuation marks to be placed on or outside the
   * text frame but allows burasagari characters to hang as little as possible.
   *
   * Note: Differs for justified and nonjustified text. For information on justification, see
   * line alignment.
   */
  readonly kinsokuHangRegular: KinsokuHangTypes_KINSOKU_HANG_REGULAR;
  /**
   * Enables hanging punctuation and allows punctuation marks to be placed on or outside the
   * text frame but allows burasagari characters to hang as little as possible.
   *
   * Note: Differs for justified and nonjustified text. For information on justification, see
   * line alignment.
   */
  readonly kinsokuhangregular: KinsokuHangTypes_KINSOKU_HANG_REGULAR;

  /**
   * Enables hanging punctuation but forces hanging punctuation outside the text frame and does not allow the punctuation to be placed on the text frame.
   */
  readonly KINSOKU_HANG_FORCE: KinsokuHangTypes_KINSOKU_HANG_FORCE;
  /**
   * Enables hanging punctuation but forces hanging punctuation outside the text frame and does not allow the punctuation to be placed on the text frame.
   */
  readonly kinsokuHangForce: KinsokuHangTypes_KINSOKU_HANG_FORCE;
  /**
   * Enables hanging punctuation but forces hanging punctuation outside the text frame and does not allow the punctuation to be placed on the text frame.
   */
  readonly kinsokuhangforce: KinsokuHangTypes_KINSOKU_HANG_FORCE;

}
