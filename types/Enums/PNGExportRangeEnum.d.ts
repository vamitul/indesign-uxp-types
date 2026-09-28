/**
 * PNGExportRangeEnum.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PNGExportRangeEnum: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PNGExportRangeEnum extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PNGExportRangeEnum>): boolean;

  /**
   * @internal **WARNING:** `__PNGExportRangeEnum` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PNGExportRangeEnum]: never;
}


/**
 * Exports the page range specified in the page string property.
 */
interface PNGExportRangeEnum_EXPORT_RANGE extends PNGExportRangeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1785742674;
}

/**
 * Exports all pages.
 */
interface PNGExportRangeEnum_EXPORT_ALL extends PNGExportRangeEnum {
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
 * Whether PNG export covers every page or only the specified page range.
 */
export declare namespace PNGExportRangeEnum {
/**
 * Exports the page range specified in the page string property.
 */
type EXPORT_RANGE = PNGExportRangeEnum_EXPORT_RANGE;

/**
 * Exports all pages.
 */
type EXPORT_ALL = PNGExportRangeEnum_EXPORT_ALL;

}
/**
 * Whether PNG export covers every page or only the specified page range.
 */
export declare const PNGExportRangeEnum: typeof Enumeration & {

  /**
   * Exports the page range specified in the page string property.
   */
  readonly EXPORT_RANGE: PNGExportRangeEnum_EXPORT_RANGE;
  /**
   * Exports the page range specified in the page string property.
   */
  readonly exportRange: PNGExportRangeEnum_EXPORT_RANGE;
  /**
   * Exports the page range specified in the page string property.
   */
  readonly exportrange: PNGExportRangeEnum_EXPORT_RANGE;

  /**
   * Exports all pages.
   */
  readonly EXPORT_ALL: PNGExportRangeEnum_EXPORT_ALL;
  /**
   * Exports all pages.
   */
  readonly exportAll: PNGExportRangeEnum_EXPORT_ALL;
  /**
   * Exports all pages.
   */
  readonly exportall: PNGExportRangeEnum_EXPORT_ALL;

}
