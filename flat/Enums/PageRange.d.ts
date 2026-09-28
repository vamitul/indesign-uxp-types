/**
 * PageRange.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PageRange: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PageRange extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PageRange>): boolean;

  /**
   * @internal **WARNING:** `__PageRange` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PageRange]: never;
}


/**
 * Print or export all pages in the document.
 */
interface PageRange_ALL_PAGES extends PageRange {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886547553;
}

/**
 * Export selected items in the document.
 */
interface PageRange_SELECTED_ITEMS extends PageRange {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886547571;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether an operation covers the whole document or only what is selected.
 */
export declare namespace PageRange {
/**
 * Print or export all pages in the document.
 */
type ALL_PAGES = PageRange_ALL_PAGES;

/**
 * Export selected items in the document.
 */
type SELECTED_ITEMS = PageRange_SELECTED_ITEMS;

}
/**
 * Whether an operation covers the whole document or only what is selected.
 */
export declare const PageRange: typeof Enumeration & {

  /**
   * Print or export all pages in the document.
   */
  readonly ALL_PAGES: PageRange_ALL_PAGES;
  /**
   * Print or export all pages in the document.
   */
  readonly allPages: PageRange_ALL_PAGES;
  /**
   * Print or export all pages in the document.
   */
  readonly allpages: PageRange_ALL_PAGES;

  /**
   * Export selected items in the document.
   */
  readonly SELECTED_ITEMS: PageRange_SELECTED_ITEMS;
  /**
   * Export selected items in the document.
   */
  readonly selectedItems: PageRange_SELECTED_ITEMS;
  /**
   * Export selected items in the document.
   */
  readonly selecteditems: PageRange_SELECTED_ITEMS;

}
