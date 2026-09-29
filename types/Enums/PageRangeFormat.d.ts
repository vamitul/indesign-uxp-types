/**
 * PageRangeFormat.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PageRangeFormat: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PageRangeFormat extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PageRangeFormat>): boolean;

  /**
   * @internal **WARNING:** `__PageRangeFormat` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PageRangeFormat]: never;
}


/**
 * Export all pages.
 */
interface PageRangeFormat_EXPORT_ALL_PAGES extends PageRangeFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700883568;
}

/**
 * Export page ranges.
 */
interface PageRangeFormat_EXPORT_PAGE_RANGE extends PageRangeFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700951410;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Choices for page range format for export.
 */
export declare namespace PageRangeFormat {
/**
 * Export all pages.
 */
type EXPORT_ALL_PAGES = PageRangeFormat_EXPORT_ALL_PAGES;

/**
 * Export page ranges.
 */
type EXPORT_PAGE_RANGE = PageRangeFormat_EXPORT_PAGE_RANGE;

}
/**
 * Choices for page range format for export.
 */
export declare const PageRangeFormat: typeof Enumeration & {

  /**
   * Export all pages.
   */
  readonly EXPORT_ALL_PAGES: PageRangeFormat_EXPORT_ALL_PAGES;
  /**
   * Export all pages.
   */
  readonly exportAllPages: PageRangeFormat_EXPORT_ALL_PAGES;
  /**
   * Export all pages.
   */
  readonly exportallpages: PageRangeFormat_EXPORT_ALL_PAGES;

  /**
   * Export page ranges.
   */
  readonly EXPORT_PAGE_RANGE: PageRangeFormat_EXPORT_PAGE_RANGE;
  /**
   * Export page ranges.
   */
  readonly exportPageRange: PageRangeFormat_EXPORT_PAGE_RANGE;
  /**
   * Export page ranges.
   */
  readonly exportpagerange: PageRangeFormat_EXPORT_PAGE_RANGE;

}
