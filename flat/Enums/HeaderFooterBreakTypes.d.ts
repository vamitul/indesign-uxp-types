/**
 * HeaderFooterBreakTypes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __HeaderFooterBreakTypes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface HeaderFooterBreakTypes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<HeaderFooterBreakTypes>): boolean;

  /**
   * @internal **WARNING:** `__HeaderFooterBreakTypes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__HeaderFooterBreakTypes]: never;
}


/**
 * Places headers or footers in each text column.
 */
interface HeaderFooterBreakTypes_IN_ALL_TEXT_COLUMNS extends HeaderFooterBreakTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1231115363;
}

/**
 * Repeats headers or footers in each text frame.
 */
interface HeaderFooterBreakTypes_ONCE_PER_TEXT_FRAME extends HeaderFooterBreakTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1332761702;
}

/**
 * Places one instance of headers or footers per page.
 */
interface HeaderFooterBreakTypes_ONCE_PER_PAGE extends HeaderFooterBreakTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1332760673;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Placement options for header or footer rows.
 */
export declare namespace HeaderFooterBreakTypes {
/**
 * Places headers or footers in each text column.
 */
type IN_ALL_TEXT_COLUMNS = HeaderFooterBreakTypes_IN_ALL_TEXT_COLUMNS;

/**
 * Repeats headers or footers in each text frame.
 */
type ONCE_PER_TEXT_FRAME = HeaderFooterBreakTypes_ONCE_PER_TEXT_FRAME;

/**
 * Places one instance of headers or footers per page.
 */
type ONCE_PER_PAGE = HeaderFooterBreakTypes_ONCE_PER_PAGE;

}
/**
 * Placement options for header or footer rows.
 */
export declare const HeaderFooterBreakTypes: typeof Enumeration & {

  /**
   * Places headers or footers in each text column.
   */
  readonly IN_ALL_TEXT_COLUMNS: HeaderFooterBreakTypes_IN_ALL_TEXT_COLUMNS;
  /**
   * Places headers or footers in each text column.
   */
  readonly inAllTextColumns: HeaderFooterBreakTypes_IN_ALL_TEXT_COLUMNS;
  /**
   * Places headers or footers in each text column.
   */
  readonly inalltextcolumns: HeaderFooterBreakTypes_IN_ALL_TEXT_COLUMNS;

  /**
   * Repeats headers or footers in each text frame.
   */
  readonly ONCE_PER_TEXT_FRAME: HeaderFooterBreakTypes_ONCE_PER_TEXT_FRAME;
  /**
   * Repeats headers or footers in each text frame.
   */
  readonly oncePerTextFrame: HeaderFooterBreakTypes_ONCE_PER_TEXT_FRAME;
  /**
   * Repeats headers or footers in each text frame.
   */
  readonly oncepertextframe: HeaderFooterBreakTypes_ONCE_PER_TEXT_FRAME;

  /**
   * Places one instance of headers or footers per page.
   */
  readonly ONCE_PER_PAGE: HeaderFooterBreakTypes_ONCE_PER_PAGE;
  /**
   * Places one instance of headers or footers per page.
   */
  readonly oncePerPage: HeaderFooterBreakTypes_ONCE_PER_PAGE;
  /**
   * Places one instance of headers or footers per page.
   */
  readonly onceperpage: HeaderFooterBreakTypes_ONCE_PER_PAGE;

}
