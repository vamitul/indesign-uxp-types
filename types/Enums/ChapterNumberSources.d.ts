/**
 * ChapterNumberSources.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ChapterNumberSources: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ChapterNumberSources extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ChapterNumberSources>): boolean;

  /**
   * @internal **WARNING:** `__ChapterNumberSources` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ChapterNumberSources]: never;
}


/**
 * User-defined chapter number.
 */
interface ChapterNumberSources_USER_DEFINED extends ChapterNumberSources {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1668183396;
}

/**
 * Continue chapter number from previous document.
 */
interface ChapterNumberSources_CONTINUE_FROM_PREVIOUS_DOCUMENT extends ChapterNumberSources {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1668178800;
}

/**
 * Chapter number same as previous document.
 */
interface ChapterNumberSources_SAME_AS_PREVIOUS_DOCUMENT extends ChapterNumberSources {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1668182896;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Where a document takes its chapter number from — its own setting, the previous document in
 * the book, or the same number as the previous document.
 */
export declare namespace ChapterNumberSources {
/**
 * User-defined chapter number.
 */
type USER_DEFINED = ChapterNumberSources_USER_DEFINED;

/**
 * Continue chapter number from previous document.
 */
type CONTINUE_FROM_PREVIOUS_DOCUMENT = ChapterNumberSources_CONTINUE_FROM_PREVIOUS_DOCUMENT;

/**
 * Chapter number same as previous document.
 */
type SAME_AS_PREVIOUS_DOCUMENT = ChapterNumberSources_SAME_AS_PREVIOUS_DOCUMENT;

}
/**
 * Where a document takes its chapter number from — its own setting, the previous document in
 * the book, or the same number as the previous document.
 */
export declare const ChapterNumberSources: typeof Enumeration & {

  /**
   * User-defined chapter number.
   */
  readonly USER_DEFINED: ChapterNumberSources_USER_DEFINED;
  /**
   * User-defined chapter number.
   */
  readonly userDefined: ChapterNumberSources_USER_DEFINED;
  /**
   * User-defined chapter number.
   */
  readonly userdefined: ChapterNumberSources_USER_DEFINED;

  /**
   * Continue chapter number from previous document.
   */
  readonly CONTINUE_FROM_PREVIOUS_DOCUMENT: ChapterNumberSources_CONTINUE_FROM_PREVIOUS_DOCUMENT;
  /**
   * Continue chapter number from previous document.
   */
  readonly continueFromPreviousDocument: ChapterNumberSources_CONTINUE_FROM_PREVIOUS_DOCUMENT;
  /**
   * Continue chapter number from previous document.
   */
  readonly continuefrompreviousdocument: ChapterNumberSources_CONTINUE_FROM_PREVIOUS_DOCUMENT;

  /**
   * Chapter number same as previous document.
   */
  readonly SAME_AS_PREVIOUS_DOCUMENT: ChapterNumberSources_SAME_AS_PREVIOUS_DOCUMENT;
  /**
   * Chapter number same as previous document.
   */
  readonly sameAsPreviousDocument: ChapterNumberSources_SAME_AS_PREVIOUS_DOCUMENT;
  /**
   * Chapter number same as previous document.
   */
  readonly sameaspreviousdocument: ChapterNumberSources_SAME_AS_PREVIOUS_DOCUMENT;

}
