/**
 * TableFormattingOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __TableFormattingOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface TableFormattingOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<TableFormattingOptions>): boolean;

  /**
   * @internal **WARNING:** `__TableFormattingOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__TableFormattingOptions]: never;
}


/**
 * Use formatting from the original spreadsheet.
 */
interface TableFormattingOptions_EXCEL_FORMATTED_TABLE extends TableFormattingOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2020361812;
}

/**
 * Convert the spreadsheet to an unformatted table.
 */
interface TableFormattingOptions_EXCEL_UNFORMATTED_TABLE extends TableFormattingOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2020365652;
}

/**
 * Convert the spreadsheet to unformatted, tab-delimited text.
 */
interface TableFormattingOptions_EXCEL_UNFORMATTED_TABBED_TEXT extends TableFormattingOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2018858068;
}

/**
 * Converts the spreadsheet to a table that is formatted only on initial import but not on update.
 */
interface TableFormattingOptions_EXCEL_FORMAT_ONLY_ONCE extends TableFormattingOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2017873748;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Formatting options for imported spreadsheets.
 */
export declare namespace TableFormattingOptions {
/**
 * Use formatting from the original spreadsheet.
 */
type EXCEL_FORMATTED_TABLE = TableFormattingOptions_EXCEL_FORMATTED_TABLE;

/**
 * Convert the spreadsheet to an unformatted table.
 */
type EXCEL_UNFORMATTED_TABLE = TableFormattingOptions_EXCEL_UNFORMATTED_TABLE;

/**
 * Convert the spreadsheet to unformatted, tab-delimited text.
 */
type EXCEL_UNFORMATTED_TABBED_TEXT = TableFormattingOptions_EXCEL_UNFORMATTED_TABBED_TEXT;

/**
 * Converts the spreadsheet to a table that is formatted only on initial import but not on update.
 */
type EXCEL_FORMAT_ONLY_ONCE = TableFormattingOptions_EXCEL_FORMAT_ONLY_ONCE;

}
/**
 * Formatting options for imported spreadsheets.
 */
export declare const TableFormattingOptions: typeof Enumeration & {

  /**
   * Use formatting from the original spreadsheet.
   */
  readonly EXCEL_FORMATTED_TABLE: TableFormattingOptions_EXCEL_FORMATTED_TABLE;
  /**
   * Use formatting from the original spreadsheet.
   */
  readonly excelFormattedTable: TableFormattingOptions_EXCEL_FORMATTED_TABLE;
  /**
   * Use formatting from the original spreadsheet.
   */
  readonly excelformattedtable: TableFormattingOptions_EXCEL_FORMATTED_TABLE;

  /**
   * Convert the spreadsheet to an unformatted table.
   */
  readonly EXCEL_UNFORMATTED_TABLE: TableFormattingOptions_EXCEL_UNFORMATTED_TABLE;
  /**
   * Convert the spreadsheet to an unformatted table.
   */
  readonly excelUnformattedTable: TableFormattingOptions_EXCEL_UNFORMATTED_TABLE;
  /**
   * Convert the spreadsheet to an unformatted table.
   */
  readonly excelunformattedtable: TableFormattingOptions_EXCEL_UNFORMATTED_TABLE;

  /**
   * Convert the spreadsheet to unformatted, tab-delimited text.
   */
  readonly EXCEL_UNFORMATTED_TABBED_TEXT: TableFormattingOptions_EXCEL_UNFORMATTED_TABBED_TEXT;
  /**
   * Convert the spreadsheet to unformatted, tab-delimited text.
   */
  readonly excelUnformattedTabbedText: TableFormattingOptions_EXCEL_UNFORMATTED_TABBED_TEXT;
  /**
   * Convert the spreadsheet to unformatted, tab-delimited text.
   */
  readonly excelunformattedtabbedtext: TableFormattingOptions_EXCEL_UNFORMATTED_TABBED_TEXT;

  /**
   * Converts the spreadsheet to a table that is formatted only on initial import but not on update.
   */
  readonly EXCEL_FORMAT_ONLY_ONCE: TableFormattingOptions_EXCEL_FORMAT_ONLY_ONCE;
  /**
   * Converts the spreadsheet to a table that is formatted only on initial import but not on update.
   */
  readonly excelFormatOnlyOnce: TableFormattingOptions_EXCEL_FORMAT_ONLY_ONCE;
  /**
   * Converts the spreadsheet to a table that is formatted only on initial import but not on update.
   */
  readonly excelformatonlyonce: TableFormattingOptions_EXCEL_FORMAT_ONLY_ONCE;

}
