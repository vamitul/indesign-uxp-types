/**
 * MarkTypes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __MarkTypes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface MarkTypes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<MarkTypes>): boolean;

  /**
   * @internal **WARNING:** `__MarkTypes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__MarkTypes]: never;
}


/**
 * Uses the default format.
 */
interface MarkTypes_DEFAULT_VALUE extends MarkTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1147563124;
}

/**
 * Uses J marks with a circle.
 */
interface MarkTypes_J_MARK_WITH_CIRCLE extends MarkTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1785558883;
}

/**
 * Uses J marks without a circle.
 */
interface MarkTypes_J_MARK_WITHOUT_CIRCLE extends MarkTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1785556579;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for printer marks formats.
 */
export declare namespace MarkTypes {
/**
 * Uses the default format.
 */
type DEFAULT_VALUE = MarkTypes_DEFAULT_VALUE;

/**
 * Uses J marks with a circle.
 */
type J_MARK_WITH_CIRCLE = MarkTypes_J_MARK_WITH_CIRCLE;

/**
 * Uses J marks without a circle.
 */
type J_MARK_WITHOUT_CIRCLE = MarkTypes_J_MARK_WITHOUT_CIRCLE;

}
/**
 * Options for printer marks formats.
 */
export declare const MarkTypes: typeof Enumeration & {

  /**
   * Uses the default format.
   */
  readonly DEFAULT_VALUE: MarkTypes_DEFAULT_VALUE;
  /**
   * Uses the default format.
   */
  readonly defaultValue: MarkTypes_DEFAULT_VALUE;
  /**
   * Uses the default format.
   */
  readonly defaultvalue: MarkTypes_DEFAULT_VALUE;

  /**
   * Uses J marks with a circle.
   */
  readonly J_MARK_WITH_CIRCLE: MarkTypes_J_MARK_WITH_CIRCLE;
  /**
   * Uses J marks with a circle.
   */
  readonly jMarkWithCircle: MarkTypes_J_MARK_WITH_CIRCLE;
  /**
   * Uses J marks with a circle.
   */
  readonly jmarkwithcircle: MarkTypes_J_MARK_WITH_CIRCLE;

  /**
   * Uses J marks without a circle.
   */
  readonly J_MARK_WITHOUT_CIRCLE: MarkTypes_J_MARK_WITHOUT_CIRCLE;
  /**
   * Uses J marks without a circle.
   */
  readonly jMarkWithoutCircle: MarkTypes_J_MARK_WITHOUT_CIRCLE;
  /**
   * Uses J marks without a circle.
   */
  readonly jmarkwithoutcircle: MarkTypes_J_MARK_WITHOUT_CIRCLE;

}
