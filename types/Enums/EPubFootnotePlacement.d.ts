/**
 * EPubFootnotePlacement.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __EPubFootnotePlacement: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface EPubFootnotePlacement extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<EPubFootnotePlacement>): boolean;

  /**
   * @internal **WARNING:** `__EPubFootnotePlacement` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__EPubFootnotePlacement]: never;
}


/**
 * Footnote after story.
 */
interface EPubFootnotePlacement_FOOTNOTE_AFTER_STORY extends EPubFootnotePlacement {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701213267;
}

/**
 * Footnote after paragraph.
 */
interface EPubFootnotePlacement_FOOTNOTE_AFTER_PARAGRAPH extends EPubFootnotePlacement {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701213296;
}

/**
 * Footnote inside popup.
 */
interface EPubFootnotePlacement_FOOTNOTE_INSIDE_POPUP extends EPubFootnotePlacement {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701213235;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Choices for footnote placement.
 */
export declare namespace EPubFootnotePlacement {
/**
 * Footnote after story.
 */
type FOOTNOTE_AFTER_STORY = EPubFootnotePlacement_FOOTNOTE_AFTER_STORY;

/**
 * Footnote after paragraph.
 */
type FOOTNOTE_AFTER_PARAGRAPH = EPubFootnotePlacement_FOOTNOTE_AFTER_PARAGRAPH;

/**
 * Footnote inside popup.
 */
type FOOTNOTE_INSIDE_POPUP = EPubFootnotePlacement_FOOTNOTE_INSIDE_POPUP;

}
/**
 * Choices for footnote placement.
 */
export declare const EPubFootnotePlacement: typeof Enumeration & {

  /**
   * Footnote after story.
   */
  readonly FOOTNOTE_AFTER_STORY: EPubFootnotePlacement_FOOTNOTE_AFTER_STORY;
  /**
   * Footnote after story.
   */
  readonly footnoteAfterStory: EPubFootnotePlacement_FOOTNOTE_AFTER_STORY;
  /**
   * Footnote after story.
   */
  readonly footnoteafterstory: EPubFootnotePlacement_FOOTNOTE_AFTER_STORY;

  /**
   * Footnote after paragraph.
   */
  readonly FOOTNOTE_AFTER_PARAGRAPH: EPubFootnotePlacement_FOOTNOTE_AFTER_PARAGRAPH;
  /**
   * Footnote after paragraph.
   */
  readonly footnoteAfterParagraph: EPubFootnotePlacement_FOOTNOTE_AFTER_PARAGRAPH;
  /**
   * Footnote after paragraph.
   */
  readonly footnoteafterparagraph: EPubFootnotePlacement_FOOTNOTE_AFTER_PARAGRAPH;

  /**
   * Footnote inside popup.
   */
  readonly FOOTNOTE_INSIDE_POPUP: EPubFootnotePlacement_FOOTNOTE_INSIDE_POPUP;
  /**
   * Footnote inside popup.
   */
  readonly footnoteInsidePopup: EPubFootnotePlacement_FOOTNOTE_INSIDE_POPUP;
  /**
   * Footnote inside popup.
   */
  readonly footnoteinsidepopup: EPubFootnotePlacement_FOOTNOTE_INSIDE_POPUP;

}
