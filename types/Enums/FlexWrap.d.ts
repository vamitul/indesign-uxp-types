/**
 * FlexWrap.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __FlexWrap: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface FlexWrap extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<FlexWrap>): boolean;

  /**
   * @internal **WARNING:** `__FlexWrap` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__FlexWrap]: never;
}


/**
 * Does not wrap items.
 */
interface FlexWrap_NO_WRAP extends FlexWrap {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1716997751;
}

/**
 * Wraps items.
 */
interface FlexWrap_WRAP extends FlexWrap {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1717000048;
}

/**
 * Wraps items in reverse order.
 */
interface FlexWrap_WRAP_REVERSE extends FlexWrap {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1717000050;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether flex items are forced onto one line or can wrap onto multiple lines.
 */
export declare namespace FlexWrap {
/**
 * Does not wrap items.
 */
type NO_WRAP = FlexWrap_NO_WRAP;

/**
 * Wraps items.
 */
type WRAP = FlexWrap_WRAP;

/**
 * Wraps items in reverse order.
 */
type WRAP_REVERSE = FlexWrap_WRAP_REVERSE;

}
/**
 * Whether flex items are forced onto one line or can wrap onto multiple lines.
 */
export declare const FlexWrap: typeof Enumeration & {

  /**
   * Does not wrap items.
   */
  readonly NO_WRAP: FlexWrap_NO_WRAP;
  /**
   * Does not wrap items.
   */
  readonly noWrap: FlexWrap_NO_WRAP;
  /**
   * Does not wrap items.
   */
  readonly nowrap: FlexWrap_NO_WRAP;

  /**
   * Wraps items.
   */
  readonly WRAP: FlexWrap_WRAP;
  /**
   * Wraps items.
   */
  readonly wrap: FlexWrap_WRAP;

  /**
   * Wraps items in reverse order.
   */
  readonly WRAP_REVERSE: FlexWrap_WRAP_REVERSE;
  /**
   * Wraps items in reverse order.
   */
  readonly wrapReverse: FlexWrap_WRAP_REVERSE;
  /**
   * Wraps items in reverse order.
   */
  readonly wrapreverse: FlexWrap_WRAP_REVERSE;

}
