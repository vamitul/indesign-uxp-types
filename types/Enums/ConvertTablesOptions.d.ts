/**
 * ConvertTablesOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ConvertTablesOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ConvertTablesOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ConvertTablesOptions>): boolean;

  /**
   * @internal **WARNING:** `__ConvertTablesOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ConvertTablesOptions]: never;
}


/**
 * Converts tables to basic, unformatted tables.
 */
interface ConvertTablesOptions_UNFORMATTED_TABLE extends ConvertTablesOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1396921684;
}

/**
 * Convert tables to unformatted, tab-delimited text.
 */
interface ConvertTablesOptions_UNFORMATTED_TABBED_TEXT extends ConvertTablesOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1398101076;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for converting tables.
 */
export declare namespace ConvertTablesOptions {
/**
 * Converts tables to basic, unformatted tables.
 */
type UNFORMATTED_TABLE = ConvertTablesOptions_UNFORMATTED_TABLE;

/**
 * Convert tables to unformatted, tab-delimited text.
 */
type UNFORMATTED_TABBED_TEXT = ConvertTablesOptions_UNFORMATTED_TABBED_TEXT;

}
/**
 * Options for converting tables.
 */
export declare const ConvertTablesOptions: typeof Enumeration & {

  /**
   * Converts tables to basic, unformatted tables.
   */
  readonly UNFORMATTED_TABLE: ConvertTablesOptions_UNFORMATTED_TABLE;
  /**
   * Converts tables to basic, unformatted tables.
   */
  readonly unformattedTable: ConvertTablesOptions_UNFORMATTED_TABLE;
  /**
   * Converts tables to basic, unformatted tables.
   */
  readonly unformattedtable: ConvertTablesOptions_UNFORMATTED_TABLE;

  /**
   * Convert tables to unformatted, tab-delimited text.
   */
  readonly UNFORMATTED_TABBED_TEXT: ConvertTablesOptions_UNFORMATTED_TABBED_TEXT;
  /**
   * Convert tables to unformatted, tab-delimited text.
   */
  readonly unformattedTabbedText: ConvertTablesOptions_UNFORMATTED_TABBED_TEXT;
  /**
   * Convert tables to unformatted, tab-delimited text.
   */
  readonly unformattedtabbedtext: ConvertTablesOptions_UNFORMATTED_TABBED_TEXT;

}
