/**
 * ResizeConstraints.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ResizeConstraints: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ResizeConstraints extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ResizeConstraints>): boolean;

  /**
   * @internal **WARNING:** `__ResizeConstraints` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ResizeConstraints]: never;
}


/**
 * Keep current value.
 */
interface ResizeConstraints_KEEP_CURRENT_VALUE extends ResizeConstraints {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1264939094;
}

/**
 * Keep current proportions.
 */
interface ResizeConstraints_KEEP_CURRENT_PROPORTIONS extends ResizeConstraints {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1264939088;
}

/**
 * Tall proportions.
 */
interface ResizeConstraints_TALL_PROPORTIONS extends ResizeConstraints {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1415670864;
}

/**
 * Wide proportions.
 */
interface ResizeConstraints_WIDE_PROPORTIONS extends ResizeConstraints {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1466524752;
}

/**
 * Inverse proportions.
 */
interface ResizeConstraints_INVERSE_PROPORTIONS extends ResizeConstraints {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1231976016;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Which dimensions a resize is allowed to change.
 */
export declare namespace ResizeConstraints {
/**
 * Keep current value.
 */
type KEEP_CURRENT_VALUE = ResizeConstraints_KEEP_CURRENT_VALUE;

/**
 * Keep current proportions.
 */
type KEEP_CURRENT_PROPORTIONS = ResizeConstraints_KEEP_CURRENT_PROPORTIONS;

/**
 * Tall proportions.
 */
type TALL_PROPORTIONS = ResizeConstraints_TALL_PROPORTIONS;

/**
 * Wide proportions.
 */
type WIDE_PROPORTIONS = ResizeConstraints_WIDE_PROPORTIONS;

/**
 * Inverse proportions.
 */
type INVERSE_PROPORTIONS = ResizeConstraints_INVERSE_PROPORTIONS;

}
/**
 * Which dimensions a resize is allowed to change.
 */
export declare const ResizeConstraints: typeof Enumeration & {

  /**
   * Keep current value.
   */
  readonly KEEP_CURRENT_VALUE: ResizeConstraints_KEEP_CURRENT_VALUE;
  /**
   * Keep current value.
   */
  readonly keepCurrentValue: ResizeConstraints_KEEP_CURRENT_VALUE;
  /**
   * Keep current value.
   */
  readonly keepcurrentvalue: ResizeConstraints_KEEP_CURRENT_VALUE;

  /**
   * Keep current proportions.
   */
  readonly KEEP_CURRENT_PROPORTIONS: ResizeConstraints_KEEP_CURRENT_PROPORTIONS;
  /**
   * Keep current proportions.
   */
  readonly keepCurrentProportions: ResizeConstraints_KEEP_CURRENT_PROPORTIONS;
  /**
   * Keep current proportions.
   */
  readonly keepcurrentproportions: ResizeConstraints_KEEP_CURRENT_PROPORTIONS;

  /**
   * Tall proportions.
   */
  readonly TALL_PROPORTIONS: ResizeConstraints_TALL_PROPORTIONS;
  /**
   * Tall proportions.
   */
  readonly tallProportions: ResizeConstraints_TALL_PROPORTIONS;
  /**
   * Tall proportions.
   */
  readonly tallproportions: ResizeConstraints_TALL_PROPORTIONS;

  /**
   * Wide proportions.
   */
  readonly WIDE_PROPORTIONS: ResizeConstraints_WIDE_PROPORTIONS;
  /**
   * Wide proportions.
   */
  readonly wideProportions: ResizeConstraints_WIDE_PROPORTIONS;
  /**
   * Wide proportions.
   */
  readonly wideproportions: ResizeConstraints_WIDE_PROPORTIONS;

  /**
   * Inverse proportions.
   */
  readonly INVERSE_PROPORTIONS: ResizeConstraints_INVERSE_PROPORTIONS;
  /**
   * Inverse proportions.
   */
  readonly inverseProportions: ResizeConstraints_INVERSE_PROPORTIONS;
  /**
   * Inverse proportions.
   */
  readonly inverseproportions: ResizeConstraints_INVERSE_PROPORTIONS;

}
