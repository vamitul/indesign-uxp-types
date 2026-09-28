/**
 * TableCaptionPositionOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __TableCaptionPositionOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface TableCaptionPositionOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<TableCaptionPositionOptions>): boolean;

  /**
   * @internal **WARNING:** `__TableCaptionPositionOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__TableCaptionPositionOptions]: never;
}


/**
 * Places the caption above the table.
 */
interface TableCaptionPositionOptions_BEFORE_TABLE extends TableCaptionPositionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1415725890;
}

/**
 * Places the caption below the table.
 */
interface TableCaptionPositionOptions_AFTER_TABLE extends TableCaptionPositionOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1415725889;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Where a table's caption sits relative to the table.
 */
export declare namespace TableCaptionPositionOptions {
/**
 * Places the caption above the table.
 */
type BEFORE_TABLE = TableCaptionPositionOptions_BEFORE_TABLE;

/**
 * Places the caption below the table.
 */
type AFTER_TABLE = TableCaptionPositionOptions_AFTER_TABLE;

}
/**
 * Where a table's caption sits relative to the table.
 */
export declare const TableCaptionPositionOptions: typeof Enumeration & {

  /**
   * Places the caption above the table.
   */
  readonly beforeTable: TableCaptionPositionOptions_BEFORE_TABLE;
  /**
   * Places the caption above the table.
   */
  readonly beforetable: TableCaptionPositionOptions_BEFORE_TABLE;
  /**
   * Places the caption above the table.
   */
  readonly BEFORE_TABLE: TableCaptionPositionOptions_BEFORE_TABLE;

  /**
   * Places the caption below the table.
   */
  readonly afterTable: TableCaptionPositionOptions_AFTER_TABLE;
  /**
   * Places the caption below the table.
   */
  readonly aftertable: TableCaptionPositionOptions_AFTER_TABLE;
  /**
   * Places the caption below the table.
   */
  readonly AFTER_TABLE: TableCaptionPositionOptions_AFTER_TABLE;

}
