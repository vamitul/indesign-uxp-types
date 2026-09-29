/**
 * BoundingBoxLimits.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __BoundingBoxLimits: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface BoundingBoxLimits extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<BoundingBoxLimits>): boolean;

  /**
   * @internal **WARNING:** `__BoundingBoxLimits` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__BoundingBoxLimits]: never;
}


/**
 * Includes the stroke weight in the bounding box.
 */
interface BoundingBoxLimits_OUTER_STROKE_BOUNDS extends BoundingBoxLimits {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1768844081;
}

/**
 * Uses only the geometric path, excluding stroke weight, in the bounding box.
 */
interface BoundingBoxLimits_GEOMETRIC_PATH_BOUNDS extends BoundingBoxLimits {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1768844080;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Specifies which bounding box a transform or resize operation applies to: the
 * geometric path or the outer edge of the stroke.
 */
export declare namespace BoundingBoxLimits {
/**
 * Includes the stroke weight in the bounding box.
 */
type OUTER_STROKE_BOUNDS = BoundingBoxLimits_OUTER_STROKE_BOUNDS;

/**
 * Uses only the geometric path, excluding stroke weight, in the bounding box.
 */
type GEOMETRIC_PATH_BOUNDS = BoundingBoxLimits_GEOMETRIC_PATH_BOUNDS;

}
/**
 * Specifies which bounding box a transform or resize operation applies to: the
 * geometric path or the outer edge of the stroke.
 */
export declare const BoundingBoxLimits: typeof Enumeration & {

  /**
   * Includes the stroke weight in the bounding box.
   */
  readonly OUTER_STROKE_BOUNDS: BoundingBoxLimits_OUTER_STROKE_BOUNDS;
  /**
   * Includes the stroke weight in the bounding box.
   */
  readonly outerStrokeBounds: BoundingBoxLimits_OUTER_STROKE_BOUNDS;
  /**
   * Includes the stroke weight in the bounding box.
   */
  readonly outerstrokebounds: BoundingBoxLimits_OUTER_STROKE_BOUNDS;

  /**
   * Uses only the geometric path, excluding stroke weight, in the bounding box.
   */
  readonly GEOMETRIC_PATH_BOUNDS: BoundingBoxLimits_GEOMETRIC_PATH_BOUNDS;
  /**
   * Uses only the geometric path, excluding stroke weight, in the bounding box.
   */
  readonly geometricPathBounds: BoundingBoxLimits_GEOMETRIC_PATH_BOUNDS;
  /**
   * Uses only the geometric path, excluding stroke weight, in the bounding box.
   */
  readonly geometricpathbounds: BoundingBoxLimits_GEOMETRIC_PATH_BOUNDS;

}
