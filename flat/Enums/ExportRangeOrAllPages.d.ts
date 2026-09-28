/**
 * ExportRangeOrAllPages.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ExportRangeOrAllPages: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ExportRangeOrAllPages extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ExportRangeOrAllPages>): boolean;

  /**
   * @internal **WARNING:** `__ExportRangeOrAllPages` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ExportRangeOrAllPages]: never;
}


/**
 * Exports the page range specified in the page string property.
 */
interface ExportRangeOrAllPages_EXPORT_RANGE extends ExportRangeOrAllPages {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1785742674;
}

/**
 * Exports all pages.
 */
interface ExportRangeOrAllPages_EXPORT_ALL extends ExportRangeOrAllPages {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1785742657;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Page export options.
 */
export declare namespace ExportRangeOrAllPages {
/**
 * Exports the page range specified in the page string property.
 */
type EXPORT_RANGE = ExportRangeOrAllPages_EXPORT_RANGE;

/**
 * Exports all pages.
 */
type EXPORT_ALL = ExportRangeOrAllPages_EXPORT_ALL;

}
/**
 * Page export options.
 */
export declare const ExportRangeOrAllPages: typeof Enumeration & {

  /**
   * Exports the page range specified in the page string property.
   */
  readonly EXPORT_RANGE: ExportRangeOrAllPages_EXPORT_RANGE;
  /**
   * Exports the page range specified in the page string property.
   */
  readonly exportRange: ExportRangeOrAllPages_EXPORT_RANGE;
  /**
   * Exports the page range specified in the page string property.
   */
  readonly exportrange: ExportRangeOrAllPages_EXPORT_RANGE;

  /**
   * Exports all pages.
   */
  readonly EXPORT_ALL: ExportRangeOrAllPages_EXPORT_ALL;
  /**
   * Exports all pages.
   */
  readonly exportAll: ExportRangeOrAllPages_EXPORT_ALL;
  /**
   * Exports all pages.
   */
  readonly exportall: ExportRangeOrAllPages_EXPORT_ALL;

}
