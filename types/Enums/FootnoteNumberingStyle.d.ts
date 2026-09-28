/**
 * FootnoteNumberingStyle.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __FootnoteNumberingStyle: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface FootnoteNumberingStyle extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<FootnoteNumberingStyle>): boolean;

  /**
   * @internal **WARNING:** `__FootnoteNumberingStyle` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__FootnoteNumberingStyle]: never;
}


/**
 * Uses uppercase Roman numerals.
 */
interface FootnoteNumberingStyle_UPPER_ROMAN extends FootnoteNumberingStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1297247605;
}

/**
 * Uses lowercase Roman numerals.
 */
interface FootnoteNumberingStyle_LOWER_ROMAN extends FootnoteNumberingStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1297247596;
}

/**
 * Uses uppercase letters.
 */
interface FootnoteNumberingStyle_UPPER_LETTERS extends FootnoteNumberingStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296855669;
}

/**
 * Uses lowercase letters.
 */
interface FootnoteNumberingStyle_LOWER_LETTERS extends FootnoteNumberingStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296855660;
}

/**
 * Uses Arabic numerals.
 */
interface FootnoteNumberingStyle_ARABIC extends FootnoteNumberingStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1298231906;
}

/**
 * Uses symbols.
 */
interface FootnoteNumberingStyle_SYMBOLS extends FootnoteNumberingStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1181971321;
}

/**
 * Kanji.
 */
interface FootnoteNumberingStyle_KANJI extends FootnoteNumberingStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296788073;
}

/**
 * Full-width Arabic.
 */
interface FootnoteNumberingStyle_FULL_WIDTH_ARABIC extends FootnoteNumberingStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296455521;
}

/**
 * Single leading zeros.
 */
interface FootnoteNumberingStyle_SINGLE_LEADING_ZEROS extends FootnoteNumberingStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1297312890;
}

/**
 * Double leading zeros.
 */
interface FootnoteNumberingStyle_DOUBLE_LEADING_ZEROS extends FootnoteNumberingStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296329850;
}

/**
 * Asterisks.
 */
interface FootnoteNumberingStyle_ASTERISKS extends FootnoteNumberingStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1298232180;
}

/**
 * Uses Arabic Alif Ba Tah.
 */
interface FootnoteNumberingStyle_ARABIC_ALIF_BA_TAH extends FootnoteNumberingStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296130420;
}

/**
 * Uses Arabic Abjad.
 */
interface FootnoteNumberingStyle_ARABIC_ABJAD extends FootnoteNumberingStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296130410;
}

/**
 * Uses Hebrew Biblical.
 */
interface FootnoteNumberingStyle_HEBREW_BIBLICAL extends FootnoteNumberingStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296589410;
}

/**
 * Uses Hebrew Non Standard.
 */
interface FootnoteNumberingStyle_HEBREW_NON_STANDARD extends FootnoteNumberingStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296589422;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Footnote numbering style options.
 */
export declare namespace FootnoteNumberingStyle {
/**
 * Uses uppercase Roman numerals.
 */
type UPPER_ROMAN = FootnoteNumberingStyle_UPPER_ROMAN;

/**
 * Uses lowercase Roman numerals.
 */
type LOWER_ROMAN = FootnoteNumberingStyle_LOWER_ROMAN;

/**
 * Uses uppercase letters.
 */
type UPPER_LETTERS = FootnoteNumberingStyle_UPPER_LETTERS;

/**
 * Uses lowercase letters.
 */
type LOWER_LETTERS = FootnoteNumberingStyle_LOWER_LETTERS;

/**
 * Uses Arabic numerals.
 */
type ARABIC = FootnoteNumberingStyle_ARABIC;

/**
 * Uses symbols.
 */
type SYMBOLS = FootnoteNumberingStyle_SYMBOLS;

/**
 * Kanji.
 */
type KANJI = FootnoteNumberingStyle_KANJI;

/**
 * Full-width Arabic.
 */
type FULL_WIDTH_ARABIC = FootnoteNumberingStyle_FULL_WIDTH_ARABIC;

/**
 * Single leading zeros.
 */
type SINGLE_LEADING_ZEROS = FootnoteNumberingStyle_SINGLE_LEADING_ZEROS;

/**
 * Double leading zeros.
 */
type DOUBLE_LEADING_ZEROS = FootnoteNumberingStyle_DOUBLE_LEADING_ZEROS;

/**
 * Asterisks.
 */
type ASTERISKS = FootnoteNumberingStyle_ASTERISKS;

/**
 * Uses Arabic Alif Ba Tah
 */
type ARABIC_ALIF_BA_TAH = FootnoteNumberingStyle_ARABIC_ALIF_BA_TAH;

/**
 * Uses Arabic Abjad
 */
type ARABIC_ABJAD = FootnoteNumberingStyle_ARABIC_ABJAD;

/**
 * Uses Hebrew Biblical
 */
type HEBREW_BIBLICAL = FootnoteNumberingStyle_HEBREW_BIBLICAL;

/**
 * Uses Hebrew Non Standard
 */
type HEBREW_NON_STANDARD = FootnoteNumberingStyle_HEBREW_NON_STANDARD;

}
/**
 * Footnote numbering style options.
 */
export declare const FootnoteNumberingStyle: typeof Enumeration & {

  /**
   * Uses uppercase Roman numerals.
   */
  readonly UPPER_ROMAN: FootnoteNumberingStyle_UPPER_ROMAN;
  /**
   * Uses uppercase Roman numerals.
   */
  readonly upperRoman: FootnoteNumberingStyle_UPPER_ROMAN;
  /**
   * Uses uppercase Roman numerals.
   */
  readonly upperroman: FootnoteNumberingStyle_UPPER_ROMAN;

  /**
   * Uses lowercase Roman numerals.
   */
  readonly LOWER_ROMAN: FootnoteNumberingStyle_LOWER_ROMAN;
  /**
   * Uses lowercase Roman numerals.
   */
  readonly lowerRoman: FootnoteNumberingStyle_LOWER_ROMAN;
  /**
   * Uses lowercase Roman numerals.
   */
  readonly lowerroman: FootnoteNumberingStyle_LOWER_ROMAN;

  /**
   * Uses uppercase letters.
   */
  readonly UPPER_LETTERS: FootnoteNumberingStyle_UPPER_LETTERS;
  /**
   * Uses uppercase letters.
   */
  readonly upperLetters: FootnoteNumberingStyle_UPPER_LETTERS;
  /**
   * Uses uppercase letters.
   */
  readonly upperletters: FootnoteNumberingStyle_UPPER_LETTERS;

  /**
   * Uses lowercase letters.
   */
  readonly LOWER_LETTERS: FootnoteNumberingStyle_LOWER_LETTERS;
  /**
   * Uses lowercase letters.
   */
  readonly lowerLetters: FootnoteNumberingStyle_LOWER_LETTERS;
  /**
   * Uses lowercase letters.
   */
  readonly lowerletters: FootnoteNumberingStyle_LOWER_LETTERS;

  /**
   * Uses Arabic numerals.
   */
  readonly ARABIC: FootnoteNumberingStyle_ARABIC;
  /**
   * Uses Arabic numerals.
   */
  readonly arabic: FootnoteNumberingStyle_ARABIC;

  /**
   * Uses symbols.
   */
  readonly SYMBOLS: FootnoteNumberingStyle_SYMBOLS;
  /**
   * Uses symbols.
   */
  readonly symbols: FootnoteNumberingStyle_SYMBOLS;

  /**
   * Kanji.
   */
  readonly KANJI: FootnoteNumberingStyle_KANJI;
  /**
   * Kanji.
   */
  readonly kanji: FootnoteNumberingStyle_KANJI;

  /**
   * Full-width Arabic.
   */
  readonly FULL_WIDTH_ARABIC: FootnoteNumberingStyle_FULL_WIDTH_ARABIC;
  /**
   * Full-width Arabic.
   */
  readonly fullWidthArabic: FootnoteNumberingStyle_FULL_WIDTH_ARABIC;
  /**
   * Full-width Arabic.
   */
  readonly fullwidtharabic: FootnoteNumberingStyle_FULL_WIDTH_ARABIC;

  /**
   * Single leading zeros.
   */
  readonly SINGLE_LEADING_ZEROS: FootnoteNumberingStyle_SINGLE_LEADING_ZEROS;
  /**
   * Single leading zeros.
   */
  readonly singleLeadingZeros: FootnoteNumberingStyle_SINGLE_LEADING_ZEROS;
  /**
   * Single leading zeros.
   */
  readonly singleleadingzeros: FootnoteNumberingStyle_SINGLE_LEADING_ZEROS;

  /**
   * Double leading zeros.
   */
  readonly DOUBLE_LEADING_ZEROS: FootnoteNumberingStyle_DOUBLE_LEADING_ZEROS;
  /**
   * Double leading zeros.
   */
  readonly doubleLeadingZeros: FootnoteNumberingStyle_DOUBLE_LEADING_ZEROS;
  /**
   * Double leading zeros.
   */
  readonly doubleleadingzeros: FootnoteNumberingStyle_DOUBLE_LEADING_ZEROS;

  /**
   * Asterisks.
   */
  readonly ASTERISKS: FootnoteNumberingStyle_ASTERISKS;
  /**
   * Asterisks.
   */
  readonly asterisks: FootnoteNumberingStyle_ASTERISKS;

  /**
   * Uses Arabic Alif Ba Tah.
   */
  readonly ARABIC_ALIF_BA_TAH: FootnoteNumberingStyle_ARABIC_ALIF_BA_TAH;
  /**
   * Uses Arabic Alif Ba Tah.
   */
  readonly arabicAlifBaTah: FootnoteNumberingStyle_ARABIC_ALIF_BA_TAH;
  /**
   * Uses Arabic Alif Ba Tah.
   */
  readonly arabicalifbatah: FootnoteNumberingStyle_ARABIC_ALIF_BA_TAH;

  /**
   * Uses Arabic Abjad.
   */
  readonly ARABIC_ABJAD: FootnoteNumberingStyle_ARABIC_ABJAD;
  /**
   * Uses Arabic Abjad.
   */
  readonly arabicAbjad: FootnoteNumberingStyle_ARABIC_ABJAD;
  /**
   * Uses Arabic Abjad.
   */
  readonly arabicabjad: FootnoteNumberingStyle_ARABIC_ABJAD;

  /**
   * Uses Hebrew Biblical.
   */
  readonly HEBREW_BIBLICAL: FootnoteNumberingStyle_HEBREW_BIBLICAL;
  /**
   * Uses Hebrew Biblical.
   */
  readonly hebrewBiblical: FootnoteNumberingStyle_HEBREW_BIBLICAL;
  /**
   * Uses Hebrew Biblical.
   */
  readonly hebrewbiblical: FootnoteNumberingStyle_HEBREW_BIBLICAL;

  /**
   * Uses Hebrew Non Standard.
   */
  readonly HEBREW_NON_STANDARD: FootnoteNumberingStyle_HEBREW_NON_STANDARD;
  /**
   * Uses Hebrew Non Standard.
   */
  readonly hebrewNonStandard: FootnoteNumberingStyle_HEBREW_NON_STANDARD;
  /**
   * Uses Hebrew Non Standard.
   */
  readonly hebrewnonstandard: FootnoteNumberingStyle_HEBREW_NON_STANDARD;

}
