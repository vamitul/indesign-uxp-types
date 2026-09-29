/**
 * RubyParentSpacing.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __RubyParentSpacing: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface RubyParentSpacing extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<RubyParentSpacing>): boolean;

  /**
   * @internal **WARNING:** `__RubyParentSpacing` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__RubyParentSpacing]: never;
}


/**
 * Does not base ruby spacing on parent text. 
 */
interface RubyParentSpacing_RUBY_PARENT_NO_ADJUSTMENT extends RubyParentSpacing {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1249013345;
}

/**
 * Ruby parent both sides.
 */
interface RubyParentSpacing_RUBY_PARENT_BOTH_SIDES extends RubyParentSpacing {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1249010291;
}

/**
 * Ruby parent 121 aki.
 */
interface RubyParentSpacing_RUBY_PARENT_121_AKI extends RubyParentSpacing {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1248997682;
}

/**
 * Applies the parent text aki to the ruby characters.
 */
interface RubyParentSpacing_RUBY_PARENT_EQUAL_AKI extends RubyParentSpacing {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1249014113;
}

/**
 * Justifies ruby characters to both edges of the parent text.
 */
interface RubyParentSpacing_RUBY_PARENT_FULL_JUSTIFY extends RubyParentSpacing {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1249014634;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for ruby spacing relative to the parent text.
 */
export declare namespace RubyParentSpacing {
/**
 * Does not base ruby spacing on parent text. 
 */
type RUBY_PARENT_NO_ADJUSTMENT = RubyParentSpacing_RUBY_PARENT_NO_ADJUSTMENT;

/**
 * Ruby parent both sides.
 */
type RUBY_PARENT_BOTH_SIDES = RubyParentSpacing_RUBY_PARENT_BOTH_SIDES;

/**
 * Ruby parent 121 aki.
 */
type RUBY_PARENT_121_AKI = RubyParentSpacing_RUBY_PARENT_121_AKI;

/**
 * Applies the parent text aki to the ruby characters.
 */
type RUBY_PARENT_EQUAL_AKI = RubyParentSpacing_RUBY_PARENT_EQUAL_AKI;

/**
 * Justifies ruby characters to both edges of the parent text.
 */
type RUBY_PARENT_FULL_JUSTIFY = RubyParentSpacing_RUBY_PARENT_FULL_JUSTIFY;

}
/**
 * Options for ruby spacing relative to the parent text.
 */
export declare const RubyParentSpacing: typeof Enumeration & {

  /**
   * Does not base ruby spacing on parent text. 
   */
  readonly RUBY_PARENT_NO_ADJUSTMENT: RubyParentSpacing_RUBY_PARENT_NO_ADJUSTMENT;
  /**
   * Does not base ruby spacing on parent text. 
   */
  readonly rubyParentNoAdjustment: RubyParentSpacing_RUBY_PARENT_NO_ADJUSTMENT;
  /**
   * Does not base ruby spacing on parent text. 
   */
  readonly rubyparentnoadjustment: RubyParentSpacing_RUBY_PARENT_NO_ADJUSTMENT;

  /**
   * Ruby parent both sides.
   */
  readonly RUBY_PARENT_BOTH_SIDES: RubyParentSpacing_RUBY_PARENT_BOTH_SIDES;
  /**
   * Ruby parent both sides.
   */
  readonly rubyParentBothSides: RubyParentSpacing_RUBY_PARENT_BOTH_SIDES;
  /**
   * Ruby parent both sides.
   */
  readonly rubyparentbothsides: RubyParentSpacing_RUBY_PARENT_BOTH_SIDES;

  /**
   * Ruby parent 121 aki.
   */
  readonly RUBY_PARENT_121_AKI: RubyParentSpacing_RUBY_PARENT_121_AKI;
  /**
   * Ruby parent 121 aki.
   */
  readonly rubyParent121Aki: RubyParentSpacing_RUBY_PARENT_121_AKI;
  /**
   * Ruby parent 121 aki.
   */
  readonly rubyparent121aki: RubyParentSpacing_RUBY_PARENT_121_AKI;

  /**
   * Applies the parent text aki to the ruby characters.
   */
  readonly RUBY_PARENT_EQUAL_AKI: RubyParentSpacing_RUBY_PARENT_EQUAL_AKI;
  /**
   * Applies the parent text aki to the ruby characters.
   */
  readonly rubyParentEqualAki: RubyParentSpacing_RUBY_PARENT_EQUAL_AKI;
  /**
   * Applies the parent text aki to the ruby characters.
   */
  readonly rubyparentequalaki: RubyParentSpacing_RUBY_PARENT_EQUAL_AKI;

  /**
   * Justifies ruby characters to both edges of the parent text.
   */
  readonly RUBY_PARENT_FULL_JUSTIFY: RubyParentSpacing_RUBY_PARENT_FULL_JUSTIFY;
  /**
   * Justifies ruby characters to both edges of the parent text.
   */
  readonly rubyParentFullJustify: RubyParentSpacing_RUBY_PARENT_FULL_JUSTIFY;
  /**
   * Justifies ruby characters to both edges of the parent text.
   */
  readonly rubyparentfulljustify: RubyParentSpacing_RUBY_PARENT_FULL_JUSTIFY;

}
