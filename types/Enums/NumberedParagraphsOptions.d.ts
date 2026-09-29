/**
 * NumberedParagraphsOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __NumberedParagraphsOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface NumberedParagraphsOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<NumberedParagraphsOptions>): boolean;

  /**
   * @internal **WARNING:** `__NumberedParagraphsOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__NumberedParagraphsOptions]: never;
}


/**
 * Includes the full paragraph text.
 */
interface NumberedParagraphsOptions_INCLUDE_FULL_PARAGRAPH extends NumberedParagraphsOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1953064560;
}

/**
 * Includes only the paragraph number.
 */
interface NumberedParagraphsOptions_INCLUDE_NUMBERS_ONLY extends NumberedParagraphsOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1953066607;
}

/**
 * Excludes paragraph numbers.
 */
interface NumberedParagraphsOptions_EXCLUDE_NUMBERS extends NumberedParagraphsOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1952804469;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * How numbered paragraphs are treated on export: kept as a numbered list, flattened to plain
 * text, or dropped.
 */
export declare namespace NumberedParagraphsOptions {
/**
 * Includes the full paragraph text.
 */
type INCLUDE_FULL_PARAGRAPH = NumberedParagraphsOptions_INCLUDE_FULL_PARAGRAPH;

/**
 * Includes only the paragraph number.
 */
type INCLUDE_NUMBERS_ONLY = NumberedParagraphsOptions_INCLUDE_NUMBERS_ONLY;

/**
 * Excludes paragraph numbers.
 */
type EXCLUDE_NUMBERS = NumberedParagraphsOptions_EXCLUDE_NUMBERS;

}
/**
 * How numbered paragraphs are treated on export: kept as a numbered list, flattened to plain
 * text, or dropped.
 */
export declare const NumberedParagraphsOptions: typeof Enumeration & {

  /**
   * Includes the full paragraph text.
   */
  readonly INCLUDE_FULL_PARAGRAPH: NumberedParagraphsOptions_INCLUDE_FULL_PARAGRAPH;
  /**
   * Includes the full paragraph text.
   */
  readonly includeFullParagraph: NumberedParagraphsOptions_INCLUDE_FULL_PARAGRAPH;
  /**
   * Includes the full paragraph text.
   */
  readonly includefullparagraph: NumberedParagraphsOptions_INCLUDE_FULL_PARAGRAPH;

  /**
   * Includes only the paragraph number.
   */
  readonly INCLUDE_NUMBERS_ONLY: NumberedParagraphsOptions_INCLUDE_NUMBERS_ONLY;
  /**
   * Includes only the paragraph number.
   */
  readonly includeNumbersOnly: NumberedParagraphsOptions_INCLUDE_NUMBERS_ONLY;
  /**
   * Includes only the paragraph number.
   */
  readonly includenumbersonly: NumberedParagraphsOptions_INCLUDE_NUMBERS_ONLY;

  /**
   * Excludes paragraph numbers.
   */
  readonly EXCLUDE_NUMBERS: NumberedParagraphsOptions_EXCLUDE_NUMBERS;
  /**
   * Excludes paragraph numbers.
   */
  readonly excludeNumbers: NumberedParagraphsOptions_EXCLUDE_NUMBERS;
  /**
   * Excludes paragraph numbers.
   */
  readonly excludenumbers: NumberedParagraphsOptions_EXCLUDE_NUMBERS;

}
