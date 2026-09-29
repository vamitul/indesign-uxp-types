/**
 * AddPageOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __AddPageOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface AddPageOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<AddPageOptions>): boolean;

  /**
   * @internal **WARNING:** `__AddPageOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__AddPageOptions]: never;
}


/**
 * Insert pages at end of story.
 */
interface AddPageOptions_END_OF_STORY extends AddPageOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1634037619;
}

/**
 * Insert pages at end of section.
 */
interface AddPageOptions_END_OF_SECTION extends AddPageOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1634037624;
}

/**
 * Insert pages at end of document.
 */
interface AddPageOptions_END_OF_DOCUMENT extends AddPageOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1634037604;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for auto page insertion in response to overset text.
 */
export declare namespace AddPageOptions {
/**
 * Insert pages at end of story.
 */
type END_OF_STORY = AddPageOptions_END_OF_STORY;

/**
 * Insert pages at end of section.
 */
type END_OF_SECTION = AddPageOptions_END_OF_SECTION;

/**
 * Insert pages at end of document.
 */
type END_OF_DOCUMENT = AddPageOptions_END_OF_DOCUMENT;

}
/**
 * Options for auto page insertion in response to overset text.
 */
export declare const AddPageOptions: typeof Enumeration & {

  /**
   * Insert pages at end of story.
   */
  readonly END_OF_STORY: AddPageOptions_END_OF_STORY;
  /**
   * Insert pages at end of story.
   */
  readonly endOfStory: AddPageOptions_END_OF_STORY;
  /**
   * Insert pages at end of story.
   */
  readonly endofstory: AddPageOptions_END_OF_STORY;

  /**
   * Insert pages at end of section.
   */
  readonly END_OF_SECTION: AddPageOptions_END_OF_SECTION;
  /**
   * Insert pages at end of section.
   */
  readonly endOfSection: AddPageOptions_END_OF_SECTION;
  /**
   * Insert pages at end of section.
   */
  readonly endofsection: AddPageOptions_END_OF_SECTION;

  /**
   * Insert pages at end of document.
   */
  readonly END_OF_DOCUMENT: AddPageOptions_END_OF_DOCUMENT;
  /**
   * Insert pages at end of document.
   */
  readonly endOfDocument: AddPageOptions_END_OF_DOCUMENT;
  /**
   * Insert pages at end of document.
   */
  readonly endofdocument: AddPageOptions_END_OF_DOCUMENT;

}
