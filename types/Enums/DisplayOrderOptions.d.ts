/**
 * DisplayOrderOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __DisplayOrderOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface DisplayOrderOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<DisplayOrderOptions>): boolean;

  /**
   * @internal **WARNING:** `__DisplayOrderOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__DisplayOrderOptions]: never;
}


/**
 * Order by rows.
 */
interface DisplayOrderOptions_ORDER_BY_ROWS extends DisplayOrderOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1652118103;
}

/**
 * Order by columns.
 */
interface DisplayOrderOptions_ORDER_BY_COLUMNS extends DisplayOrderOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1652114254;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Values to specify the order table cells will display in story and galley views.
 */
export declare namespace DisplayOrderOptions {
/**
 * Order by rows.
 */
type ORDER_BY_ROWS = DisplayOrderOptions_ORDER_BY_ROWS;

/**
 * Order by columns.
 */
type ORDER_BY_COLUMNS = DisplayOrderOptions_ORDER_BY_COLUMNS;

}
/**
 * Values to specify the order table cells will display in story and galley views.
 */
export declare const DisplayOrderOptions: typeof Enumeration & {

  /**
   * Order by rows.
   */
  readonly ORDER_BY_ROWS: DisplayOrderOptions_ORDER_BY_ROWS;
  /**
   * Order by rows.
   */
  readonly orderByRows: DisplayOrderOptions_ORDER_BY_ROWS;
  /**
   * Order by rows.
   */
  readonly orderbyrows: DisplayOrderOptions_ORDER_BY_ROWS;

  /**
   * Order by columns.
   */
  readonly ORDER_BY_COLUMNS: DisplayOrderOptions_ORDER_BY_COLUMNS;
  /**
   * Order by columns.
   */
  readonly orderByColumns: DisplayOrderOptions_ORDER_BY_COLUMNS;
  /**
   * Order by columns.
   */
  readonly orderbycolumns: DisplayOrderOptions_ORDER_BY_COLUMNS;

}
