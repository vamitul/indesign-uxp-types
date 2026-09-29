/**
 * VariableNumberingStyles.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __VariableNumberingStyles: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface VariableNumberingStyles extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<VariableNumberingStyles>): boolean;

  /**
   * @internal **WARNING:** `__VariableNumberingStyles` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__VariableNumberingStyles]: never;
}


/**
 * Uses the current numbering style.
 */
interface VariableNumberingStyles_CURRENT extends VariableNumberingStyles {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1298363762;
}

/**
 * Arabic numerals.
 */
interface VariableNumberingStyles_ARABIC extends VariableNumberingStyles {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1298231906;
}

/**
 * Uppercase Roman numerals.
 */
interface VariableNumberingStyles_UPPER_ROMAN extends VariableNumberingStyles {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1297247605;
}

/**
 * Lowercase Roman numerals.
 */
interface VariableNumberingStyles_LOWER_ROMAN extends VariableNumberingStyles {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1297247596;
}

/**
 * Uppercase letters.
 */
interface VariableNumberingStyles_UPPER_LETTERS extends VariableNumberingStyles {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296855669;
}

/**
 * Lowercase letters.
 */
interface VariableNumberingStyles_LOWER_LETTERS extends VariableNumberingStyles {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296855660;
}

/**
 * Single leading zero.
 */
interface VariableNumberingStyles_SINGLE_LEADING_ZEROS extends VariableNumberingStyles {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1297312890;
}

/**
 * Double leading zeros.
 */
interface VariableNumberingStyles_DOUBLE_LEADING_ZEROS extends VariableNumberingStyles {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296329850;
}

/**
 * Kanji.
 */
interface VariableNumberingStyles_KANJI extends VariableNumberingStyles {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296788073;
}

/**
 * Full-width Arabic numerals.
 */
interface VariableNumberingStyles_FULL_WIDTH_ARABIC extends VariableNumberingStyles {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1296455521;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Which numeral style a number variable displays — Arabic, Roman, lettered, zero-padded, Kanji,
 * or full-width Arabic numerals.
 */
export declare namespace VariableNumberingStyles {
/**
 * Uses the current numbering style.
 */
type CURRENT = VariableNumberingStyles_CURRENT;

/**
 * Arabic numerals.
 */
type ARABIC = VariableNumberingStyles_ARABIC;

/**
 * Uppercase Roman numerals.
 */
type UPPER_ROMAN = VariableNumberingStyles_UPPER_ROMAN;

/**
 * Lowercase Roman numerals.
 */
type LOWER_ROMAN = VariableNumberingStyles_LOWER_ROMAN;

/**
 * Uppercase letters.
 */
type UPPER_LETTERS = VariableNumberingStyles_UPPER_LETTERS;

/**
 * Lowercase letters.
 */
type LOWER_LETTERS = VariableNumberingStyles_LOWER_LETTERS;

/**
 * Single leading zero.
 */
type SINGLE_LEADING_ZEROS = VariableNumberingStyles_SINGLE_LEADING_ZEROS;

/**
 * Double leading zeros.
 */
type DOUBLE_LEADING_ZEROS = VariableNumberingStyles_DOUBLE_LEADING_ZEROS;

/**
 * Kanji.
 */
type KANJI = VariableNumberingStyles_KANJI;

/**
 * Full-width Arabic numerals.
 */
type FULL_WIDTH_ARABIC = VariableNumberingStyles_FULL_WIDTH_ARABIC;

}
/**
 * Which numeral style a number variable displays — Arabic, Roman, lettered, zero-padded, Kanji,
 * or full-width Arabic numerals.
 */
export declare const VariableNumberingStyles: typeof Enumeration & {

  /**
   * Uses the current numbering style.
   */
  readonly CURRENT: VariableNumberingStyles_CURRENT;
  /**
   * Uses the current numbering style.
   */
  readonly current: VariableNumberingStyles_CURRENT;

  /**
   * Arabic numerals.
   */
  readonly ARABIC: VariableNumberingStyles_ARABIC;
  /**
   * Arabic numerals.
   */
  readonly arabic: VariableNumberingStyles_ARABIC;

  /**
   * Uppercase Roman numerals.
   */
  readonly UPPER_ROMAN: VariableNumberingStyles_UPPER_ROMAN;
  /**
   * Uppercase Roman numerals.
   */
  readonly upperRoman: VariableNumberingStyles_UPPER_ROMAN;
  /**
   * Uppercase Roman numerals.
   */
  readonly upperroman: VariableNumberingStyles_UPPER_ROMAN;

  /**
   * Lowercase Roman numerals.
   */
  readonly LOWER_ROMAN: VariableNumberingStyles_LOWER_ROMAN;
  /**
   * Lowercase Roman numerals.
   */
  readonly lowerRoman: VariableNumberingStyles_LOWER_ROMAN;
  /**
   * Lowercase Roman numerals.
   */
  readonly lowerroman: VariableNumberingStyles_LOWER_ROMAN;

  /**
   * Uppercase letters.
   */
  readonly UPPER_LETTERS: VariableNumberingStyles_UPPER_LETTERS;
  /**
   * Uppercase letters.
   */
  readonly upperLetters: VariableNumberingStyles_UPPER_LETTERS;
  /**
   * Uppercase letters.
   */
  readonly upperletters: VariableNumberingStyles_UPPER_LETTERS;

  /**
   * Lowercase letters.
   */
  readonly LOWER_LETTERS: VariableNumberingStyles_LOWER_LETTERS;
  /**
   * Lowercase letters.
   */
  readonly lowerLetters: VariableNumberingStyles_LOWER_LETTERS;
  /**
   * Lowercase letters.
   */
  readonly lowerletters: VariableNumberingStyles_LOWER_LETTERS;

  /**
   * Single leading zero.
   */
  readonly SINGLE_LEADING_ZEROS: VariableNumberingStyles_SINGLE_LEADING_ZEROS;
  /**
   * Single leading zero.
   */
  readonly singleLeadingZeros: VariableNumberingStyles_SINGLE_LEADING_ZEROS;
  /**
   * Single leading zero.
   */
  readonly singleleadingzeros: VariableNumberingStyles_SINGLE_LEADING_ZEROS;

  /**
   * Double leading zeros.
   */
  readonly DOUBLE_LEADING_ZEROS: VariableNumberingStyles_DOUBLE_LEADING_ZEROS;
  /**
   * Double leading zeros.
   */
  readonly doubleLeadingZeros: VariableNumberingStyles_DOUBLE_LEADING_ZEROS;
  /**
   * Double leading zeros.
   */
  readonly doubleleadingzeros: VariableNumberingStyles_DOUBLE_LEADING_ZEROS;

  /**
   * Kanji.
   */
  readonly KANJI: VariableNumberingStyles_KANJI;
  /**
   * Kanji.
   */
  readonly kanji: VariableNumberingStyles_KANJI;

  /**
   * Full-width Arabic numerals.
   */
  readonly FULL_WIDTH_ARABIC: VariableNumberingStyles_FULL_WIDTH_ARABIC;
  /**
   * Full-width Arabic numerals.
   */
  readonly fullWidthArabic: VariableNumberingStyles_FULL_WIDTH_ARABIC;
  /**
   * Full-width Arabic numerals.
   */
  readonly fullwidtharabic: VariableNumberingStyles_FULL_WIDTH_ARABIC;

}
