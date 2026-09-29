/**
 * NestedStyleDelimiters.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __NestedStyleDelimiters: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface NestedStyleDelimiters extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<NestedStyleDelimiters>): boolean;

  /**
   * @internal **WARNING:** `__NestedStyleDelimiters` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__NestedStyleDelimiters]: never;
}


/**
 * Uses the first sentence or sentences in the paragraph as the nested style delimiter. The first sentence is considered all text preceding the first period, question mark, or exclamation mark in the paragraph.
 */
interface NestedStyleDelimiters_SENTENCE extends NestedStyleDelimiters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1380541555;
}

/**
 * Uses the first word or words in the paragraph as the nested style delimiter. The first word is considered all characters preceding the first space or white space character in the paragraph.
 */
interface NestedStyleDelimiters_ANY_WORD extends NestedStyleDelimiters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1380541559;
}

/**
 * Uses the first character or characters other than zero-width markers as the nested style delimiter. Zero-width markers include anchors, index markers, XML tags, and so on.
 */
interface NestedStyleDelimiters_ANY_CHARACTER extends NestedStyleDelimiters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1380541539;
}

/**
 * Uses the first alpha character or characters as the nested style delimiter. Note: To specify the number of letters, see repetition.
 */
interface NestedStyleDelimiters_LETTERS extends NestedStyleDelimiters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1380541548;
}

/**
 * Uses the first numeric character or characters as the nested style delimiter. Note: To specify the number of digits, see repetition.
 */
interface NestedStyleDelimiters_DIGITS extends NestedStyleDelimiters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1380541540;
}

/**
 * Uses the first tab character as the nested style delimiter. Note: Does not use the first tab stop. If no actual tab character has been inserted in the paragraph, the nested style is applied through the end of the paragraph. 
 */
interface NestedStyleDelimiters_TABS extends NestedStyleDelimiters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1380541556;
}

/**
 * Uses the first inline graphic as the nested style delimiter.
 */
interface NestedStyleDelimiters_INLINE_GRAPHIC extends NestedStyleDelimiters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1380541545;
}

/**
 * Uses the dropcap as the nested style delimiter.
 */
interface NestedStyleDelimiters_DROPCAP extends NestedStyleDelimiters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1380541507;
}

/**
 * Uses the first forced line break as the nested style delimiter.
 */
interface NestedStyleDelimiters_FORCED_LINE_BREAK extends NestedStyleDelimiters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397124194;
}

/**
 * Uses the inserted end nested style here character as the nested style delimiter.
 */
interface NestedStyleDelimiters_END_NESTED_STYLE extends NestedStyleDelimiters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1396855379;
}

/**
 * Uses the first indent-to-here tab character as the nested style delimiter.
 *
 * Note: Does not use the first indent-to-here tab stop. If no actual indent-to-here tab
 * character has been inserted in the paragraph, the nested style is applied through the end
 * of the paragraph.
 */
interface NestedStyleDelimiters_INDENT_HERE_TAB extends NestedStyleDelimiters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397319796;
}

/**
 * Uses the first em space as the nested style delimiter.
 */
interface NestedStyleDelimiters_EM_SPACE extends NestedStyleDelimiters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397058899;
}

/**
 * Uses the first en space as the nested style delimiter.
 */
interface NestedStyleDelimiters_EN_SPACE extends NestedStyleDelimiters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397059155;
}

/**
 * Uses the first nonbreaking space as the nested style delimiter.
 */
interface NestedStyleDelimiters_NONBREAKING_SPACE extends NestedStyleDelimiters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397645907;
}

/**
 * Uses the first automatic page number as the nested style delimiter.
 */
interface NestedStyleDelimiters_AUTO_PAGE_NUMBER extends NestedStyleDelimiters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1396797550;
}

/**
 * Uses the first section name marker as the nested style delimiter.
 */
interface NestedStyleDelimiters_SECTION_MARKER extends NestedStyleDelimiters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1400073805;
}

/**
 * Repeat
 */
interface NestedStyleDelimiters_REPEAT extends NestedStyleDelimiters {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1380545132;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Delimiter options for marking the end of the application of the nested style.
 */
export declare namespace NestedStyleDelimiters {
/**
 * Uses the first sentence or sentences in the paragraph as the nested style delimiter. The first sentence is considered all text preceding the first period, question mark, or exclamation mark in the paragraph.
 */
type SENTENCE = NestedStyleDelimiters_SENTENCE;

/**
 * Uses the first word or words in the paragraph as the nested style delimiter. The first word is considered all characters preceding the first space or white space character in the paragraph.
 */
type ANY_WORD = NestedStyleDelimiters_ANY_WORD;

/**
 * Uses the first character or characters other than zero-width markers as the nested style delimiter. Zero-width markers include anchors, index markers, XML tags, and so on.
 */
type ANY_CHARACTER = NestedStyleDelimiters_ANY_CHARACTER;

/**
 * Uses the first alpha character or characters as the nested style delimiter. Note: To specify the number of letters, see repetition.
 */
type LETTERS = NestedStyleDelimiters_LETTERS;

/**
 * Uses the first numeric character or characters as the nested style delimiter. Note: To specify the number of digits, see repetition.
 */
type DIGITS = NestedStyleDelimiters_DIGITS;

/**
 * Uses the first tab character as the nested style delimiter. Note: Does not use the first tab stop. If no actual tab character has been inserted in the paragraph, the nested style is applied through the end of the paragraph. 
 */
type TABS = NestedStyleDelimiters_TABS;

/**
 * Uses the first inline graphic as the nested style delimiter.
 */
type INLINE_GRAPHIC = NestedStyleDelimiters_INLINE_GRAPHIC;

/**
 * Uses the dropcap as the nested style delimiter.
 */
type DROPCAP = NestedStyleDelimiters_DROPCAP;

/**
 * Uses the first forced line break as the nested style delimiter.
 */
type FORCED_LINE_BREAK = NestedStyleDelimiters_FORCED_LINE_BREAK;

/**
 * Uses the inserted end nested style here character as the nested style delimiter.
 */
type END_NESTED_STYLE = NestedStyleDelimiters_END_NESTED_STYLE;

/**
 * Uses the first indent-to-here tab character as the nested style delimiter.
 *
 * Note: Does not use the first indent-to-here tab stop. If no actual indent-to-here tab
 * character has been inserted in the paragraph, the nested style is applied through the end
 * of the paragraph.
 */
type INDENT_HERE_TAB = NestedStyleDelimiters_INDENT_HERE_TAB;

/**
 * Uses the first em space as the nested style delimiter.
 */
type EM_SPACE = NestedStyleDelimiters_EM_SPACE;

/**
 * Uses the first en space as the nested style delimiter.
 */
type EN_SPACE = NestedStyleDelimiters_EN_SPACE;

/**
 * Uses the first nonbreaking space as the nested style delimiter.
 */
type NONBREAKING_SPACE = NestedStyleDelimiters_NONBREAKING_SPACE;

/**
 * Uses the first automatic page number as the nested style delimiter.
 */
type AUTO_PAGE_NUMBER = NestedStyleDelimiters_AUTO_PAGE_NUMBER;

/**
 * Uses the first section name marker as the nested style delimiter.
 */
type SECTION_MARKER = NestedStyleDelimiters_SECTION_MARKER;

/**
 * Repeat
 */
type REPEAT = NestedStyleDelimiters_REPEAT;

}
/**
 * Delimiter options for marking the end of the application of the nested style.
 */
export declare const NestedStyleDelimiters: typeof Enumeration & {

  /**
   * Uses the first sentence or sentences in the paragraph as the nested style delimiter. The first sentence is considered all text preceding the first period, question mark, or exclamation mark in the paragraph.
   */
  readonly SENTENCE: NestedStyleDelimiters_SENTENCE;
  /**
   * Uses the first sentence or sentences in the paragraph as the nested style delimiter. The first sentence is considered all text preceding the first period, question mark, or exclamation mark in the paragraph.
   */
  readonly sentence: NestedStyleDelimiters_SENTENCE;

  /**
   * Uses the first word or words in the paragraph as the nested style delimiter. The first word is considered all characters preceding the first space or white space character in the paragraph.
   */
  readonly ANY_WORD: NestedStyleDelimiters_ANY_WORD;
  /**
   * Uses the first word or words in the paragraph as the nested style delimiter. The first word is considered all characters preceding the first space or white space character in the paragraph.
   */
  readonly anyWord: NestedStyleDelimiters_ANY_WORD;
  /**
   * Uses the first word or words in the paragraph as the nested style delimiter. The first word is considered all characters preceding the first space or white space character in the paragraph.
   */
  readonly anyword: NestedStyleDelimiters_ANY_WORD;

  /**
   * Uses the first character or characters other than zero-width markers as the nested style delimiter. Zero-width markers include anchors, index markers, XML tags, and so on.
   */
  readonly ANY_CHARACTER: NestedStyleDelimiters_ANY_CHARACTER;
  /**
   * Uses the first character or characters other than zero-width markers as the nested style delimiter. Zero-width markers include anchors, index markers, XML tags, and so on.
   */
  readonly anyCharacter: NestedStyleDelimiters_ANY_CHARACTER;
  /**
   * Uses the first character or characters other than zero-width markers as the nested style delimiter. Zero-width markers include anchors, index markers, XML tags, and so on.
   */
  readonly anycharacter: NestedStyleDelimiters_ANY_CHARACTER;

  /**
   * Uses the first alpha character or characters as the nested style delimiter. Note: To specify the number of letters, see repetition.
   */
  readonly LETTERS: NestedStyleDelimiters_LETTERS;
  /**
   * Uses the first alpha character or characters as the nested style delimiter. Note: To specify the number of letters, see repetition.
   */
  readonly letters: NestedStyleDelimiters_LETTERS;

  /**
   * Uses the first numeric character or characters as the nested style delimiter. Note: To specify the number of digits, see repetition.
   */
  readonly DIGITS: NestedStyleDelimiters_DIGITS;
  /**
   * Uses the first numeric character or characters as the nested style delimiter. Note: To specify the number of digits, see repetition.
   */
  readonly digits: NestedStyleDelimiters_DIGITS;

  /**
   * Uses the first tab character as the nested style delimiter. Note: Does not use the first tab stop. If no actual tab character has been inserted in the paragraph, the nested style is applied through the end of the paragraph. 
   */
  readonly TABS: NestedStyleDelimiters_TABS;
  /**
   * Uses the first tab character as the nested style delimiter. Note: Does not use the first tab stop. If no actual tab character has been inserted in the paragraph, the nested style is applied through the end of the paragraph. 
   */
  readonly tabs: NestedStyleDelimiters_TABS;

  /**
   * Uses the first inline graphic as the nested style delimiter.
   */
  readonly INLINE_GRAPHIC: NestedStyleDelimiters_INLINE_GRAPHIC;
  /**
   * Uses the first inline graphic as the nested style delimiter.
   */
  readonly inlineGraphic: NestedStyleDelimiters_INLINE_GRAPHIC;
  /**
   * Uses the first inline graphic as the nested style delimiter.
   */
  readonly inlinegraphic: NestedStyleDelimiters_INLINE_GRAPHIC;

  /**
   * Uses the dropcap as the nested style delimiter.
   */
  readonly DROPCAP: NestedStyleDelimiters_DROPCAP;
  /**
   * Uses the dropcap as the nested style delimiter.
   */
  readonly dropcap: NestedStyleDelimiters_DROPCAP;

  /**
   * Uses the first forced line break as the nested style delimiter.
   */
  readonly FORCED_LINE_BREAK: NestedStyleDelimiters_FORCED_LINE_BREAK;
  /**
   * Uses the first forced line break as the nested style delimiter.
   */
  readonly forcedLineBreak: NestedStyleDelimiters_FORCED_LINE_BREAK;
  /**
   * Uses the first forced line break as the nested style delimiter.
   */
  readonly forcedlinebreak: NestedStyleDelimiters_FORCED_LINE_BREAK;

  /**
   * Uses the inserted end nested style here character as the nested style delimiter.
   */
  readonly END_NESTED_STYLE: NestedStyleDelimiters_END_NESTED_STYLE;
  /**
   * Uses the inserted end nested style here character as the nested style delimiter.
   */
  readonly endNestedStyle: NestedStyleDelimiters_END_NESTED_STYLE;
  /**
   * Uses the inserted end nested style here character as the nested style delimiter.
   */
  readonly endnestedstyle: NestedStyleDelimiters_END_NESTED_STYLE;

  /**
   * Uses the first indent-to-here tab character as the nested style delimiter.
   *
   * Note: Does not use the first indent-to-here tab stop. If no actual indent-to-here tab
   * character has been inserted in the paragraph, the nested style is applied through the end
   * of the paragraph.
   */
  readonly INDENT_HERE_TAB: NestedStyleDelimiters_INDENT_HERE_TAB;
  /**
   * Uses the first indent-to-here tab character as the nested style delimiter.
   *
   * Note: Does not use the first indent-to-here tab stop. If no actual indent-to-here tab
   * character has been inserted in the paragraph, the nested style is applied through the end
   * of the paragraph.
   */
  readonly indentHereTab: NestedStyleDelimiters_INDENT_HERE_TAB;
  /**
   * Uses the first indent-to-here tab character as the nested style delimiter.
   *
   * Note: Does not use the first indent-to-here tab stop. If no actual indent-to-here tab
   * character has been inserted in the paragraph, the nested style is applied through the end
   * of the paragraph.
   */
  readonly indentheretab: NestedStyleDelimiters_INDENT_HERE_TAB;

  /**
   * Uses the first em space as the nested style delimiter.
   */
  readonly EM_SPACE: NestedStyleDelimiters_EM_SPACE;
  /**
   * Uses the first em space as the nested style delimiter.
   */
  readonly emSpace: NestedStyleDelimiters_EM_SPACE;
  /**
   * Uses the first em space as the nested style delimiter.
   */
  readonly emspace: NestedStyleDelimiters_EM_SPACE;

  /**
   * Uses the first en space as the nested style delimiter.
   */
  readonly EN_SPACE: NestedStyleDelimiters_EN_SPACE;
  /**
   * Uses the first en space as the nested style delimiter.
   */
  readonly enSpace: NestedStyleDelimiters_EN_SPACE;
  /**
   * Uses the first en space as the nested style delimiter.
   */
  readonly enspace: NestedStyleDelimiters_EN_SPACE;

  /**
   * Uses the first nonbreaking space as the nested style delimiter.
   */
  readonly NONBREAKING_SPACE: NestedStyleDelimiters_NONBREAKING_SPACE;
  /**
   * Uses the first nonbreaking space as the nested style delimiter.
   */
  readonly nonbreakingSpace: NestedStyleDelimiters_NONBREAKING_SPACE;
  /**
   * Uses the first nonbreaking space as the nested style delimiter.
   */
  readonly nonbreakingspace: NestedStyleDelimiters_NONBREAKING_SPACE;

  /**
   * Uses the first automatic page number as the nested style delimiter.
   */
  readonly AUTO_PAGE_NUMBER: NestedStyleDelimiters_AUTO_PAGE_NUMBER;
  /**
   * Uses the first automatic page number as the nested style delimiter.
   */
  readonly autoPageNumber: NestedStyleDelimiters_AUTO_PAGE_NUMBER;
  /**
   * Uses the first automatic page number as the nested style delimiter.
   */
  readonly autopagenumber: NestedStyleDelimiters_AUTO_PAGE_NUMBER;

  /**
   * Uses the first section name marker as the nested style delimiter.
   */
  readonly SECTION_MARKER: NestedStyleDelimiters_SECTION_MARKER;
  /**
   * Uses the first section name marker as the nested style delimiter.
   */
  readonly sectionMarker: NestedStyleDelimiters_SECTION_MARKER;
  /**
   * Uses the first section name marker as the nested style delimiter.
   */
  readonly sectionmarker: NestedStyleDelimiters_SECTION_MARKER;

  /**
   * Repeat
   */
  readonly REPEAT: NestedStyleDelimiters_REPEAT;
  /**
   * Repeat
   */
  readonly repeat: NestedStyleDelimiters_REPEAT;

}
