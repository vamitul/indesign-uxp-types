/**
 * AlignmentStyleOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __AlignmentStyleOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface AlignmentStyleOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<AlignmentStyleOptions>): boolean;

  /**
   * @internal **WARNING:** `__AlignmentStyleOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__AlignmentStyleOptions]: never;
}


/**
 * Preserves the spreadsheet's alignment.
 */
interface AlignmentStyleOptions_SPREADSHEET extends AlignmentStyleOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936749171;
}

/**
 * Left aligns cells.
 */
interface AlignmentStyleOptions_LEFT_ALIGN extends AlignmentStyleOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1818584692;
}

/**
 * Right aligns cells.
 */
interface AlignmentStyleOptions_RIGHT_ALIGN extends AlignmentStyleOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1919379572;
}

/**
 * Center aligns cells.
 */
interface AlignmentStyleOptions_CENTER_ALIGN extends AlignmentStyleOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1667591796;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Cell alignment options used when importing or converting spreadsheet data
 * into a table, controlling how cell content is horizontally aligned.
 */
export declare namespace AlignmentStyleOptions {
/**
 * Preserves the spreadsheet's alignment.
 */
type SPREADSHEET = AlignmentStyleOptions_SPREADSHEET;

/**
 * Left aligns cells.
 */
type LEFT_ALIGN = AlignmentStyleOptions_LEFT_ALIGN;

/**
 * Right aligns cells.
 */
type RIGHT_ALIGN = AlignmentStyleOptions_RIGHT_ALIGN;

/**
 * Center aligns cells.
 */
type CENTER_ALIGN = AlignmentStyleOptions_CENTER_ALIGN;

}
/**
 * Cell alignment options used when importing or converting spreadsheet data
 * into a table, controlling how cell content is horizontally aligned.
 */
export declare const AlignmentStyleOptions: typeof Enumeration & {

  /**
   * Preserves the spreadsheet's alignment.
   */
  readonly SPREADSHEET: AlignmentStyleOptions_SPREADSHEET;
  /**
   * Preserves the spreadsheet's alignment.
   */
  readonly spreadsheet: AlignmentStyleOptions_SPREADSHEET;

  /**
   * Left aligns cells.
   */
  readonly LEFT_ALIGN: AlignmentStyleOptions_LEFT_ALIGN;
  /**
   * Left aligns cells.
   */
  readonly leftAlign: AlignmentStyleOptions_LEFT_ALIGN;
  /**
   * Left aligns cells.
   */
  readonly leftalign: AlignmentStyleOptions_LEFT_ALIGN;

  /**
   * Right aligns cells.
   */
  readonly RIGHT_ALIGN: AlignmentStyleOptions_RIGHT_ALIGN;
  /**
   * Right aligns cells.
   */
  readonly rightAlign: AlignmentStyleOptions_RIGHT_ALIGN;
  /**
   * Right aligns cells.
   */
  readonly rightalign: AlignmentStyleOptions_RIGHT_ALIGN;

  /**
   * Center aligns cells.
   */
  readonly CENTER_ALIGN: AlignmentStyleOptions_CENTER_ALIGN;
  /**
   * Center aligns cells.
   */
  readonly centerAlign: AlignmentStyleOptions_CENTER_ALIGN;
  /**
   * Center aligns cells.
   */
  readonly centeralign: AlignmentStyleOptions_CENTER_ALIGN;

}
