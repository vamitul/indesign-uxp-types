/**
 * FlexWidthHeightMode.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";
import type { FlexEnum } from "./FlexEnum";



declare const __FlexWidthHeightMode: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface FlexWidthHeightMode extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<FlexWidthHeightMode, FlexEnum>): boolean;

  /**
   * @internal **WARNING:** `__FlexWidthHeightMode` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__FlexWidthHeightMode]: never;
}


/**
 * Fixed width or height.
 */
interface FlexWidthHeightMode_FLEX_FIXED extends FlexWidthHeightMode {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1716995704;
}

/**
 * Fills the available width or height.
 */
interface FlexWidthHeightMode_FLEX_FILL extends FlexWidthHeightMode {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1716995692;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The width or height behavior of the flex container or content item.
 */
export declare namespace FlexWidthHeightMode {
/**
 * Fixed width or height.
 */
type FLEX_FIXED = FlexWidthHeightMode_FLEX_FIXED;

/**
 * Fills the available width or height.
 */
type FLEX_FILL = FlexWidthHeightMode_FLEX_FILL;

}
/**
 * The width or height behavior of the flex container or content item.
 */
export declare const FlexWidthHeightMode: typeof Enumeration & {

  /**
   * Fixed width or height.
   */
  readonly FLEX_FIXED: FlexWidthHeightMode_FLEX_FIXED;
  /**
   * Fixed width or height.
   */
  readonly flexFixed: FlexWidthHeightMode_FLEX_FIXED;
  /**
   * Fixed width or height.
   */
  readonly flexfixed: FlexWidthHeightMode_FLEX_FIXED;

  /**
   * Fills the available width or height.
   */
  readonly FLEX_FILL: FlexWidthHeightMode_FLEX_FILL;
  /**
   * Fills the available width or height.
   */
  readonly flexFill: FlexWidthHeightMode_FLEX_FILL;
  /**
   * Fills the available width or height.
   */
  readonly flexfill: FlexWidthHeightMode_FLEX_FILL;

}
