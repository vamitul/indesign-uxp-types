/**
 * PointType.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PointType: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PointType extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PointType>): boolean;

  /**
   * @internal **WARNING:** `__PointType` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PointType]: never;
}


/**
 * The point is a smooth point, it has two direction lines which are parallel.
 */
interface PointType_SMOOTH extends PointType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936553064;
}

/**
 * The point is a corner point, it has either one direction line, or two independent direction lines.
 */
interface PointType_CORNER extends PointType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1668443762;
}

/**
 * The point is a plain point, it has no direction lines.
 */
interface PointType_PLAIN extends PointType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886151022;
}

/**
 * A special type of smooth point with two direction lines of equal length.
 */
interface PointType_SYMMETRICAL extends PointType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1937337709;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * How a path point's direction lines behave, which determines whether the path curves smoothly
 * through it or turns a corner.
 */
export declare namespace PointType {
/**
 * The point is a smooth point, it has two direction lines which are parallel.
 */
type SMOOTH = PointType_SMOOTH;

/**
 * The point is a corner point, it has either one direction line, or two independent direction lines.
 */
type CORNER = PointType_CORNER;

/**
 * The point is a plain point, it has no direction lines.
 */
type PLAIN = PointType_PLAIN;

/**
 * A special type of smooth point with two direction lines of equal length.
 */
type SYMMETRICAL = PointType_SYMMETRICAL;

}
/**
 * How a path point's direction lines behave, which determines whether the path curves smoothly
 * through it or turns a corner.
 */
export declare const PointType: typeof Enumeration & {

  /**
   * The point is a smooth point, it has two direction lines which are parallel.
   */
  readonly SMOOTH: PointType_SMOOTH;
  /**
   * The point is a smooth point, it has two direction lines which are parallel.
   */
  readonly smooth: PointType_SMOOTH;

  /**
   * The point is a corner point, it has either one direction line, or two independent direction lines.
   */
  readonly CORNER: PointType_CORNER;
  /**
   * The point is a corner point, it has either one direction line, or two independent direction lines.
   */
  readonly corner: PointType_CORNER;

  /**
   * The point is a plain point, it has no direction lines.
   */
  readonly PLAIN: PointType_PLAIN;
  /**
   * The point is a plain point, it has no direction lines.
   */
  readonly plain: PointType_PLAIN;

  /**
   * A special type of smooth point with two direction lines of equal length.
   */
  readonly SYMMETRICAL: PointType_SYMMETRICAL;
  /**
   * A special type of smooth point with two direction lines of equal length.
   */
  readonly symmetrical: PointType_SYMMETRICAL;

}
