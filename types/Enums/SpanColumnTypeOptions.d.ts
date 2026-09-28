/**
 * SpanColumnTypeOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __SpanColumnTypeOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface SpanColumnTypeOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<SpanColumnTypeOptions>): boolean;

  /**
   * @internal **WARNING:** `__SpanColumnTypeOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__SpanColumnTypeOptions]: never;
}


/**
 * Paragraph is a single column.
 */
interface SpanColumnTypeOptions_SINGLE_COLUMN extends SpanColumnTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1163092844;
}

/**
 * Paragraph spans the columns.
 */
interface SpanColumnTypeOptions_SPAN_COLUMNS extends SpanColumnTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936745326;
}

/**
 * Paragraph splits the columns.
 */
interface SpanColumnTypeOptions_SPLIT_COLUMNS extends SpanColumnTypeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1937007470;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether a paragraph sits in one column, spans across columns, or splits into several.
 */
export declare namespace SpanColumnTypeOptions {
/**
 * Paragraph is a single column.
 */
type SINGLE_COLUMN = SpanColumnTypeOptions_SINGLE_COLUMN;

/**
 * Paragraph spans the columns.
 */
type SPAN_COLUMNS = SpanColumnTypeOptions_SPAN_COLUMNS;

/**
 * Paragraph splits the columns.
 */
type SPLIT_COLUMNS = SpanColumnTypeOptions_SPLIT_COLUMNS;

}
/**
 * Whether a paragraph sits in one column, spans across columns, or splits into several.
 */
export declare const SpanColumnTypeOptions: typeof Enumeration & {

  /**
   * Paragraph is a single column.
   */
  readonly SINGLE_COLUMN: SpanColumnTypeOptions_SINGLE_COLUMN;
  /**
   * Paragraph is a single column.
   */
  readonly singleColumn: SpanColumnTypeOptions_SINGLE_COLUMN;
  /**
   * Paragraph is a single column.
   */
  readonly singlecolumn: SpanColumnTypeOptions_SINGLE_COLUMN;

  /**
   * Paragraph spans the columns.
   */
  readonly SPAN_COLUMNS: SpanColumnTypeOptions_SPAN_COLUMNS;
  /**
   * Paragraph spans the columns.
   */
  readonly spanColumns: SpanColumnTypeOptions_SPAN_COLUMNS;
  /**
   * Paragraph spans the columns.
   */
  readonly spancolumns: SpanColumnTypeOptions_SPAN_COLUMNS;

  /**
   * Paragraph splits the columns.
   */
  readonly SPLIT_COLUMNS: SpanColumnTypeOptions_SPLIT_COLUMNS;
  /**
   * Paragraph splits the columns.
   */
  readonly splitColumns: SpanColumnTypeOptions_SPLIT_COLUMNS;
  /**
   * Paragraph splits the columns.
   */
  readonly splitcolumns: SpanColumnTypeOptions_SPLIT_COLUMNS;

}
