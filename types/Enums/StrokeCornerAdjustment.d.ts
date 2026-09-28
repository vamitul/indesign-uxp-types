/**
 * StrokeCornerAdjustment.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __StrokeCornerAdjustment: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface StrokeCornerAdjustment extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<StrokeCornerAdjustment>): boolean;

  /**
   * @internal **WARNING:** `__StrokeCornerAdjustment` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__StrokeCornerAdjustment]: never;
}


/**
 * No adjustment.
 */
interface StrokeCornerAdjustment_NONE extends StrokeCornerAdjustment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}

/**
 * Changes the length of dashes so that dashes always occur at path ends and corners; maintains set gap length. Note: Can cause dashes to be different lengths on shapes whose sides are of different lengths, such as rectangles.
 */
interface StrokeCornerAdjustment_DASHES extends StrokeCornerAdjustment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1162113896;
}

/**
 * Changes the length of gaps so that dashes or dots always occur at ends and corners; maintains dash length or dot diameter. Note: Can cause gaps to be different lengths on shapes whose sides are of different lengths, such as rectangles. 
 */
interface StrokeCornerAdjustment_GAPS extends StrokeCornerAdjustment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1164406899;
}

/**
 * Adjusts both dashes and gaps to cover corners and end points. Note: Causes dash and gap sizes to be consistent on all sides of the shape. 
 */
interface StrokeCornerAdjustment_DASHES_AND_GAPS extends StrokeCornerAdjustment {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1148405616;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The automatic adjustment to make to the pattern of a dashed or dotted stroke to cover corner points in a path.
 */
export declare namespace StrokeCornerAdjustment {
/**
 * No adjustment.
 */
type NONE = StrokeCornerAdjustment_NONE;

/**
 * Changes the length of dashes so that dashes always occur at path ends and corners; maintains set gap length. Note: Can cause dashes to be different lengths on shapes whose sides are of different lengths, such as rectangles.
 */
type DASHES = StrokeCornerAdjustment_DASHES;

/**
 * Changes the length of gaps so that dashes or dots always occur at ends and corners; maintains dash length or dot diameter. Note: Can cause gaps to be different lengths on shapes whose sides are of different lengths, such as rectangles. 
 */
type GAPS = StrokeCornerAdjustment_GAPS;

/**
 * Adjusts both dashes and gaps to cover corners and end points. Note: Causes dash and gap sizes to be consistent on all sides of the shape. 
 */
type DASHES_AND_GAPS = StrokeCornerAdjustment_DASHES_AND_GAPS;

}
/**
 * The automatic adjustment to make to the pattern of a dashed or dotted stroke to cover corner points in a path.
 */
export declare const StrokeCornerAdjustment: typeof Enumeration & {

  /**
   * No adjustment.
   */
  readonly NONE: StrokeCornerAdjustment_NONE;
  /**
   * No adjustment.
   */
  readonly none: StrokeCornerAdjustment_NONE;

  /**
   * Changes the length of dashes so that dashes always occur at path ends and corners; maintains set gap length. Note: Can cause dashes to be different lengths on shapes whose sides are of different lengths, such as rectangles.
   */
  readonly DASHES: StrokeCornerAdjustment_DASHES;
  /**
   * Changes the length of dashes so that dashes always occur at path ends and corners; maintains set gap length. Note: Can cause dashes to be different lengths on shapes whose sides are of different lengths, such as rectangles.
   */
  readonly dashes: StrokeCornerAdjustment_DASHES;

  /**
   * Changes the length of gaps so that dashes or dots always occur at ends and corners; maintains dash length or dot diameter. Note: Can cause gaps to be different lengths on shapes whose sides are of different lengths, such as rectangles. 
   */
  readonly GAPS: StrokeCornerAdjustment_GAPS;
  /**
   * Changes the length of gaps so that dashes or dots always occur at ends and corners; maintains dash length or dot diameter. Note: Can cause gaps to be different lengths on shapes whose sides are of different lengths, such as rectangles. 
   */
  readonly gaps: StrokeCornerAdjustment_GAPS;

  /**
   * Adjusts both dashes and gaps to cover corners and end points. Note: Causes dash and gap sizes to be consistent on all sides of the shape. 
   */
  readonly DASHES_AND_GAPS: StrokeCornerAdjustment_DASHES_AND_GAPS;
  /**
   * Adjusts both dashes and gaps to cover corners and end points. Note: Causes dash and gap sizes to be consistent on all sides of the shape. 
   */
  readonly dashesAndGaps: StrokeCornerAdjustment_DASHES_AND_GAPS;
  /**
   * Adjusts both dashes and gaps to cover corners and end points. Note: Causes dash and gap sizes to be consistent on all sides of the shape. 
   */
  readonly dashesandgaps: StrokeCornerAdjustment_DASHES_AND_GAPS;

}
