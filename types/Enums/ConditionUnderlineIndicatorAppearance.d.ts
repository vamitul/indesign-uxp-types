/**
 * ConditionUnderlineIndicatorAppearance.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ConditionUnderlineIndicatorAppearance: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ConditionUnderlineIndicatorAppearance extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ConditionUnderlineIndicatorAppearance>): boolean;

  /**
   * @internal **WARNING:** `__ConditionUnderlineIndicatorAppearance` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ConditionUnderlineIndicatorAppearance]: never;
}


/**
 * Wavy underline.
 */
interface ConditionUnderlineIndicatorAppearance_WAVY extends ConditionUnderlineIndicatorAppearance {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1937208953;
}

/**
 * Solid underline.
 */
interface ConditionUnderlineIndicatorAppearance_SOLID extends ConditionUnderlineIndicatorAppearance {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936682084;
}

/**
 * Dashed underline.
 */
interface ConditionUnderlineIndicatorAppearance_DASHED extends ConditionUnderlineIndicatorAppearance {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684108136;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for the condition underline indicator appearance.
 */
export declare namespace ConditionUnderlineIndicatorAppearance {
/**
 * Wavy underline.
 */
type WAVY = ConditionUnderlineIndicatorAppearance_WAVY;

/**
 * Solid underline.
 */
type SOLID = ConditionUnderlineIndicatorAppearance_SOLID;

/**
 * Dashed underline.
 */
type DASHED = ConditionUnderlineIndicatorAppearance_DASHED;

}
/**
 * Options for the condition underline indicator appearance.
 */
export declare const ConditionUnderlineIndicatorAppearance: typeof Enumeration & {

  /**
   * Wavy underline.
   */
  readonly WAVY: ConditionUnderlineIndicatorAppearance_WAVY;
  /**
   * Wavy underline.
   */
  readonly wavy: ConditionUnderlineIndicatorAppearance_WAVY;

  /**
   * Solid underline.
   */
  readonly SOLID: ConditionUnderlineIndicatorAppearance_SOLID;
  /**
   * Solid underline.
   */
  readonly solid: ConditionUnderlineIndicatorAppearance_SOLID;

  /**
   * Dashed underline.
   */
  readonly DASHED: ConditionUnderlineIndicatorAppearance_DASHED;
  /**
   * Dashed underline.
   */
  readonly dashed: ConditionUnderlineIndicatorAppearance_DASHED;

}
