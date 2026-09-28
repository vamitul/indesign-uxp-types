/**
 * ToolTipOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ToolTipOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ToolTipOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ToolTipOptions>): boolean;

  /**
   * @internal **WARNING:** `__ToolTipOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ToolTipOptions]: never;
}


/**
 * Displays tool tips.
 */
interface ToolTipOptions_NORMAL extends ToolTipOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852797549;
}

/**
 * Turns off tool tips.
 */
interface ToolTipOptions_NONE extends ToolTipOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}

/**
 * Displays tool tips more quickly than normal.
 */
interface ToolTipOptions_FAST extends ToolTipOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1180791668;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether tool tips are shown at normal speed, turned off, or shown faster than normal.
 */
export declare namespace ToolTipOptions {
/**
 * Displays tool tips.
 */
type NORMAL = ToolTipOptions_NORMAL;

/**
 * Turns off tool tips.
 */
type NONE = ToolTipOptions_NONE;

/**
 * Displays tool tips more quickly than normal.
 */
type FAST = ToolTipOptions_FAST;

}
/**
 * Whether tool tips are shown at normal speed, turned off, or shown faster than normal.
 */
export declare const ToolTipOptions: typeof Enumeration & {

  /**
   * Displays tool tips.
   */
  readonly NORMAL: ToolTipOptions_NORMAL;
  /**
   * Displays tool tips.
   */
  readonly normal: ToolTipOptions_NORMAL;

  /**
   * Turns off tool tips.
   */
  readonly NONE: ToolTipOptions_NONE;
  /**
   * Turns off tool tips.
   */
  readonly none: ToolTipOptions_NONE;

  /**
   * Displays tool tips more quickly than normal.
   */
  readonly FAST: ToolTipOptions_FAST;
  /**
   * Displays tool tips more quickly than normal.
   */
  readonly fast: ToolTipOptions_FAST;

}
