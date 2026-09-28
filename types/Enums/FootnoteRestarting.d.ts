/**
 * FootnoteRestarting.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __FootnoteRestarting: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface FootnoteRestarting extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<FootnoteRestarting>): boolean;

  /**
   * @internal **WARNING:** `__FootnoteRestarting` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__FootnoteRestarting]: never;
}


/**
 * Does not restart numbering; numbers footnotes sequentially throughout the document.
 */
interface FootnoteRestarting_DONT_RESTART extends FootnoteRestarting {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1180988019;
}

/**
 * Restarts footnote numbering on each page.
 */
interface FootnoteRestarting_PAGE_RESTART extends FootnoteRestarting {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1181774451;
}

/**
 * Restarts footnote numbering on each spread.
 */
interface FootnoteRestarting_SPREAD_RESTART extends FootnoteRestarting {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1181971059;
}

/**
 * Restarts footnote numbering in each section.
 */
interface FootnoteRestarting_SECTION_RESTART extends FootnoteRestarting {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1181053555;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for restarting footnote numbering.
 */
export declare namespace FootnoteRestarting {
/**
 * Does not restart numbering; numbers footnotes sequentially throughout the document.
 */
type DONT_RESTART = FootnoteRestarting_DONT_RESTART;

/**
 * Restarts footnote numbering on each page.
 */
type PAGE_RESTART = FootnoteRestarting_PAGE_RESTART;

/**
 * Restarts footnote numbering on each spread.
 */
type SPREAD_RESTART = FootnoteRestarting_SPREAD_RESTART;

/**
 * Restarts footnote numbering in each section.
 */
type SECTION_RESTART = FootnoteRestarting_SECTION_RESTART;

}
/**
 * Options for restarting footnote numbering.
 */
export declare const FootnoteRestarting: typeof Enumeration & {

  /**
   * Does not restart numbering; numbers footnotes sequentially throughout the document.
   */
  readonly DONT_RESTART: FootnoteRestarting_DONT_RESTART;
  /**
   * Does not restart numbering; numbers footnotes sequentially throughout the document.
   */
  readonly dontRestart: FootnoteRestarting_DONT_RESTART;
  /**
   * Does not restart numbering; numbers footnotes sequentially throughout the document.
   */
  readonly dontrestart: FootnoteRestarting_DONT_RESTART;

  /**
   * Restarts footnote numbering on each page.
   */
  readonly PAGE_RESTART: FootnoteRestarting_PAGE_RESTART;
  /**
   * Restarts footnote numbering on each page.
   */
  readonly pageRestart: FootnoteRestarting_PAGE_RESTART;
  /**
   * Restarts footnote numbering on each page.
   */
  readonly pagerestart: FootnoteRestarting_PAGE_RESTART;

  /**
   * Restarts footnote numbering on each spread.
   */
  readonly SPREAD_RESTART: FootnoteRestarting_SPREAD_RESTART;
  /**
   * Restarts footnote numbering on each spread.
   */
  readonly spreadRestart: FootnoteRestarting_SPREAD_RESTART;
  /**
   * Restarts footnote numbering on each spread.
   */
  readonly spreadrestart: FootnoteRestarting_SPREAD_RESTART;

  /**
   * Restarts footnote numbering in each section.
   */
  readonly SECTION_RESTART: FootnoteRestarting_SECTION_RESTART;
  /**
   * Restarts footnote numbering in each section.
   */
  readonly sectionRestart: FootnoteRestarting_SECTION_RESTART;
  /**
   * Restarts footnote numbering in each section.
   */
  readonly sectionrestart: FootnoteRestarting_SECTION_RESTART;

}
