/**
 * RowTypes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __RowTypes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface RowTypes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<RowTypes>): boolean;

  /**
   * @internal **WARNING:** `__RowTypes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__RowTypes]: never;
}


/**
 * Makes the row a body row.
 */
interface RowTypes_BODY_ROW extends RowTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1161982583;
}

/**
 * Makes the row a header row. Note: When setting row type as header row, the row must be either the top row in the table or adjacent to an existing header row.
 */
interface RowTypes_HEADER_ROW extends RowTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1162375799;
}

/**
 * Makes the row a footer row. Note: When setting row type as footer row, the row must be either the bottom row in the table or adjacent to an existing footer row.
 */
interface RowTypes_FOOTER_ROW extends RowTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1162244727;
}

/**
 * (Read-only) The column's rows are of multiple types. 
 */
interface RowTypes_MIXED_STATE extends RowTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1162703479;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether a row is ordinary body content, or a header or footer repeated when the table breaks
 * across frames.
 */
export declare namespace RowTypes {
/**
 * Makes the row a body row.
 */
type BODY_ROW = RowTypes_BODY_ROW;

/**
 * Makes the row a header row. Note: When setting row type as header row, the row must be either the top row in the table or adjacent to an existing header row.
 */
type HEADER_ROW = RowTypes_HEADER_ROW;

/**
 * Makes the row a footer row. Note: When setting row type as footer row, the row must be either the bottom row in the table or adjacent to an existing footer row.
 */
type FOOTER_ROW = RowTypes_FOOTER_ROW;

/**
 * (Read-only) The column's rows are of multiple types. 
 */
type MIXED_STATE = RowTypes_MIXED_STATE;

}
/**
 * Whether a row is ordinary body content, or a header or footer repeated when the table breaks
 * across frames.
 */
export declare const RowTypes: typeof Enumeration & {

  /**
   * Makes the row a body row.
   */
  readonly BODY_ROW: RowTypes_BODY_ROW;
  /**
   * Makes the row a body row.
   */
  readonly bodyRow: RowTypes_BODY_ROW;
  /**
   * Makes the row a body row.
   */
  readonly bodyrow: RowTypes_BODY_ROW;

  /**
   * Makes the row a header row. Note: When setting row type as header row, the row must be either the top row in the table or adjacent to an existing header row.
   */
  readonly HEADER_ROW: RowTypes_HEADER_ROW;
  /**
   * Makes the row a header row. Note: When setting row type as header row, the row must be either the top row in the table or adjacent to an existing header row.
   */
  readonly headerRow: RowTypes_HEADER_ROW;
  /**
   * Makes the row a header row. Note: When setting row type as header row, the row must be either the top row in the table or adjacent to an existing header row.
   */
  readonly headerrow: RowTypes_HEADER_ROW;

  /**
   * Makes the row a footer row. Note: When setting row type as footer row, the row must be either the bottom row in the table or adjacent to an existing footer row.
   */
  readonly FOOTER_ROW: RowTypes_FOOTER_ROW;
  /**
   * Makes the row a footer row. Note: When setting row type as footer row, the row must be either the bottom row in the table or adjacent to an existing footer row.
   */
  readonly footerRow: RowTypes_FOOTER_ROW;
  /**
   * Makes the row a footer row. Note: When setting row type as footer row, the row must be either the bottom row in the table or adjacent to an existing footer row.
   */
  readonly footerrow: RowTypes_FOOTER_ROW;

  /**
   * (Read-only) The column's rows are of multiple types. 
   */
  readonly MIXED_STATE: RowTypes_MIXED_STATE;
  /**
   * (Read-only) The column's rows are of multiple types. 
   */
  readonly mixedState: RowTypes_MIXED_STATE;
  /**
   * (Read-only) The column's rows are of multiple types. 
   */
  readonly mixedstate: RowTypes_MIXED_STATE;

}
