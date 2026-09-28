/**
 * Position.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __Position: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface Position extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<Position>): boolean;

  /**
   * @internal **WARNING:** `__Position` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__Position]: never;
}


/**
 * Normal position.
 */
interface Position_NORMAL extends Position {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852797549;
}

/**
 * Superscripts the text.
 */
interface Position_SUPERSCRIPT extends Position {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936749411;
}

/**
 * Subscripts the text.
 */
interface Position_SUBSCRIPT extends Position {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1935831907;
}

/**
 * For OpenType fonts, uses--if available--raised glyphs that are sized correctly relative to the surrounding characters.
 */
interface Position_OT_SUPERSCRIPT extends Position {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1884247155;
}

/**
 * For OpenType fonts, uses--if available--lowered glyphs that are sized correctly relative to the surrounding characters.
 */
interface Position_OT_SUBSCRIPT extends Position {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1884247138;
}

/**
 * For OpenType fonts, shrinks the text but keeps the top of the characters aligned with the top of the main text. Note: Valid only for numeric characters.
 */
interface Position_OT_NUMERATOR extends Position {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1884247150;
}

/**
 * For OpenType fonts, shrinks the text but keeps text on the main text baseline. Note: Valid only for numeric characters.
 */
interface Position_OT_DENOMINATOR extends Position {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1884247140;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether characters sit on the baseline or are raised, lowered, or shifted into an OpenType
 * numerator, denominator, or fraction form.
 */
export declare namespace Position {
/**
 * Normal position
 */
type NORMAL = Position_NORMAL;

/**
 * Superscripts the text.
 */
type SUPERSCRIPT = Position_SUPERSCRIPT;

/**
 * Subscripts the text.
 */
type SUBSCRIPT = Position_SUBSCRIPT;

/**
 * For OpenType fonts, uses--if available--raised glyphs that are sized correctly relative to the surrounding characters.
 */
type OT_SUPERSCRIPT = Position_OT_SUPERSCRIPT;

/**
 * For OpenType fonts, uses--if available--lowered glyphs that are sized correctly relative to the surrounding characters.
 */
type OT_SUBSCRIPT = Position_OT_SUBSCRIPT;

/**
 * For OpenType fonts, shrinks the text but keeps the top of the characters aligned with the top of the main text. Note: Valid only for numeric characters.
 */
type OT_NUMERATOR = Position_OT_NUMERATOR;

/**
 * For OpenType fonts, shrinks the text but keeps text on the main text baseline. Note: Valid only for numeric characters.
 */
type OT_DENOMINATOR = Position_OT_DENOMINATOR;

}
/**
 * Whether characters sit on the baseline or are raised, lowered, or shifted into an OpenType
 * numerator, denominator, or fraction form.
 */
export declare const Position: typeof Enumeration & {

  /**
   * Normal position.
   */
  readonly NORMAL: Position_NORMAL;
  /**
   * Normal position.
   */
  readonly normal: Position_NORMAL;

  /**
   * Superscripts the text.
   */
  readonly SUPERSCRIPT: Position_SUPERSCRIPT;
  /**
   * Superscripts the text.
   */
  readonly superscript: Position_SUPERSCRIPT;

  /**
   * Subscripts the text.
   */
  readonly SUBSCRIPT: Position_SUBSCRIPT;
  /**
   * Subscripts the text.
   */
  readonly subscript: Position_SUBSCRIPT;

  /**
   * For OpenType fonts, uses--if available--raised glyphs that are sized correctly relative to the surrounding characters.
   */
  readonly OT_SUPERSCRIPT: Position_OT_SUPERSCRIPT;
  /**
   * For OpenType fonts, uses--if available--raised glyphs that are sized correctly relative to the surrounding characters.
   */
  readonly otSuperscript: Position_OT_SUPERSCRIPT;
  /**
   * For OpenType fonts, uses--if available--raised glyphs that are sized correctly relative to the surrounding characters.
   */
  readonly otsuperscript: Position_OT_SUPERSCRIPT;

  /**
   * For OpenType fonts, uses--if available--lowered glyphs that are sized correctly relative to the surrounding characters.
   */
  readonly OT_SUBSCRIPT: Position_OT_SUBSCRIPT;
  /**
   * For OpenType fonts, uses--if available--lowered glyphs that are sized correctly relative to the surrounding characters.
   */
  readonly otSubscript: Position_OT_SUBSCRIPT;
  /**
   * For OpenType fonts, uses--if available--lowered glyphs that are sized correctly relative to the surrounding characters.
   */
  readonly otsubscript: Position_OT_SUBSCRIPT;

  /**
   * For OpenType fonts, shrinks the text but keeps the top of the characters aligned with the top of the main text. Note: Valid only for numeric characters.
   */
  readonly OT_NUMERATOR: Position_OT_NUMERATOR;
  /**
   * For OpenType fonts, shrinks the text but keeps the top of the characters aligned with the top of the main text. Note: Valid only for numeric characters.
   */
  readonly otNumerator: Position_OT_NUMERATOR;
  /**
   * For OpenType fonts, shrinks the text but keeps the top of the characters aligned with the top of the main text. Note: Valid only for numeric characters.
   */
  readonly otnumerator: Position_OT_NUMERATOR;

  /**
   * For OpenType fonts, shrinks the text but keeps text on the main text baseline. Note: Valid only for numeric characters.
   */
  readonly OT_DENOMINATOR: Position_OT_DENOMINATOR;
  /**
   * For OpenType fonts, shrinks the text but keeps text on the main text baseline. Note: Valid only for numeric characters.
   */
  readonly otDenominator: Position_OT_DENOMINATOR;
  /**
   * For OpenType fonts, shrinks the text but keeps text on the main text baseline. Note: Valid only for numeric characters.
   */
  readonly otdenominator: Position_OT_DENOMINATOR;

}
