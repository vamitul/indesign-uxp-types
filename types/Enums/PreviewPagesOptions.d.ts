/**
 * PreviewPagesOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PreviewPagesOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PreviewPagesOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PreviewPagesOptions>): boolean;

  /**
   * @internal **WARNING:** `__PreviewPagesOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PreviewPagesOptions]: never;
}


/**
 * First page.
 */
interface PreviewPagesOptions_FIRST_PAGE extends PreviewPagesOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700947536;
}

/**
 * First two pages.
 */
interface PreviewPagesOptions_FIRST_2_PAGES extends PreviewPagesOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1177702503;
}

/**
 * First five pages.
 */
interface PreviewPagesOptions_FIRST_5_PAGES extends PreviewPagesOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1177899111;
}

/**
 * First ten pages.
 */
interface PreviewPagesOptions_FIRST_10_PAGES extends PreviewPagesOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1180192871;
}

/**
 * All pages.
 */
interface PreviewPagesOptions_ALL_PAGES extends PreviewPagesOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886547553;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * How many pages of the document are rendered into the preview.
 */
export declare namespace PreviewPagesOptions {
/**
 * First page.
 */
type FIRST_PAGE = PreviewPagesOptions_FIRST_PAGE;

/**
 * First two pages.
 */
type FIRST_2_PAGES = PreviewPagesOptions_FIRST_2_PAGES;

/**
 * First five pages.
 */
type FIRST_5_PAGES = PreviewPagesOptions_FIRST_5_PAGES;

/**
 * First ten pages.
 */
type FIRST_10_PAGES = PreviewPagesOptions_FIRST_10_PAGES;

/**
 * All pages.
 */
type ALL_PAGES = PreviewPagesOptions_ALL_PAGES;

}
/**
 * How many pages of the document are rendered into the preview.
 */
export declare const PreviewPagesOptions: typeof Enumeration & {

  /**
   * First page.
   */
  readonly FIRST_PAGE: PreviewPagesOptions_FIRST_PAGE;
  /**
   * First page.
   */
  readonly firstPage: PreviewPagesOptions_FIRST_PAGE;
  /**
   * First page.
   */
  readonly firstpage: PreviewPagesOptions_FIRST_PAGE;

  /**
   * First two pages.
   */
  readonly FIRST_2_PAGES: PreviewPagesOptions_FIRST_2_PAGES;
  /**
   * First two pages.
   */
  readonly first2Pages: PreviewPagesOptions_FIRST_2_PAGES;
  /**
   * First two pages.
   */
  readonly first2pages: PreviewPagesOptions_FIRST_2_PAGES;

  /**
   * First five pages.
   */
  readonly FIRST_5_PAGES: PreviewPagesOptions_FIRST_5_PAGES;
  /**
   * First five pages.
   */
  readonly first5Pages: PreviewPagesOptions_FIRST_5_PAGES;
  /**
   * First five pages.
   */
  readonly first5pages: PreviewPagesOptions_FIRST_5_PAGES;

  /**
   * First ten pages.
   */
  readonly FIRST_10_PAGES: PreviewPagesOptions_FIRST_10_PAGES;
  /**
   * First ten pages.
   */
  readonly first10Pages: PreviewPagesOptions_FIRST_10_PAGES;
  /**
   * First ten pages.
   */
  readonly first10pages: PreviewPagesOptions_FIRST_10_PAGES;

  /**
   * All pages.
   */
  readonly ALL_PAGES: PreviewPagesOptions_ALL_PAGES;
  /**
   * All pages.
   */
  readonly allPages: PreviewPagesOptions_ALL_PAGES;
  /**
   * All pages.
   */
  readonly allpages: PreviewPagesOptions_ALL_PAGES;

}
