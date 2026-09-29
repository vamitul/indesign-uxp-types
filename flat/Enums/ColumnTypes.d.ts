/**
 * ColumnTypes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ColumnTypes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ColumnTypes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ColumnTypes>): boolean;

  /**
   * @internal **WARNING:** `__ColumnTypes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ColumnTypes]: never;
}


/**
 * Makes the column a body column.
 */
interface ColumnTypes_BODY_COLUMN extends ColumnTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1161978732;
}

/**
 * Makes the column a header column, repeated when the table breaks across frames. The column must be flush with the left or right edge of the table, or adjacent to an existing header column on the same side.
 */
interface ColumnTypes_HEADER_COLUMN extends ColumnTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1162371948;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The column type.
 */
export declare namespace ColumnTypes {
/**
 * Makes the column a body column.
 */
type BODY_COLUMN = ColumnTypes_BODY_COLUMN;

/**
 * Makes the column a header column, repeated when the table breaks across frames. The column must be flush with the left or right edge of the table, or adjacent to an existing header column on the same side.
 */
type HEADER_COLUMN = ColumnTypes_HEADER_COLUMN;

}
/**
 * The column type.
 */
export declare const ColumnTypes: typeof Enumeration & {

  /**
   * Makes the column a body column.
   */
  readonly bodyColumn: ColumnTypes_BODY_COLUMN;
  /**
   * Makes the column a body column.
   */
  readonly bodycolumn: ColumnTypes_BODY_COLUMN;
  /**
   * Makes the column a body column.
   */
  readonly BODY_COLUMN: ColumnTypes_BODY_COLUMN;

  /**
   * Makes the column a header column, repeated when the table breaks across frames. The column must be flush with the left or right edge of the table, or adjacent to an existing header column on the same side.
   */
  readonly headerColumn: ColumnTypes_HEADER_COLUMN;
  /**
   * Makes the column a header column, repeated when the table breaks across frames. The column must be flush with the left or right edge of the table, or adjacent to an existing header column on the same side.
   */
  readonly headercolumn: ColumnTypes_HEADER_COLUMN;
  /**
   * Makes the column a header column, repeated when the table breaks across frames. The column must be flush with the left or right edge of the table, or adjacent to an existing header column on the same side.
   */
  readonly HEADER_COLUMN: ColumnTypes_HEADER_COLUMN;

}
