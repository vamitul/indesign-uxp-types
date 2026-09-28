/**
 * ArrowHeadAlignmentEnum.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ArrowHeadAlignmentEnum: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ArrowHeadAlignmentEnum extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ArrowHeadAlignmentEnum>): boolean;

  /**
   * @internal **WARNING:** `__ArrowHeadAlignmentEnum` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ArrowHeadAlignmentEnum]: never;
}


/**
 * The arrowhead is inside the path; path geometry changes to accommodate the arrowhead.
 */
interface ArrowHeadAlignmentEnum_INSIDE_PATH extends ArrowHeadAlignmentEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1634230633;
}

/**
 * The arrowhead is outside the path; path geometry is unaffected.
 */
interface ArrowHeadAlignmentEnum_OUTSIDE_PATH extends ArrowHeadAlignmentEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1634230639;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Arrowhead alignment types.
 */
export declare namespace ArrowHeadAlignmentEnum {
/**
 * The arrowhead is inside the path; path geometry changes to accommodate the arrowhead.
 */
type INSIDE_PATH = ArrowHeadAlignmentEnum_INSIDE_PATH;

/**
 * The arrowhead is outside the path; path geometry is unaffected.
 */
type OUTSIDE_PATH = ArrowHeadAlignmentEnum_OUTSIDE_PATH;

}
/**
 * Arrowhead alignment types.
 */
export declare const ArrowHeadAlignmentEnum: typeof Enumeration & {

  /**
   * The arrowhead is inside the path; path geometry changes to accommodate the arrowhead.
   */
  readonly INSIDE_PATH: ArrowHeadAlignmentEnum_INSIDE_PATH;
  /**
   * The arrowhead is inside the path; path geometry changes to accommodate the arrowhead.
   */
  readonly insidePath: ArrowHeadAlignmentEnum_INSIDE_PATH;
  /**
   * The arrowhead is inside the path; path geometry changes to accommodate the arrowhead.
   */
  readonly insidepath: ArrowHeadAlignmentEnum_INSIDE_PATH;

  /**
   * The arrowhead is outside the path; path geometry is unaffected.
   */
  readonly OUTSIDE_PATH: ArrowHeadAlignmentEnum_OUTSIDE_PATH;
  /**
   * The arrowhead is outside the path; path geometry is unaffected.
   */
  readonly outsidePath: ArrowHeadAlignmentEnum_OUTSIDE_PATH;
  /**
   * The arrowhead is outside the path; path geometry is unaffected.
   */
  readonly outsidepath: ArrowHeadAlignmentEnum_OUTSIDE_PATH;

}
