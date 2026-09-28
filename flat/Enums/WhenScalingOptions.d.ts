/**
 * WhenScalingOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __WhenScalingOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface WhenScalingOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<WhenScalingOptions>): boolean;

  /**
   * @internal **WARNING:** `__WhenScalingOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__WhenScalingOptions]: never;
}


/**
 * Apply scaling to the item's content.
 */
interface WhenScalingOptions_APPLY_TO_CONTENT extends WhenScalingOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1934192243;
}

/**
 * Adjust the scaling percentage of the item's transform.
 */
interface WhenScalingOptions_ADJUST_SCALING_PERCENTAGE extends WhenScalingOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1934587252;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether scaling an object changes its content's size directly or just updates its scaling
 * percentage.
 */
export declare namespace WhenScalingOptions {
/**
 * Apply scaling to the item's content.
 */
type APPLY_TO_CONTENT = WhenScalingOptions_APPLY_TO_CONTENT;

/**
 * Adjust the scaling percentage of the item's transform.
 */
type ADJUST_SCALING_PERCENTAGE = WhenScalingOptions_ADJUST_SCALING_PERCENTAGE;

}
/**
 * Whether scaling an object changes its content's size directly or just updates its scaling
 * percentage.
 */
export declare const WhenScalingOptions: typeof Enumeration & {

  /**
   * Apply scaling to the item's content.
   */
  readonly APPLY_TO_CONTENT: WhenScalingOptions_APPLY_TO_CONTENT;
  /**
   * Apply scaling to the item's content.
   */
  readonly applyToContent: WhenScalingOptions_APPLY_TO_CONTENT;
  /**
   * Apply scaling to the item's content.
   */
  readonly applytocontent: WhenScalingOptions_APPLY_TO_CONTENT;

  /**
   * Adjust the scaling percentage of the item's transform.
   */
  readonly ADJUST_SCALING_PERCENTAGE: WhenScalingOptions_ADJUST_SCALING_PERCENTAGE;
  /**
   * Adjust the scaling percentage of the item's transform.
   */
  readonly adjustScalingPercentage: WhenScalingOptions_ADJUST_SCALING_PERCENTAGE;
  /**
   * Adjust the scaling percentage of the item's transform.
   */
  readonly adjustscalingpercentage: WhenScalingOptions_ADJUST_SCALING_PERCENTAGE;

}
