/**
 * PageNumberPosition.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PageNumberPosition: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PageNumberPosition extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PageNumberPosition>): boolean;

  /**
   * @internal **WARNING:** `__PageNumberPosition` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PageNumberPosition]: never;
}


/**
 * Places page numbers after entry text.
 */
interface PageNumberPosition_AFTER_ENTRY extends PageNumberPosition {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1634100590;
}

/**
 * Places page numbers before entry text.
 */
interface PageNumberPosition_BEFORE_ENTRY extends PageNumberPosition {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1650877806;
}

/**
 * Turns off page numbers.
 */
interface PageNumberPosition_NONE extends PageNumberPosition {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Where an index or table-of-contents entry's page number sits relative to its text, or whether
 * it appears at all.
 */
export declare namespace PageNumberPosition {
/**
 * Places page numbers after entry text.
 */
type AFTER_ENTRY = PageNumberPosition_AFTER_ENTRY;

/**
 * Places page numbers before entry text.
 */
type BEFORE_ENTRY = PageNumberPosition_BEFORE_ENTRY;

/**
 * Turns off page numbers.
 */
type NONE = PageNumberPosition_NONE;

}
/**
 * Where an index or table-of-contents entry's page number sits relative to its text, or whether
 * it appears at all.
 */
export declare const PageNumberPosition: typeof Enumeration & {

  /**
   * Places page numbers after entry text.
   */
  readonly AFTER_ENTRY: PageNumberPosition_AFTER_ENTRY;
  /**
   * Places page numbers after entry text.
   */
  readonly afterEntry: PageNumberPosition_AFTER_ENTRY;
  /**
   * Places page numbers after entry text.
   */
  readonly afterentry: PageNumberPosition_AFTER_ENTRY;

  /**
   * Places page numbers before entry text.
   */
  readonly BEFORE_ENTRY: PageNumberPosition_BEFORE_ENTRY;
  /**
   * Places page numbers before entry text.
   */
  readonly beforeEntry: PageNumberPosition_BEFORE_ENTRY;
  /**
   * Places page numbers before entry text.
   */
  readonly beforeentry: PageNumberPosition_BEFORE_ENTRY;

  /**
   * Turns off page numbers.
   */
  readonly NONE: PageNumberPosition_NONE;
  /**
   * Turns off page numbers.
   */
  readonly none: PageNumberPosition_NONE;

}
