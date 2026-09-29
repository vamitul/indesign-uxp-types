/**
 * NumberingStyle.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __NumberingStyle: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface NumberingStyle extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<NumberingStyle>): boolean;

  /**
   * @internal **WARNING:** `__NumberingStyle` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__NumberingStyle]: never;
}


/**
 * Uppercase Roman numerals.
 */
interface NumberingStyle_UPPER_ROMAN extends NumberingStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1297247605;
}

/**
 * Lowercase Roman numerals.
 */
interface NumberingStyle_LOWER_ROMAN extends NumberingStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1297247596;
}

/**
 * Uppercase letters.
 */
interface NumberingStyle_UPPER_LETTERS extends NumberingStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296855669;
}

/**
 * Lowercase letters.
 */
interface NumberingStyle_LOWER_LETTERS extends NumberingStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296855660;
}

/**
 * Arabic numerals.
 */
interface NumberingStyle_ARABIC extends NumberingStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1298231906;
}

/**
 * Kanji.
 */
interface NumberingStyle_KANJI extends NumberingStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296788073;
}

/**
 * Katakana (a, i, u, e, o...).
 */
interface NumberingStyle_KATAKANA_MODERN extends NumberingStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1265920877;
}

/**
 * Katakana (i, ro, ha, ni...).
 */
interface NumberingStyle_KATAKANA_TRADITIONAL extends NumberingStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1265920884;
}

/**
 * Do not add characters.
 */
interface NumberingStyle_FORMAT_NONE extends NumberingStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701733998;
}

/**
 * Add single leading zeros.
 */
interface NumberingStyle_SINGLE_LEADING_ZEROS extends NumberingStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1297312890;
}

/**
 * Uses Arabic Alif Ba Tah.
 */
interface NumberingStyle_ARABIC_ALIF_BA_TAH extends NumberingStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296130420;
}

/**
 * Uses Arabic Abjad.
 */
interface NumberingStyle_ARABIC_ABJAD extends NumberingStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296130410;
}

/**
 * Uses Hebrew Biblical.
 */
interface NumberingStyle_HEBREW_BIBLICAL extends NumberingStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296589410;
}

/**
 * Uses Hebrew Non Standard.
 */
interface NumberingStyle_HEBREW_NON_STANDARD extends NumberingStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296589422;
}

/**
 * Add double leading zeros.
 */
interface NumberingStyle_DOUBLE_LEADING_ZEROS extends NumberingStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296329850;
}

/**
 * Add triple leading zeros.
 */
interface NumberingStyle_TRIPLE_LEADING_ZEROS extends NumberingStyle {
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
 * Numbering style options for automatic numbering, such as numbered lists and
 * page numbers.
 *
 * Members that accept a numbering style also accept the **format template string**
 * InDesign shows in its numbering dropdown, which is what the application stores:
 *
 * | member | string |
 * |---|---|
 * | {@link UPPER_ROMAN} | `I, II, III, IV...` |
 * | {@link LOWER_ROMAN} | `i, ii, iii, iv...` |
 * | {@link UPPER_LETTERS} | `A, B, C, D...` |
 * | {@link LOWER_LETTERS} | `a, b, c, d...` |
 * | {@link ARABIC} | `1, 2, 3, 4...` |
 * | {@link SINGLE_LEADING_ZEROS} | `01,02,03...` |
 * | {@link DOUBLE_LEADING_ZEROS} | `001,002,003...` |
 * | {@link TRIPLE_LEADING_ZEROS} | `0001,0002,0003...` |
 * | {@link KANJI} | `$ID/(kanji) 1,2,3,4...` |
 * | {@link KATAKANA_MODERN} | `$ID/(katakana) a,i,u,e,o...` |
 * | {@link KATAKANA_TRADITIONAL} | `$ID/(katakana) i,ro,ha,ni...` |
 * | {@link ARABIC_ALIF_BA_TAH} | `$ID/ArabicAlifBaTah...` |
 * | {@link ARABIC_ABJAD} | `$ID/ArabicAbjad...` |
 * | {@link HEBREW_BIBLICAL} | `$ID/HebrewBiblical...` |
 * | {@link HEBREW_NON_STANDARD} | `$ID/HebrewNonStandard...` |
 * | {@link FORMAT_NONE} | `None` |
 *
 * A `$ID/` prefix is InDesign's locale-key convention. CJK and Middle-Eastern
 * builds offer further templates beyond this list.
 */
export declare namespace NumberingStyle {
/**
 * Uppercase Roman numerals.
 */
type UPPER_ROMAN = NumberingStyle_UPPER_ROMAN;

/**
 * Lowercase Roman numerals.
 */
type LOWER_ROMAN = NumberingStyle_LOWER_ROMAN;

/**
 * Uppercase letters.
 */
type UPPER_LETTERS = NumberingStyle_UPPER_LETTERS;

/**
 * Lowercase letters.
 */
type LOWER_LETTERS = NumberingStyle_LOWER_LETTERS;

/**
 * Arabic numerals.
 */
type ARABIC = NumberingStyle_ARABIC;

/**
 * Kanji.
 */
type KANJI = NumberingStyle_KANJI;

/**
 * Katakana (a, i, u, e, o...).
 */
type KATAKANA_MODERN = NumberingStyle_KATAKANA_MODERN;

/**
 * Katakana (i, ro, ha, ni...).
 */
type KATAKANA_TRADITIONAL = NumberingStyle_KATAKANA_TRADITIONAL;

/**
 * Do not add characters.
 */
type FORMAT_NONE = NumberingStyle_FORMAT_NONE;

/**
 * Add single leading zeros.
 */
type SINGLE_LEADING_ZEROS = NumberingStyle_SINGLE_LEADING_ZEROS;

/**
 * Uses Arabic Alif Ba Tah.
 */
type ARABIC_ALIF_BA_TAH = NumberingStyle_ARABIC_ALIF_BA_TAH;

/**
 * Uses Arabic Abjad.
 */
type ARABIC_ABJAD = NumberingStyle_ARABIC_ABJAD;

/**
 * Uses Hebrew Biblical.
 */
type HEBREW_BIBLICAL = NumberingStyle_HEBREW_BIBLICAL;

/**
 * Uses Hebrew Non Standard.
 */
type HEBREW_NON_STANDARD = NumberingStyle_HEBREW_NON_STANDARD;

/**
 * Add double leading zeros.
 */
type DOUBLE_LEADING_ZEROS = NumberingStyle_DOUBLE_LEADING_ZEROS;

/**
 * Add triple leading zeros.
 */
type TRIPLE_LEADING_ZEROS = NumberingStyle_TRIPLE_LEADING_ZEROS;

}
export declare const NumberingStyle: typeof Enumeration & {

  /**
   * Uppercase Roman numerals.
   */
  readonly UPPER_ROMAN: NumberingStyle_UPPER_ROMAN;
  /**
   * Uppercase Roman numerals.
   */
  readonly upperRoman: NumberingStyle_UPPER_ROMAN;
  /**
   * Uppercase Roman numerals.
   */
  readonly upperroman: NumberingStyle_UPPER_ROMAN;

  /**
   * Lowercase Roman numerals.
   */
  readonly LOWER_ROMAN: NumberingStyle_LOWER_ROMAN;
  /**
   * Lowercase Roman numerals.
   */
  readonly lowerRoman: NumberingStyle_LOWER_ROMAN;
  /**
   * Lowercase Roman numerals.
   */
  readonly lowerroman: NumberingStyle_LOWER_ROMAN;

  /**
   * Uppercase letters.
   */
  readonly UPPER_LETTERS: NumberingStyle_UPPER_LETTERS;
  /**
   * Uppercase letters.
   */
  readonly upperLetters: NumberingStyle_UPPER_LETTERS;
  /**
   * Uppercase letters.
   */
  readonly upperletters: NumberingStyle_UPPER_LETTERS;

  /**
   * Lowercase letters.
   */
  readonly LOWER_LETTERS: NumberingStyle_LOWER_LETTERS;
  /**
   * Lowercase letters.
   */
  readonly lowerLetters: NumberingStyle_LOWER_LETTERS;
  /**
   * Lowercase letters.
   */
  readonly lowerletters: NumberingStyle_LOWER_LETTERS;

  /**
   * Arabic numerals.
   */
  readonly ARABIC: NumberingStyle_ARABIC;
  /**
   * Arabic numerals.
   */
  readonly arabic: NumberingStyle_ARABIC;

  /**
   * Kanji.
   */
  readonly KANJI: NumberingStyle_KANJI;
  /**
   * Kanji.
   */
  readonly kanji: NumberingStyle_KANJI;

  /**
   * Katakana (a, i, u, e, o...).
   */
  readonly KATAKANA_MODERN: NumberingStyle_KATAKANA_MODERN;
  /**
   * Katakana (a, i, u, e, o...).
   */
  readonly katakanaModern: NumberingStyle_KATAKANA_MODERN;
  /**
   * Katakana (a, i, u, e, o...).
   */
  readonly katakanamodern: NumberingStyle_KATAKANA_MODERN;

  /**
   * Katakana (i, ro, ha, ni...).
   */
  readonly KATAKANA_TRADITIONAL: NumberingStyle_KATAKANA_TRADITIONAL;
  /**
   * Katakana (i, ro, ha, ni...).
   */
  readonly katakanaTraditional: NumberingStyle_KATAKANA_TRADITIONAL;
  /**
   * Katakana (i, ro, ha, ni...).
   */
  readonly katakanatraditional: NumberingStyle_KATAKANA_TRADITIONAL;

  /**
   * Do not add characters.
   */
  readonly FORMAT_NONE: NumberingStyle_FORMAT_NONE;
  /**
   * Do not add characters.
   */
  readonly formatNone: NumberingStyle_FORMAT_NONE;
  /**
   * Do not add characters.
   */
  readonly formatnone: NumberingStyle_FORMAT_NONE;

  /**
   * Add single leading zeros.
   */
  readonly SINGLE_LEADING_ZEROS: NumberingStyle_SINGLE_LEADING_ZEROS;
  /**
   * Add single leading zeros.
   */
  readonly singleLeadingZeros: NumberingStyle_SINGLE_LEADING_ZEROS;
  /**
   * Add single leading zeros.
   */
  readonly singleleadingzeros: NumberingStyle_SINGLE_LEADING_ZEROS;

  /**
   * Uses Arabic Alif Ba Tah.
   */
  readonly ARABIC_ALIF_BA_TAH: NumberingStyle_ARABIC_ALIF_BA_TAH;
  /**
   * Uses Arabic Alif Ba Tah.
   */
  readonly arabicAlifBaTah: NumberingStyle_ARABIC_ALIF_BA_TAH;
  /**
   * Uses Arabic Alif Ba Tah.
   */
  readonly arabicalifbatah: NumberingStyle_ARABIC_ALIF_BA_TAH;

  /**
   * Uses Arabic Abjad.
   */
  readonly ARABIC_ABJAD: NumberingStyle_ARABIC_ABJAD;
  /**
   * Uses Arabic Abjad.
   */
  readonly arabicAbjad: NumberingStyle_ARABIC_ABJAD;
  /**
   * Uses Arabic Abjad.
   */
  readonly arabicabjad: NumberingStyle_ARABIC_ABJAD;

  /**
   * Uses Hebrew Biblical.
   */
  readonly HEBREW_BIBLICAL: NumberingStyle_HEBREW_BIBLICAL;
  /**
   * Uses Hebrew Biblical.
   */
  readonly hebrewBiblical: NumberingStyle_HEBREW_BIBLICAL;
  /**
   * Uses Hebrew Biblical.
   */
  readonly hebrewbiblical: NumberingStyle_HEBREW_BIBLICAL;

  /**
   * Uses Hebrew Non Standard.
   */
  readonly HEBREW_NON_STANDARD: NumberingStyle_HEBREW_NON_STANDARD;
  /**
   * Uses Hebrew Non Standard.
   */
  readonly hebrewNonStandard: NumberingStyle_HEBREW_NON_STANDARD;
  /**
   * Uses Hebrew Non Standard.
   */
  readonly hebrewnonstandard: NumberingStyle_HEBREW_NON_STANDARD;

  /**
   * Add double leading zeros.
   */
  readonly DOUBLE_LEADING_ZEROS: NumberingStyle_DOUBLE_LEADING_ZEROS;
  /**
   * Add double leading zeros.
   */
  readonly doubleLeadingZeros: NumberingStyle_DOUBLE_LEADING_ZEROS;
  /**
   * Add double leading zeros.
   */
  readonly doubleleadingzeros: NumberingStyle_DOUBLE_LEADING_ZEROS;

  /**
   * Add triple leading zeros.
   */
  readonly TRIPLE_LEADING_ZEROS: NumberingStyle_TRIPLE_LEADING_ZEROS;
  /**
   * Add triple leading zeros.
   */
  readonly tripleLeadingZeros: NumberingStyle_TRIPLE_LEADING_ZEROS;
  /**
   * Add triple leading zeros.
   */
  readonly tripleleadingzeros: NumberingStyle_TRIPLE_LEADING_ZEROS;

}
