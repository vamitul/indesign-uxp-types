/**
 * FindChangeTransliterateCharacterTypes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __FindChangeTransliterateCharacterTypes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface FindChangeTransliterateCharacterTypes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<FindChangeTransliterateCharacterTypes>): boolean;

  /**
   * @internal **WARNING:** `__FindChangeTransliterateCharacterTypes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__FindChangeTransliterateCharacterTypes]: never;
}


/**
 * Half-width katakana.
 */
interface FindChangeTransliterateCharacterTypes_HALF_WIDTH_KATAKANA extends FindChangeTransliterateCharacterTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1179154251;
}

/**
 * Half-width Roman symbols.
 */
interface FindChangeTransliterateCharacterTypes_HALF_WIDTH_ROMAN_SYMBOLS extends FindChangeTransliterateCharacterTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1179154258;
}

/**
 * Full-width hiragana.
 */
interface FindChangeTransliterateCharacterTypes_FULL_WIDTH_HIRAGANA extends FindChangeTransliterateCharacterTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1179023176;
}

/**
 * Full-width katakana.
 */
interface FindChangeTransliterateCharacterTypes_FULL_WIDTH_KATAKANA extends FindChangeTransliterateCharacterTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1179023179;
}

/**
 * Full-width Roman symbols.
 */
interface FindChangeTransliterateCharacterTypes_FULL_WIDTH_ROMAN_SYMBOLS extends FindChangeTransliterateCharacterTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1179023186;
}

/**
 * Western Arabic digits (0, 1, 2, 3, ...).
 */
interface FindChangeTransliterateCharacterTypes_WESTERN_ARABIC_DIGITS extends FindChangeTransliterateCharacterTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1463903337;
}

/**
 * Arabic Indic(hindi) digits.
 */
interface FindChangeTransliterateCharacterTypes_ARABIC_INDIC_DIGITS extends FindChangeTransliterateCharacterTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1095328873;
}

/**
 * Farsi digits.
 */
interface FindChangeTransliterateCharacterTypes_FARSI_DIGITS extends FindChangeTransliterateCharacterTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1684629089;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Find/change transliterate character type options.
 */
export declare namespace FindChangeTransliterateCharacterTypes {
/**
 * Half-width katakana.
 */
type HALF_WIDTH_KATAKANA = FindChangeTransliterateCharacterTypes_HALF_WIDTH_KATAKANA;

/**
 * Half-width Roman symbols.
 */
type HALF_WIDTH_ROMAN_SYMBOLS = FindChangeTransliterateCharacterTypes_HALF_WIDTH_ROMAN_SYMBOLS;

/**
 * Full-width hiragana.
 */
type FULL_WIDTH_HIRAGANA = FindChangeTransliterateCharacterTypes_FULL_WIDTH_HIRAGANA;

/**
 * Full-width katakana.
 */
type FULL_WIDTH_KATAKANA = FindChangeTransliterateCharacterTypes_FULL_WIDTH_KATAKANA;

/**
 * Full-width Roman symbols.
 */
type FULL_WIDTH_ROMAN_SYMBOLS = FindChangeTransliterateCharacterTypes_FULL_WIDTH_ROMAN_SYMBOLS;

/**
 * Western Arabic digits (0, 1, 2, 3, ...).
 */
type WESTERN_ARABIC_DIGITS = FindChangeTransliterateCharacterTypes_WESTERN_ARABIC_DIGITS;

/**
 * Arabic Indic(hindi) digits.
 */
type ARABIC_INDIC_DIGITS = FindChangeTransliterateCharacterTypes_ARABIC_INDIC_DIGITS;

/**
 * Farsi digits.
 */
type FARSI_DIGITS = FindChangeTransliterateCharacterTypes_FARSI_DIGITS;

}
/**
 * Find/change transliterate character type options.
 */
export declare const FindChangeTransliterateCharacterTypes: typeof Enumeration & {

  /**
   * Half-width katakana.
   */
  readonly HALF_WIDTH_KATAKANA: FindChangeTransliterateCharacterTypes_HALF_WIDTH_KATAKANA;
  /**
   * Half-width katakana.
   */
  readonly halfWidthKatakana: FindChangeTransliterateCharacterTypes_HALF_WIDTH_KATAKANA;
  /**
   * Half-width katakana.
   */
  readonly halfwidthkatakana: FindChangeTransliterateCharacterTypes_HALF_WIDTH_KATAKANA;

  /**
   * Half-width Roman symbols.
   */
  readonly HALF_WIDTH_ROMAN_SYMBOLS: FindChangeTransliterateCharacterTypes_HALF_WIDTH_ROMAN_SYMBOLS;
  /**
   * Half-width Roman symbols.
   */
  readonly halfWidthRomanSymbols: FindChangeTransliterateCharacterTypes_HALF_WIDTH_ROMAN_SYMBOLS;
  /**
   * Half-width Roman symbols.
   */
  readonly halfwidthromansymbols: FindChangeTransliterateCharacterTypes_HALF_WIDTH_ROMAN_SYMBOLS;

  /**
   * Full-width hiragana.
   */
  readonly FULL_WIDTH_HIRAGANA: FindChangeTransliterateCharacterTypes_FULL_WIDTH_HIRAGANA;
  /**
   * Full-width hiragana.
   */
  readonly fullWidthHiragana: FindChangeTransliterateCharacterTypes_FULL_WIDTH_HIRAGANA;
  /**
   * Full-width hiragana.
   */
  readonly fullwidthhiragana: FindChangeTransliterateCharacterTypes_FULL_WIDTH_HIRAGANA;

  /**
   * Full-width katakana.
   */
  readonly FULL_WIDTH_KATAKANA: FindChangeTransliterateCharacterTypes_FULL_WIDTH_KATAKANA;
  /**
   * Full-width katakana.
   */
  readonly fullWidthKatakana: FindChangeTransliterateCharacterTypes_FULL_WIDTH_KATAKANA;
  /**
   * Full-width katakana.
   */
  readonly fullwidthkatakana: FindChangeTransliterateCharacterTypes_FULL_WIDTH_KATAKANA;

  /**
   * Full-width Roman symbols.
   */
  readonly FULL_WIDTH_ROMAN_SYMBOLS: FindChangeTransliterateCharacterTypes_FULL_WIDTH_ROMAN_SYMBOLS;
  /**
   * Full-width Roman symbols.
   */
  readonly fullWidthRomanSymbols: FindChangeTransliterateCharacterTypes_FULL_WIDTH_ROMAN_SYMBOLS;
  /**
   * Full-width Roman symbols.
   */
  readonly fullwidthromansymbols: FindChangeTransliterateCharacterTypes_FULL_WIDTH_ROMAN_SYMBOLS;

  /**
   * Western Arabic digits (0, 1, 2, 3, ...).
   */
  readonly WESTERN_ARABIC_DIGITS: FindChangeTransliterateCharacterTypes_WESTERN_ARABIC_DIGITS;
  /**
   * Western Arabic digits (0, 1, 2, 3, ...).
   */
  readonly westernArabicDigits: FindChangeTransliterateCharacterTypes_WESTERN_ARABIC_DIGITS;
  /**
   * Western Arabic digits (0, 1, 2, 3, ...).
   */
  readonly westernarabicdigits: FindChangeTransliterateCharacterTypes_WESTERN_ARABIC_DIGITS;

  /**
   * Arabic Indic(hindi) digits.
   */
  readonly ARABIC_INDIC_DIGITS: FindChangeTransliterateCharacterTypes_ARABIC_INDIC_DIGITS;
  /**
   * Arabic Indic(hindi) digits.
   */
  readonly arabicIndicDigits: FindChangeTransliterateCharacterTypes_ARABIC_INDIC_DIGITS;
  /**
   * Arabic Indic(hindi) digits.
   */
  readonly arabicindicdigits: FindChangeTransliterateCharacterTypes_ARABIC_INDIC_DIGITS;

  /**
   * Farsi digits.
   */
  readonly FARSI_DIGITS: FindChangeTransliterateCharacterTypes_FARSI_DIGITS;
  /**
   * Farsi digits.
   */
  readonly farsiDigits: FindChangeTransliterateCharacterTypes_FARSI_DIGITS;
  /**
   * Farsi digits.
   */
  readonly farsidigits: FindChangeTransliterateCharacterTypes_FARSI_DIGITS;

}
