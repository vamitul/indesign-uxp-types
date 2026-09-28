/**
 * ArrangeBy.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ArrangeBy: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ArrangeBy extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ArrangeBy>): boolean;

  /**
   * @internal **WARNING:** `__ArrangeBy` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ArrangeBy]: never;
}


/**
 * Arranges records by row.
 */
interface ArrangeBy_ROWS_FIRST extends ArrangeBy {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684886118;
}

/**
 * Arranges records by column.
 */
interface ArrangeBy_COLUMNS_FIRST extends ArrangeBy {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684882278;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The order in which to arrange records in the target document.
 */
export declare namespace ArrangeBy {
/**
 * Arranges records by row.
 */
type ROWS_FIRST = ArrangeBy_ROWS_FIRST;

/**
 * Arranges records by column.
 */
type COLUMNS_FIRST = ArrangeBy_COLUMNS_FIRST;

}
/**
 * The order in which to arrange records in the target document.
 */
export declare const ArrangeBy: typeof Enumeration & {

  /**
   * Arranges records by row.
   */
  readonly ROWS_FIRST: ArrangeBy_ROWS_FIRST;
  /**
   * Arranges records by row.
   */
  readonly rowsFirst: ArrangeBy_ROWS_FIRST;
  /**
   * Arranges records by row.
   */
  readonly rowsfirst: ArrangeBy_ROWS_FIRST;

  /**
   * Arranges records by column.
   */
  readonly COLUMNS_FIRST: ArrangeBy_COLUMNS_FIRST;
  /**
   * Arranges records by column.
   */
  readonly columnsFirst: ArrangeBy_COLUMNS_FIRST;
  /**
   * Arranges records by column.
   */
  readonly columnsfirst: ArrangeBy_COLUMNS_FIRST;

}
