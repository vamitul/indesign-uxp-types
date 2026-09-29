/**
 * RubyAlignments.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __RubyAlignments: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface RubyAlignments extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<RubyAlignments>): boolean;

  /**
   * @internal **WARNING:** `__RubyAlignments` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__RubyAlignments]: never;
}


/**
 * Aligns ruby with the left-most character in the parent text.
 */
interface RubyAlignments_RUBY_LEFT extends RubyAlignments {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1249012838;
}

/**
 * Centers ruby relative to the parent text.
 */
interface RubyAlignments_RUBY_CENTER extends RubyAlignments {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1249010548;
}

/**
 * Aligns ruby with the right-most character in the parent text.
 */
interface RubyAlignments_RUBY_RIGHT extends RubyAlignments {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1249014388;
}

/**
 * Justifies ruby across the parent text.
 */
interface RubyAlignments_RUBY_FULL_JUSTIFY extends RubyAlignments {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1249011306;
}

/**
 * Ruby JIS.
 */
interface RubyAlignments_RUBY_JIS extends RubyAlignments {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1249012339;
}

/**
 * Ruby equal aki.
 */
interface RubyAlignments_RUBY_EQUAL_AKI extends RubyAlignments {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1249011041;
}

/**
 * Ruby 1 aki.
 */
interface RubyAlignments_RUBY_1_AKI extends RubyAlignments {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1248997729;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * How ruby text is distributed across the characters it annotates.
 */
export declare namespace RubyAlignments {
/**
 * Aligns ruby with the left-most character in the parent text.
 */
type RUBY_LEFT = RubyAlignments_RUBY_LEFT;

/**
 * Centers ruby relative to the parent text.
 */
type RUBY_CENTER = RubyAlignments_RUBY_CENTER;

/**
 * Aligns ruby with the right-most character in the parent text.
 */
type RUBY_RIGHT = RubyAlignments_RUBY_RIGHT;

/**
 * Justifies ruby across the parent text.
 */
type RUBY_FULL_JUSTIFY = RubyAlignments_RUBY_FULL_JUSTIFY;

/**
 * Ruby JIS.
 */
type RUBY_JIS = RubyAlignments_RUBY_JIS;

/**
 * Ruby equal aki.
 */
type RUBY_EQUAL_AKI = RubyAlignments_RUBY_EQUAL_AKI;

/**
 * Ruby 1 aki.
 */
type RUBY_1_AKI = RubyAlignments_RUBY_1_AKI;

}
/**
 * How ruby text is distributed across the characters it annotates.
 */
export declare const RubyAlignments: typeof Enumeration & {

  /**
   * Aligns ruby with the left-most character in the parent text.
   */
  readonly RUBY_LEFT: RubyAlignments_RUBY_LEFT;
  /**
   * Aligns ruby with the left-most character in the parent text.
   */
  readonly rubyLeft: RubyAlignments_RUBY_LEFT;
  /**
   * Aligns ruby with the left-most character in the parent text.
   */
  readonly rubyleft: RubyAlignments_RUBY_LEFT;

  /**
   * Centers ruby relative to the parent text.
   */
  readonly RUBY_CENTER: RubyAlignments_RUBY_CENTER;
  /**
   * Centers ruby relative to the parent text.
   */
  readonly rubyCenter: RubyAlignments_RUBY_CENTER;
  /**
   * Centers ruby relative to the parent text.
   */
  readonly rubycenter: RubyAlignments_RUBY_CENTER;

  /**
   * Aligns ruby with the right-most character in the parent text.
   */
  readonly RUBY_RIGHT: RubyAlignments_RUBY_RIGHT;
  /**
   * Aligns ruby with the right-most character in the parent text.
   */
  readonly rubyRight: RubyAlignments_RUBY_RIGHT;
  /**
   * Aligns ruby with the right-most character in the parent text.
   */
  readonly rubyright: RubyAlignments_RUBY_RIGHT;

  /**
   * Justifies ruby across the parent text.
   */
  readonly RUBY_FULL_JUSTIFY: RubyAlignments_RUBY_FULL_JUSTIFY;
  /**
   * Justifies ruby across the parent text.
   */
  readonly rubyFullJustify: RubyAlignments_RUBY_FULL_JUSTIFY;
  /**
   * Justifies ruby across the parent text.
   */
  readonly rubyfulljustify: RubyAlignments_RUBY_FULL_JUSTIFY;

  /**
   * Ruby JIS.
   */
  readonly RUBY_JIS: RubyAlignments_RUBY_JIS;
  /**
   * Ruby JIS.
   */
  readonly rubyJis: RubyAlignments_RUBY_JIS;
  /**
   * Ruby JIS.
   */
  readonly rubyjis: RubyAlignments_RUBY_JIS;

  /**
   * Ruby equal aki.
   */
  readonly RUBY_EQUAL_AKI: RubyAlignments_RUBY_EQUAL_AKI;
  /**
   * Ruby equal aki.
   */
  readonly rubyEqualAki: RubyAlignments_RUBY_EQUAL_AKI;
  /**
   * Ruby equal aki.
   */
  readonly rubyequalaki: RubyAlignments_RUBY_EQUAL_AKI;

  /**
   * Ruby 1 aki.
   */
  readonly RUBY_1_AKI: RubyAlignments_RUBY_1_AKI;
  /**
   * Ruby 1 aki.
   */
  readonly ruby1Aki: RubyAlignments_RUBY_1_AKI;
  /**
   * Ruby 1 aki.
   */
  readonly ruby1aki: RubyAlignments_RUBY_1_AKI;

}
