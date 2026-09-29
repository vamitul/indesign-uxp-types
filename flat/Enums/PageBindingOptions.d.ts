/**
 * PageBindingOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PageBindingOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PageBindingOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PageBindingOptions>): boolean;

  /**
   * @internal **WARNING:** `__PageBindingOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PageBindingOptions]: never;
}


/**
 * Uses default page binding.
 */
interface PageBindingOptions_DEFAULT_VALUE extends PageBindingOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1147563124;
}

/**
 * Pages are bound on the right.
 */
interface PageBindingOptions_RIGHT_TO_LEFT extends PageBindingOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1920232546;
}

/**
 * Pages are bound on the left.
 */
interface PageBindingOptions_LEFT_TO_RIGHT extends PageBindingOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1819570786;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The page binding placement.
 */
export declare namespace PageBindingOptions {
/**
 * Uses default page binding.
 */
type DEFAULT_VALUE = PageBindingOptions_DEFAULT_VALUE;

/**
 * Pages are bound on the right.
 */
type RIGHT_TO_LEFT = PageBindingOptions_RIGHT_TO_LEFT;

/**
 * Pages are bound on the left.
 */
type LEFT_TO_RIGHT = PageBindingOptions_LEFT_TO_RIGHT;

}
/**
 * The page binding placement.
 */
export declare const PageBindingOptions: typeof Enumeration & {

  /**
   * Uses default page binding.
   */
  readonly DEFAULT_VALUE: PageBindingOptions_DEFAULT_VALUE;
  /**
   * Uses default page binding.
   */
  readonly defaultValue: PageBindingOptions_DEFAULT_VALUE;
  /**
   * Uses default page binding.
   */
  readonly defaultvalue: PageBindingOptions_DEFAULT_VALUE;

  /**
   * Pages are bound on the right.
   */
  readonly RIGHT_TO_LEFT: PageBindingOptions_RIGHT_TO_LEFT;
  /**
   * Pages are bound on the right.
   */
  readonly rightToLeft: PageBindingOptions_RIGHT_TO_LEFT;
  /**
   * Pages are bound on the right.
   */
  readonly righttoleft: PageBindingOptions_RIGHT_TO_LEFT;

  /**
   * Pages are bound on the left.
   */
  readonly LEFT_TO_RIGHT: PageBindingOptions_LEFT_TO_RIGHT;
  /**
   * Pages are bound on the left.
   */
  readonly leftToRight: PageBindingOptions_LEFT_TO_RIGHT;
  /**
   * Pages are bound on the left.
   */
  readonly lefttoright: PageBindingOptions_LEFT_TO_RIGHT;

}
