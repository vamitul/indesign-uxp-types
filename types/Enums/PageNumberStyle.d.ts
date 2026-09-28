/**
 * PageNumberStyle.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PageNumberStyle: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PageNumberStyle extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PageNumberStyle>): boolean;

  /**
   * @internal **WARNING:** `__PageNumberStyle` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PageNumberStyle]: never;
}


/**
 * Uses uppercase Roman numerals.
 */
interface PageNumberStyle_UPPER_ROMAN extends PageNumberStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1297247605;
}

/**
 * Uses lowercase Roman numerals.
 */
interface PageNumberStyle_LOWER_ROMAN extends PageNumberStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1297247596;
}

/**
 * Uses uppercase letters.
 */
interface PageNumberStyle_UPPER_LETTERS extends PageNumberStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296855669;
}

/**
 * Uses lowercase letters.
 */
interface PageNumberStyle_LOWER_LETTERS extends PageNumberStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296855660;
}

/**
 * Uses Arabic numerals.
 */
interface PageNumberStyle_ARABIC extends PageNumberStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1298231906;
}

/**
 * Uses Kanji.
 */
interface PageNumberStyle_KANJI extends PageNumberStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296788073;
}

/**
 * Uses Arabic Alif Ba Tah numbering.
 */
interface PageNumberStyle_ARABIC_ALIF_BA_TAH extends PageNumberStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296130420;
}

/**
 * Uses Arabic Abjad numbering.
 */
interface PageNumberStyle_ARABIC_ABJAD extends PageNumberStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296130410;
}

/**
 * Uses Hebrew Biblical numbering.
 */
interface PageNumberStyle_HEBREW_BIBLICAL extends PageNumberStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296589410;
}

/**
 * Uses Hebrew non-standard numbering.
 */
interface PageNumberStyle_HEBREW_NON_STANDARD extends PageNumberStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296589422;
}

/**
 * Uses Arabic numerals and formats all page numbers as two digits.
 */
interface PageNumberStyle_SINGLE_LEADING_ZEROS extends PageNumberStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1297312890;
}

/**
 * Uses Arabic numerals and formats all page numbers as three digits.
 */
interface PageNumberStyle_DOUBLE_LEADING_ZEROS extends PageNumberStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296329850;
}

/**
 * Uses Arabic numerals and formats all page numbers as four digits.
 */
interface PageNumberStyle_TRIPLE_LEADING_ZEROS extends PageNumberStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1297378426;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The numbering system page numbers are drawn in — Arabic, Roman, letters, Kanji, Hebrew, or a
 * zero-padded form.
 */
export declare namespace PageNumberStyle {
/**
 * Uses uppercase Roman numerals.
 */
type UPPER_ROMAN = PageNumberStyle_UPPER_ROMAN;

/**
 * Uses lowercase Roman numerals.
 */
type LOWER_ROMAN = PageNumberStyle_LOWER_ROMAN;

/**
 * Uses uppercase letters.
 */
type UPPER_LETTERS = PageNumberStyle_UPPER_LETTERS;

/**
 * Uses lowercase letters.
 */
type LOWER_LETTERS = PageNumberStyle_LOWER_LETTERS;

/**
 * Uses Arabic numerals.
 */
type ARABIC = PageNumberStyle_ARABIC;

/**
 * Uses Kanji.
 */
type KANJI = PageNumberStyle_KANJI;

/**
 * Uses Arabic Alif Ba Tah
 */
type ARABIC_ALIF_BA_TAH = PageNumberStyle_ARABIC_ALIF_BA_TAH;

/**
 * Uses Arabic Abjad
 */
type ARABIC_ABJAD = PageNumberStyle_ARABIC_ABJAD;

/**
 * Uses Hebrew Biblical
 */
type HEBREW_BIBLICAL = PageNumberStyle_HEBREW_BIBLICAL;

/**
 * Uses Hebrew Non Standard
 */
type HEBREW_NON_STANDARD = PageNumberStyle_HEBREW_NON_STANDARD;

/**
 * Uses Arabic numerals and formats all page numbers as two digits.
 */
type SINGLE_LEADING_ZEROS = PageNumberStyle_SINGLE_LEADING_ZEROS;

/**
 * Uses Arabic numerals and formats all page numbers as three digits.
 */
type DOUBLE_LEADING_ZEROS = PageNumberStyle_DOUBLE_LEADING_ZEROS;

/**
 * Uses Arabic numerals and formats all page numbers as four digits.
 */
type TRIPLE_LEADING_ZEROS = PageNumberStyle_TRIPLE_LEADING_ZEROS;

}
/**
 * The numbering system page numbers are drawn in — Arabic, Roman, letters, Kanji, Hebrew, or a
 * zero-padded form.
 */
export declare const PageNumberStyle: typeof Enumeration & {

  /**
   * Uses uppercase Roman numerals.
   */
  readonly UPPER_ROMAN: PageNumberStyle_UPPER_ROMAN;
  /**
   * Uses uppercase Roman numerals.
   */
  readonly upperRoman: PageNumberStyle_UPPER_ROMAN;
  /**
   * Uses uppercase Roman numerals.
   */
  readonly upperroman: PageNumberStyle_UPPER_ROMAN;

  /**
   * Uses lowercase Roman numerals.
   */
  readonly LOWER_ROMAN: PageNumberStyle_LOWER_ROMAN;
  /**
   * Uses lowercase Roman numerals.
   */
  readonly lowerRoman: PageNumberStyle_LOWER_ROMAN;
  /**
   * Uses lowercase Roman numerals.
   */
  readonly lowerroman: PageNumberStyle_LOWER_ROMAN;

  /**
   * Uses uppercase letters.
   */
  readonly UPPER_LETTERS: PageNumberStyle_UPPER_LETTERS;
  /**
   * Uses uppercase letters.
   */
  readonly upperLetters: PageNumberStyle_UPPER_LETTERS;
  /**
   * Uses uppercase letters.
   */
  readonly upperletters: PageNumberStyle_UPPER_LETTERS;

  /**
   * Uses lowercase letters.
   */
  readonly LOWER_LETTERS: PageNumberStyle_LOWER_LETTERS;
  /**
   * Uses lowercase letters.
   */
  readonly lowerLetters: PageNumberStyle_LOWER_LETTERS;
  /**
   * Uses lowercase letters.
   */
  readonly lowerletters: PageNumberStyle_LOWER_LETTERS;

  /**
   * Uses Arabic numerals.
   */
  readonly ARABIC: PageNumberStyle_ARABIC;
  /**
   * Uses Arabic numerals.
   */
  readonly arabic: PageNumberStyle_ARABIC;

  /**
   * Uses Kanji.
   */
  readonly KANJI: PageNumberStyle_KANJI;
  /**
   * Uses Kanji.
   */
  readonly kanji: PageNumberStyle_KANJI;

  /**
   * Uses Arabic Alif Ba Tah numbering.
   */
  readonly ARABIC_ALIF_BA_TAH: PageNumberStyle_ARABIC_ALIF_BA_TAH;
  /**
   * Uses Arabic Alif Ba Tah numbering.
   */
  readonly arabicAlifBaTah: PageNumberStyle_ARABIC_ALIF_BA_TAH;
  /**
   * Uses Arabic Alif Ba Tah numbering.
   */
  readonly arabicalifbatah: PageNumberStyle_ARABIC_ALIF_BA_TAH;

  /**
   * Uses Arabic Abjad numbering.
   */
  readonly ARABIC_ABJAD: PageNumberStyle_ARABIC_ABJAD;
  /**
   * Uses Arabic Abjad numbering.
   */
  readonly arabicAbjad: PageNumberStyle_ARABIC_ABJAD;
  /**
   * Uses Arabic Abjad numbering.
   */
  readonly arabicabjad: PageNumberStyle_ARABIC_ABJAD;

  /**
   * Uses Hebrew Biblical numbering.
   */
  readonly HEBREW_BIBLICAL: PageNumberStyle_HEBREW_BIBLICAL;
  /**
   * Uses Hebrew Biblical numbering.
   */
  readonly hebrewBiblical: PageNumberStyle_HEBREW_BIBLICAL;
  /**
   * Uses Hebrew Biblical numbering.
   */
  readonly hebrewbiblical: PageNumberStyle_HEBREW_BIBLICAL;

  /**
   * Uses Hebrew non-standard numbering.
   */
  readonly HEBREW_NON_STANDARD: PageNumberStyle_HEBREW_NON_STANDARD;
  /**
   * Uses Hebrew non-standard numbering.
   */
  readonly hebrewNonStandard: PageNumberStyle_HEBREW_NON_STANDARD;
  /**
   * Uses Hebrew non-standard numbering.
   */
  readonly hebrewnonstandard: PageNumberStyle_HEBREW_NON_STANDARD;

  /**
   * Uses Arabic numerals and formats all page numbers as two digits.
   */
  readonly SINGLE_LEADING_ZEROS: PageNumberStyle_SINGLE_LEADING_ZEROS;
  /**
   * Uses Arabic numerals and formats all page numbers as two digits.
   */
  readonly singleLeadingZeros: PageNumberStyle_SINGLE_LEADING_ZEROS;
  /**
   * Uses Arabic numerals and formats all page numbers as two digits.
   */
  readonly singleleadingzeros: PageNumberStyle_SINGLE_LEADING_ZEROS;

  /**
   * Uses Arabic numerals and formats all page numbers as three digits.
   */
  readonly DOUBLE_LEADING_ZEROS: PageNumberStyle_DOUBLE_LEADING_ZEROS;
  /**
   * Uses Arabic numerals and formats all page numbers as three digits.
   */
  readonly doubleLeadingZeros: PageNumberStyle_DOUBLE_LEADING_ZEROS;
  /**
   * Uses Arabic numerals and formats all page numbers as three digits.
   */
  readonly doubleleadingzeros: PageNumberStyle_DOUBLE_LEADING_ZEROS;

  /**
   * Uses Arabic numerals and formats all page numbers as four digits.
   */
  readonly TRIPLE_LEADING_ZEROS: PageNumberStyle_TRIPLE_LEADING_ZEROS;
  /**
   * Uses Arabic numerals and formats all page numbers as four digits.
   */
  readonly tripleLeadingZeros: PageNumberStyle_TRIPLE_LEADING_ZEROS;
  /**
   * Uses Arabic numerals and formats all page numbers as four digits.
   */
  readonly tripleleadingzeros: PageNumberStyle_TRIPLE_LEADING_ZEROS;

}
