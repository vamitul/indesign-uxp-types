/**
 * AlternateGlyphForms.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __AlternateGlyphForms: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface AlternateGlyphForms extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<AlternateGlyphForms>): boolean;

  /**
   * @internal **WARNING:** `__AlternateGlyphForms` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__AlternateGlyphForms]: never;
}


/**
 * Does not use an alternate form. 
 */
interface AlternateGlyphForms_NONE extends AlternateGlyphForms {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}

/**
 * Uses the traditional variant.
 */
interface AlternateGlyphForms_TRADITIONAL_FORM extends AlternateGlyphForms {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1247897460;
}

/**
 * Uses the expert variant.
 */
interface AlternateGlyphForms_EXPERT_FORM extends AlternateGlyphForms {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1247897445;
}

/**
 * Uses the JIS78 variant.
 */
interface AlternateGlyphForms_JIS78_FORM extends AlternateGlyphForms {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1247897399;
}

/**
 * Uses the JIS83 variant.
 */
interface AlternateGlyphForms_JIS83_FORM extends AlternateGlyphForms {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1247897400;
}

/**
 * Uses the monospaced half-width variant.
 */
interface AlternateGlyphForms_MONOSPACED_HALF_WIDTH_FORM extends AlternateGlyphForms {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1247897453;
}

/**
 * Uses the third-width variant.
 */
interface AlternateGlyphForms_THIRD_WIDTH_FORM extends AlternateGlyphForms {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1247897448;
}

/**
 * Uses the quarter-width variant.
 */
interface AlternateGlyphForms_QUARTER_WIDTH_FORM extends AlternateGlyphForms {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1247897457;
}

/**
 * Uses the NLC variant.
 */
interface AlternateGlyphForms_NLC_FORM extends AlternateGlyphForms {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1247897454;
}

/**
 * Substitutes proportional glyphs for half-width and full-width glyphs. 
 */
interface AlternateGlyphForms_PROPORTIONAL_WIDTH_FORM extends AlternateGlyphForms {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1247897456;
}

/**
 * Uses the full-width variant.
 */
interface AlternateGlyphForms_FULL_WIDTH_FORM extends AlternateGlyphForms {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1247897446;
}

/**
 * Uses the JIS04 variant.
 */
interface AlternateGlyphForms_JIS04_FORM extends AlternateGlyphForms {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1247897396;
}

/**
 * Uses the JIS90 variant.
 */
interface AlternateGlyphForms_JIS90_FORM extends AlternateGlyphForms {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1247897401;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Glyph variant substitution options for standard glyphs. 
 */
export declare namespace AlternateGlyphForms {
/**
 * Does not use an alternate form. 
 */
type NONE = AlternateGlyphForms_NONE;

/**
 * Uses the traditional variant.
 */
type TRADITIONAL_FORM = AlternateGlyphForms_TRADITIONAL_FORM;

/**
 * Uses the expert variant.
 */
type EXPERT_FORM = AlternateGlyphForms_EXPERT_FORM;

/**
 * Uses the JIS78 variant.
 */
type JIS78_FORM = AlternateGlyphForms_JIS78_FORM;

/**
 * Uses the JIS83 variant.
 */
type JIS83_FORM = AlternateGlyphForms_JIS83_FORM;

/**
 * Uses the monospaced half-width variant.
 */
type MONOSPACED_HALF_WIDTH_FORM = AlternateGlyphForms_MONOSPACED_HALF_WIDTH_FORM;

/**
 * Uses the third-width variant.
 */
type THIRD_WIDTH_FORM = AlternateGlyphForms_THIRD_WIDTH_FORM;

/**
 * Uses the quarter-width variant.
 */
type QUARTER_WIDTH_FORM = AlternateGlyphForms_QUARTER_WIDTH_FORM;

/**
 * Uses the NLC variant.
 */
type NLC_FORM = AlternateGlyphForms_NLC_FORM;

/**
 * Substitutes proportional glyphs for half-width and full-width glyphs. 
 */
type PROPORTIONAL_WIDTH_FORM = AlternateGlyphForms_PROPORTIONAL_WIDTH_FORM;

/**
 * Uses the full-width variant.
 */
type FULL_WIDTH_FORM = AlternateGlyphForms_FULL_WIDTH_FORM;

/**
 * Uses the JIS04 variant.
 */
type JIS04_FORM = AlternateGlyphForms_JIS04_FORM;

/**
 * Uses the JIS90 variant.
 */
type JIS90_FORM = AlternateGlyphForms_JIS90_FORM;

}
/**
 * Glyph variant substitution options for standard glyphs. 
 */
export declare const AlternateGlyphForms: typeof Enumeration & {

  /**
   * Does not use an alternate form. 
   */
  readonly NONE: AlternateGlyphForms_NONE;
  /**
   * Does not use an alternate form. 
   */
  readonly none: AlternateGlyphForms_NONE;

  /**
   * Uses the traditional variant.
   */
  readonly TRADITIONAL_FORM: AlternateGlyphForms_TRADITIONAL_FORM;
  /**
   * Uses the traditional variant.
   */
  readonly traditionalForm: AlternateGlyphForms_TRADITIONAL_FORM;
  /**
   * Uses the traditional variant.
   */
  readonly traditionalform: AlternateGlyphForms_TRADITIONAL_FORM;

  /**
   * Uses the expert variant.
   */
  readonly EXPERT_FORM: AlternateGlyphForms_EXPERT_FORM;
  /**
   * Uses the expert variant.
   */
  readonly expertForm: AlternateGlyphForms_EXPERT_FORM;
  /**
   * Uses the expert variant.
   */
  readonly expertform: AlternateGlyphForms_EXPERT_FORM;

  /**
   * Uses the JIS78 variant.
   */
  readonly JIS78_FORM: AlternateGlyphForms_JIS78_FORM;
  /**
   * Uses the JIS78 variant.
   */
  readonly jis78Form: AlternateGlyphForms_JIS78_FORM;
  /**
   * Uses the JIS78 variant.
   */
  readonly jis78form: AlternateGlyphForms_JIS78_FORM;

  /**
   * Uses the JIS83 variant.
   */
  readonly JIS83_FORM: AlternateGlyphForms_JIS83_FORM;
  /**
   * Uses the JIS83 variant.
   */
  readonly jis83Form: AlternateGlyphForms_JIS83_FORM;
  /**
   * Uses the JIS83 variant.
   */
  readonly jis83form: AlternateGlyphForms_JIS83_FORM;

  /**
   * Uses the monospaced half-width variant.
   */
  readonly MONOSPACED_HALF_WIDTH_FORM: AlternateGlyphForms_MONOSPACED_HALF_WIDTH_FORM;
  /**
   * Uses the monospaced half-width variant.
   */
  readonly monospacedHalfWidthForm: AlternateGlyphForms_MONOSPACED_HALF_WIDTH_FORM;
  /**
   * Uses the monospaced half-width variant.
   */
  readonly monospacedhalfwidthform: AlternateGlyphForms_MONOSPACED_HALF_WIDTH_FORM;

  /**
   * Uses the third-width variant.
   */
  readonly THIRD_WIDTH_FORM: AlternateGlyphForms_THIRD_WIDTH_FORM;
  /**
   * Uses the third-width variant.
   */
  readonly thirdWidthForm: AlternateGlyphForms_THIRD_WIDTH_FORM;
  /**
   * Uses the third-width variant.
   */
  readonly thirdwidthform: AlternateGlyphForms_THIRD_WIDTH_FORM;

  /**
   * Uses the quarter-width variant.
   */
  readonly QUARTER_WIDTH_FORM: AlternateGlyphForms_QUARTER_WIDTH_FORM;
  /**
   * Uses the quarter-width variant.
   */
  readonly quarterWidthForm: AlternateGlyphForms_QUARTER_WIDTH_FORM;
  /**
   * Uses the quarter-width variant.
   */
  readonly quarterwidthform: AlternateGlyphForms_QUARTER_WIDTH_FORM;

  /**
   * Uses the NLC variant.
   */
  readonly NLC_FORM: AlternateGlyphForms_NLC_FORM;
  /**
   * Uses the NLC variant.
   */
  readonly nlcForm: AlternateGlyphForms_NLC_FORM;
  /**
   * Uses the NLC variant.
   */
  readonly nlcform: AlternateGlyphForms_NLC_FORM;

  /**
   * Substitutes proportional glyphs for half-width and full-width glyphs. 
   */
  readonly PROPORTIONAL_WIDTH_FORM: AlternateGlyphForms_PROPORTIONAL_WIDTH_FORM;
  /**
   * Substitutes proportional glyphs for half-width and full-width glyphs. 
   */
  readonly proportionalWidthForm: AlternateGlyphForms_PROPORTIONAL_WIDTH_FORM;
  /**
   * Substitutes proportional glyphs for half-width and full-width glyphs. 
   */
  readonly proportionalwidthform: AlternateGlyphForms_PROPORTIONAL_WIDTH_FORM;

  /**
   * Uses the full-width variant.
   */
  readonly FULL_WIDTH_FORM: AlternateGlyphForms_FULL_WIDTH_FORM;
  /**
   * Uses the full-width variant.
   */
  readonly fullWidthForm: AlternateGlyphForms_FULL_WIDTH_FORM;
  /**
   * Uses the full-width variant.
   */
  readonly fullwidthform: AlternateGlyphForms_FULL_WIDTH_FORM;

  /**
   * Uses the JIS04 variant.
   */
  readonly JIS04_FORM: AlternateGlyphForms_JIS04_FORM;
  /**
   * Uses the JIS04 variant.
   */
  readonly jis04Form: AlternateGlyphForms_JIS04_FORM;
  /**
   * Uses the JIS04 variant.
   */
  readonly jis04form: AlternateGlyphForms_JIS04_FORM;

  /**
   * Uses the JIS90 variant.
   */
  readonly JIS90_FORM: AlternateGlyphForms_JIS90_FORM;
  /**
   * Uses the JIS90 variant.
   */
  readonly jis90Form: AlternateGlyphForms_JIS90_FORM;
  /**
   * Uses the JIS90 variant.
   */
  readonly jis90form: AlternateGlyphForms_JIS90_FORM;

}
