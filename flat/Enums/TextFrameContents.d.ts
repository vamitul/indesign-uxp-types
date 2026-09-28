/**
 * TextFrameContents.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";
import type { SpecialCharacters } from "./SpecialCharacters";



declare const __TextFrameContents: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface TextFrameContents extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<TextFrameContents, SpecialCharacters>): boolean;

  /**
   * @internal **WARNING:** `__TextFrameContents` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__TextFrameContents]: never;
}


/**
 * Fills the text frame with placeholder text.
 */
interface TextFrameContents_PLACEHOLDER_TEXT extends TextFrameContents {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1346925688;
}

/**
 * Fills the text frame with arabic placeholder text.
 */
interface TextFrameContents_PLACEHOLDER_TEXT_ARABIC extends TextFrameContents {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1346925665;
}

/**
 * Fills the text frame with hebrew placeholder text.
 */
interface TextFrameContents_PLACEHOLDER_TEXT_HEBREW extends TextFrameContents {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1346925672;
}

/**
 * Fills the text frame with cyrillic placeholder text.
 */
interface TextFrameContents_PLACEHOLDER_TEXT_CYRILLIC extends TextFrameContents {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1346925667;
}

/**
 * Fills the text frame with greek placeholder text.
 */
interface TextFrameContents_PLACEHOLDER_TEXT_GREEK extends TextFrameContents {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1346925671;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Which language's placeholder text fills a new text frame.
 */
export declare namespace TextFrameContents {
/**
 * Fills the text frame with placeholder text.
 */
type PLACEHOLDER_TEXT = TextFrameContents_PLACEHOLDER_TEXT;

/**
 * Fills the text frame with arabic placeholder text.
 */
type PLACEHOLDER_TEXT_ARABIC = TextFrameContents_PLACEHOLDER_TEXT_ARABIC;

/**
 * Fills the text frame with hebrew placeholder text.
 */
type PLACEHOLDER_TEXT_HEBREW = TextFrameContents_PLACEHOLDER_TEXT_HEBREW;

/**
 * Fills the text frame with cyrillic placeholder text.
 */
type PLACEHOLDER_TEXT_CYRILLIC = TextFrameContents_PLACEHOLDER_TEXT_CYRILLIC;

/**
 * Fills the text frame with greek placeholder text.
 */
type PLACEHOLDER_TEXT_GREEK = TextFrameContents_PLACEHOLDER_TEXT_GREEK;

}
/**
 * Which language's placeholder text fills a new text frame.
 */
export declare const TextFrameContents: typeof Enumeration & {

  /**
   * Fills the text frame with placeholder text.
   */
  readonly PLACEHOLDER_TEXT: TextFrameContents_PLACEHOLDER_TEXT;
  /**
   * Fills the text frame with placeholder text.
   */
  readonly placeholderText: TextFrameContents_PLACEHOLDER_TEXT;
  /**
   * Fills the text frame with placeholder text.
   */
  readonly placeholdertext: TextFrameContents_PLACEHOLDER_TEXT;

  /**
   * Fills the text frame with arabic placeholder text.
   */
  readonly PLACEHOLDER_TEXT_ARABIC: TextFrameContents_PLACEHOLDER_TEXT_ARABIC;
  /**
   * Fills the text frame with arabic placeholder text.
   */
  readonly placeholderTextArabic: TextFrameContents_PLACEHOLDER_TEXT_ARABIC;
  /**
   * Fills the text frame with arabic placeholder text.
   */
  readonly placeholdertextarabic: TextFrameContents_PLACEHOLDER_TEXT_ARABIC;

  /**
   * Fills the text frame with hebrew placeholder text.
   */
  readonly PLACEHOLDER_TEXT_HEBREW: TextFrameContents_PLACEHOLDER_TEXT_HEBREW;
  /**
   * Fills the text frame with hebrew placeholder text.
   */
  readonly placeholderTextHebrew: TextFrameContents_PLACEHOLDER_TEXT_HEBREW;
  /**
   * Fills the text frame with hebrew placeholder text.
   */
  readonly placeholdertexthebrew: TextFrameContents_PLACEHOLDER_TEXT_HEBREW;

  /**
   * Fills the text frame with cyrillic placeholder text.
   */
  readonly PLACEHOLDER_TEXT_CYRILLIC: TextFrameContents_PLACEHOLDER_TEXT_CYRILLIC;
  /**
   * Fills the text frame with cyrillic placeholder text.
   */
  readonly placeholderTextCyrillic: TextFrameContents_PLACEHOLDER_TEXT_CYRILLIC;
  /**
   * Fills the text frame with cyrillic placeholder text.
   */
  readonly placeholdertextcyrillic: TextFrameContents_PLACEHOLDER_TEXT_CYRILLIC;

  /**
   * Fills the text frame with greek placeholder text.
   */
  readonly PLACEHOLDER_TEXT_GREEK: TextFrameContents_PLACEHOLDER_TEXT_GREEK;
  /**
   * Fills the text frame with greek placeholder text.
   */
  readonly placeholderTextGreek: TextFrameContents_PLACEHOLDER_TEXT_GREEK;
  /**
   * Fills the text frame with greek placeholder text.
   */
  readonly placeholdertextgreek: TextFrameContents_PLACEHOLDER_TEXT_GREEK;

}
