/**
 * DimensionsConstraints.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __DimensionsConstraints: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface DimensionsConstraints extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<DimensionsConstraints>): boolean;

  /**
   * @internal **WARNING:** `__DimensionsConstraints` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__DimensionsConstraints]: never;
}


/**
 * The dimension remains fixed relative to the parent.
 */
interface DimensionsConstraints_FIXED_DIMENSION extends DimensionsConstraints {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1145267817;
}

/**
 * The dimension can vary relative to the parent.
 */
interface DimensionsConstraints_FLEXIBLE_DIMENSION extends DimensionsConstraints {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1145267820;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Dimension constraints for the object-based layout rule.
 */
export declare namespace DimensionsConstraints {
/**
 * The dimension remains fixed relative to the parent.
 */
type FIXED_DIMENSION = DimensionsConstraints_FIXED_DIMENSION;

/**
 * The dimension can vary relative to the parent.
 */
type FLEXIBLE_DIMENSION = DimensionsConstraints_FLEXIBLE_DIMENSION;

}
/**
 * Dimension constraints for the object-based layout rule.
 */
export declare const DimensionsConstraints: typeof Enumeration & {

  /**
   * The dimension remains fixed relative to the parent.
   */
  readonly FIXED_DIMENSION: DimensionsConstraints_FIXED_DIMENSION;
  /**
   * The dimension remains fixed relative to the parent.
   */
  readonly fixedDimension: DimensionsConstraints_FIXED_DIMENSION;
  /**
   * The dimension remains fixed relative to the parent.
   */
  readonly fixeddimension: DimensionsConstraints_FIXED_DIMENSION;

  /**
   * The dimension can vary relative to the parent.
   */
  readonly FLEXIBLE_DIMENSION: DimensionsConstraints_FLEXIBLE_DIMENSION;
  /**
   * The dimension can vary relative to the parent.
   */
  readonly flexibleDimension: DimensionsConstraints_FLEXIBLE_DIMENSION;
  /**
   * The dimension can vary relative to the parent.
   */
  readonly flexibledimension: DimensionsConstraints_FLEXIBLE_DIMENSION;

}
