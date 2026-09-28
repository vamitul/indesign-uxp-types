/**
 * LineSpacingType.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __LineSpacingType: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface LineSpacingType extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<LineSpacingType>): boolean;

  /**
   * @internal **WARNING:** `__LineSpacingType` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__LineSpacingType]: never;
}


/**
 * Single line spacing.
 */
interface LineSpacingType_SINGLE_SPACE extends LineSpacingType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936282480;
}

/**
 * One-and-a-half line spacing.
 */
interface LineSpacingType_ONE_AND_HALF_SPACE extends LineSpacingType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1866549363;
}

/**
 * Double line spacing.
 */
interface LineSpacingType_DOUBLE_SPACE extends LineSpacingType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1682068336;
}

/**
 * Triple line spacing.
 */
interface LineSpacingType_TRIPLE_SPACE extends LineSpacingType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1951552368;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The line-spacing multiple applied to text, expressed relative to single
 * spacing.
 */
export declare namespace LineSpacingType {
/**
 * Single line spacing.
 */
type SINGLE_SPACE = LineSpacingType_SINGLE_SPACE;

/**
 * One-and-a-half line spacing.
 */
type ONE_AND_HALF_SPACE = LineSpacingType_ONE_AND_HALF_SPACE;

/**
 * Double line spacing.
 */
type DOUBLE_SPACE = LineSpacingType_DOUBLE_SPACE;

/**
 * Triple line spacing.
 */
type TRIPLE_SPACE = LineSpacingType_TRIPLE_SPACE;

}
/**
 * The line-spacing multiple applied to text, expressed relative to single
 * spacing.
 */
export declare const LineSpacingType: typeof Enumeration & {

  /**
   * Single line spacing.
   */
  readonly SINGLE_SPACE: LineSpacingType_SINGLE_SPACE;
  /**
   * Single line spacing.
   */
  readonly singleSpace: LineSpacingType_SINGLE_SPACE;
  /**
   * Single line spacing.
   */
  readonly singlespace: LineSpacingType_SINGLE_SPACE;

  /**
   * One-and-a-half line spacing.
   */
  readonly ONE_AND_HALF_SPACE: LineSpacingType_ONE_AND_HALF_SPACE;
  /**
   * One-and-a-half line spacing.
   */
  readonly oneAndHalfSpace: LineSpacingType_ONE_AND_HALF_SPACE;
  /**
   * One-and-a-half line spacing.
   */
  readonly oneandhalfspace: LineSpacingType_ONE_AND_HALF_SPACE;

  /**
   * Double line spacing.
   */
  readonly DOUBLE_SPACE: LineSpacingType_DOUBLE_SPACE;
  /**
   * Double line spacing.
   */
  readonly doubleSpace: LineSpacingType_DOUBLE_SPACE;
  /**
   * Double line spacing.
   */
  readonly doublespace: LineSpacingType_DOUBLE_SPACE;

  /**
   * Triple line spacing.
   */
  readonly TRIPLE_SPACE: LineSpacingType_TRIPLE_SPACE;
  /**
   * Triple line spacing.
   */
  readonly tripleSpace: LineSpacingType_TRIPLE_SPACE;
  /**
   * Triple line spacing.
   */
  readonly triplespace: LineSpacingType_TRIPLE_SPACE;

}
