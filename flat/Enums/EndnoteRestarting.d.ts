/**
 * EndnoteRestarting.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __EndnoteRestarting: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface EndnoteRestarting extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<EndnoteRestarting>): boolean;

  /**
   * @internal **WARNING:** `__EndnoteRestarting` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__EndnoteRestarting]: never;
}


/**
 * Does not restart numbering; numbers endnotes sequentially throughout the document.
 */
interface EndnoteRestarting_CONTINUOUS extends EndnoteRestarting {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1164210803;
}

/**
 * Restarts endnote numbering on each story.
 */
interface EndnoteRestarting_STORY_RESTART extends EndnoteRestarting {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1165193843;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for restarting endnote numbering.
 */
export declare namespace EndnoteRestarting {
/**
 * Does not restart numbering; numbers endnotes sequentially throughout the document.
 */
type CONTINUOUS = EndnoteRestarting_CONTINUOUS;

/**
 * Restarts endnote numbering on each story.
 */
type STORY_RESTART = EndnoteRestarting_STORY_RESTART;

}
/**
 * Options for restarting endnote numbering.
 */
export declare const EndnoteRestarting: typeof Enumeration & {

  /**
   * Does not restart numbering; numbers endnotes sequentially throughout the document.
   */
  readonly CONTINUOUS: EndnoteRestarting_CONTINUOUS;
  /**
   * Does not restart numbering; numbers endnotes sequentially throughout the document.
   */
  readonly continuous: EndnoteRestarting_CONTINUOUS;

  /**
   * Restarts endnote numbering on each story.
   */
  readonly STORY_RESTART: EndnoteRestarting_STORY_RESTART;
  /**
   * Restarts endnote numbering on each story.
   */
  readonly storyRestart: EndnoteRestarting_STORY_RESTART;
  /**
   * Restarts endnote numbering on each story.
   */
  readonly storyrestart: EndnoteRestarting_STORY_RESTART;

}
