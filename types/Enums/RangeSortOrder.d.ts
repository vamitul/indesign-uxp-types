/**
 * RangeSortOrder.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __RangeSortOrder: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface RangeSortOrder extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<RangeSortOrder>): boolean;

  /**
   * @internal **WARNING:** `__RangeSortOrder` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__RangeSortOrder]: never;
}


/**
 * Do not sort the ranges.
 */
interface RangeSortOrder_NO_SORT extends RangeSortOrder {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852797812;
}

/**
 * Sort the ranges in ascending order.
 */
interface RangeSortOrder_ASCENDING_SORT extends RangeSortOrder {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1634952307;
}

/**
 * Sort the ranges in descending order.
 */
interface RangeSortOrder_DESCENDING_SORT extends RangeSortOrder {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1685287796;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Sort order for hyperlink ranges.
 */
export declare namespace RangeSortOrder {
/**
 * Do not sort the ranges.
 */
type NO_SORT = RangeSortOrder_NO_SORT;

/**
 * Sort the ranges in ascending order.
 */
type ASCENDING_SORT = RangeSortOrder_ASCENDING_SORT;

/**
 * Sort the ranges in descending order.
 */
type DESCENDING_SORT = RangeSortOrder_DESCENDING_SORT;

}
/**
 * Sort order for hyperlink ranges.
 */
export declare const RangeSortOrder: typeof Enumeration & {

  /**
   * Do not sort the ranges.
   */
  readonly NO_SORT: RangeSortOrder_NO_SORT;
  /**
   * Do not sort the ranges.
   */
  readonly noSort: RangeSortOrder_NO_SORT;
  /**
   * Do not sort the ranges.
   */
  readonly nosort: RangeSortOrder_NO_SORT;

  /**
   * Sort the ranges in ascending order.
   */
  readonly ASCENDING_SORT: RangeSortOrder_ASCENDING_SORT;
  /**
   * Sort the ranges in ascending order.
   */
  readonly ascendingSort: RangeSortOrder_ASCENDING_SORT;
  /**
   * Sort the ranges in ascending order.
   */
  readonly ascendingsort: RangeSortOrder_ASCENDING_SORT;

  /**
   * Sort the ranges in descending order.
   */
  readonly DESCENDING_SORT: RangeSortOrder_DESCENDING_SORT;
  /**
   * Sort the ranges in descending order.
   */
  readonly descendingSort: RangeSortOrder_DESCENDING_SORT;
  /**
   * Sort the ranges in descending order.
   */
  readonly descendingsort: RangeSortOrder_DESCENDING_SORT;

}
