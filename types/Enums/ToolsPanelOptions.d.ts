/**
 * ToolsPanelOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ToolsPanelOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ToolsPanelOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ToolsPanelOptions>): boolean;

  /**
   * @internal **WARNING:** `__ToolsPanelOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ToolsPanelOptions]: never;
}


/**
 * Single column.
 */
interface ToolsPanelOptions_SINGLE_COLUMN extends ToolsPanelOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1163092844;
}

/**
 * Double column.
 */
interface ToolsPanelOptions_DOUBLE_COLUMN extends ToolsPanelOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1162109804;
}

/**
 * Single row.
 */
interface ToolsPanelOptions_SINGLE_ROW extends ToolsPanelOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1163096695;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * How the Tools panel arranges its icons — a single column, a double column, or a single row.
 */
export declare namespace ToolsPanelOptions {
/**
 * Single column.
 */
type SINGLE_COLUMN = ToolsPanelOptions_SINGLE_COLUMN;

/**
 * Double column.
 */
type DOUBLE_COLUMN = ToolsPanelOptions_DOUBLE_COLUMN;

/**
 * Single row.
 */
type SINGLE_ROW = ToolsPanelOptions_SINGLE_ROW;

}
/**
 * How the Tools panel arranges its icons — a single column, a double column, or a single row.
 */
export declare const ToolsPanelOptions: typeof Enumeration & {

  /**
   * Single column.
   */
  readonly SINGLE_COLUMN: ToolsPanelOptions_SINGLE_COLUMN;
  /**
   * Single column.
   */
  readonly singleColumn: ToolsPanelOptions_SINGLE_COLUMN;
  /**
   * Single column.
   */
  readonly singlecolumn: ToolsPanelOptions_SINGLE_COLUMN;

  /**
   * Double column.
   */
  readonly DOUBLE_COLUMN: ToolsPanelOptions_DOUBLE_COLUMN;
  /**
   * Double column.
   */
  readonly doubleColumn: ToolsPanelOptions_DOUBLE_COLUMN;
  /**
   * Double column.
   */
  readonly doublecolumn: ToolsPanelOptions_DOUBLE_COLUMN;

  /**
   * Single row.
   */
  readonly SINGLE_ROW: ToolsPanelOptions_SINGLE_ROW;
  /**
   * Single row.
   */
  readonly singleRow: ToolsPanelOptions_SINGLE_ROW;
  /**
   * Single row.
   */
  readonly singlerow: ToolsPanelOptions_SINGLE_ROW;

}
