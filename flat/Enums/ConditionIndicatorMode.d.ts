/**
 * ConditionIndicatorMode.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ConditionIndicatorMode: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ConditionIndicatorMode extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ConditionIndicatorMode>): boolean;

  /**
   * @internal **WARNING:** `__ConditionIndicatorMode` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ConditionIndicatorMode]: never;
}


/**
 * Condition indicators appear on screen but do not print.
 */
interface ConditionIndicatorMode_SHOW_INDICATORS extends ConditionIndicatorMode {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1698908531;
}

/**
 * Condition indicators appear on screen and print.
 */
interface ConditionIndicatorMode_SHOW_AND_PRINT_INDICATORS extends ConditionIndicatorMode {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1698908528;
}

/**
 * Condition indicators are hidden.
 */
interface ConditionIndicatorMode_HIDE_INDICATORS extends ConditionIndicatorMode {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1698908520;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Condition indicator mode options.
 */
export declare namespace ConditionIndicatorMode {
/**
 * Condition indicators show only.
 */
type SHOW_INDICATORS = ConditionIndicatorMode_SHOW_INDICATORS;

/**
 * Conditions indicators show and print.
 */
type SHOW_AND_PRINT_INDICATORS = ConditionIndicatorMode_SHOW_AND_PRINT_INDICATORS;

/**
 * Conditions indicators hide.
 */
type HIDE_INDICATORS = ConditionIndicatorMode_HIDE_INDICATORS;

}
/**
 * Condition indicator mode options.
 */
export declare const ConditionIndicatorMode: typeof Enumeration & {

  /**
   * Condition indicators appear on screen but do not print.
   */
  readonly SHOW_INDICATORS: ConditionIndicatorMode_SHOW_INDICATORS;
  /**
   * Condition indicators appear on screen but do not print.
   */
  readonly showIndicators: ConditionIndicatorMode_SHOW_INDICATORS;
  /**
   * Condition indicators appear on screen but do not print.
   */
  readonly showindicators: ConditionIndicatorMode_SHOW_INDICATORS;

  /**
   * Condition indicators appear on screen and print.
   */
  readonly SHOW_AND_PRINT_INDICATORS: ConditionIndicatorMode_SHOW_AND_PRINT_INDICATORS;
  /**
   * Condition indicators appear on screen and print.
   */
  readonly showAndPrintIndicators: ConditionIndicatorMode_SHOW_AND_PRINT_INDICATORS;
  /**
   * Condition indicators appear on screen and print.
   */
  readonly showandprintindicators: ConditionIndicatorMode_SHOW_AND_PRINT_INDICATORS;

  /**
   * Condition indicators are hidden.
   */
  readonly HIDE_INDICATORS: ConditionIndicatorMode_HIDE_INDICATORS;
  /**
   * Condition indicators are hidden.
   */
  readonly hideIndicators: ConditionIndicatorMode_HIDE_INDICATORS;
  /**
   * Condition indicators are hidden.
   */
  readonly hideindicators: ConditionIndicatorMode_HIDE_INDICATORS;

}
