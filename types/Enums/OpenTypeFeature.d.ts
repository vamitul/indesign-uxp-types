/**
 * OpenTypeFeature.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __OpenTypeFeature: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface OpenTypeFeature extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<OpenTypeFeature>): boolean;

  /**
   * @internal **WARNING:** `__OpenTypeFeature` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__OpenTypeFeature]: never;
}


/**
 * Low.
 */
interface OpenTypeFeature_LOW extends OpenTypeFeature {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701727351;
}

/**
 * Allows the use of optional discretionary ligatures.
 */
interface OpenTypeFeature_DISCRETIONARY_LIGATURES_FEATURE extends OpenTypeFeature {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1330930764;
}

/**
 * Reformats numbers separated by a slash, such as 1/2, as fractions.
 *
 * Note: In some fonts, the fractions feature reformats only standard fractions. For
 * information on reformatting non-standard fractions such as 4/13, see denominator feature
 * and numerator feature.
 */
interface OpenTypeFeature_FRACTIONS_FEATURE extends OpenTypeFeature {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1330931282;
}

/**
 * Superscripts the alpha characters in ordinal numbers.
 */
interface OpenTypeFeature_ORDINAL_FEATURE extends OpenTypeFeature {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1330933586;
}

/**
 * Provides regular and contextual swashes, which may include alternate caps and end-of-word alternatives.
 */
interface OpenTypeFeature_SWASH_FEATURE extends OpenTypeFeature {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1330934615;
}

/**
 * Activates alternative characters used for uppercase titles.
 */
interface OpenTypeFeature_TITLING_FEATURE extends OpenTypeFeature {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1330934857;
}

/**
 * Activates contextual ligatures and connecting alternates.
 */
interface OpenTypeFeature_CONTEXTUAL_ALTERNATES_FEATURE extends OpenTypeFeature {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1330930497;
}

/**
 * Provides authentic small caps rather than scaled-down versions of the font's regular caps.
 */
interface OpenTypeFeature_ALL_SMALL_CAPS_FEATURE extends OpenTypeFeature {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1664250691;
}

/**
 * Sizes raised glyphs correctly relative to the surrounding characters.
 */
interface OpenTypeFeature_SUPERSCRIPT_FEATURE extends OpenTypeFeature {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1884247123;
}

/**
 * Sizes lowered glyphs correctly relative to the surrounding characters.
 */
interface OpenTypeFeature_SUBSCRIPT_FEATURE extends OpenTypeFeature {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1884247106;
}

/**
 * In a series of two numbers separated by a slash that form a non-standard fraction, such as 4/13, reformats the first number as a numerator.
 */
interface OpenTypeFeature_NUMERATOR_FEATURE extends OpenTypeFeature {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1884247118;
}

/**
 * In a series of two numbers separated by a slash that form a non-standard fraction, such as 4/13, reformats the second number as a denominator.
 */
interface OpenTypeFeature_DENOMINATOR_FEATURE extends OpenTypeFeature {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1884247108;
}

/**
 * Gives full-height figures fixed, equal width.
 */
interface OpenTypeFeature_TABULAR_LINING_FEATURE extends OpenTypeFeature {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1330931284;
}

/**
 * Gives varying-height figures varying widths.
 */
interface OpenTypeFeature_PROPORTIONAL_OLDSTYLE_FEATURE extends OpenTypeFeature {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1330933587;
}

/**
 * Gives full-height figures varying widths.
 */
interface OpenTypeFeature_PROPORTIONAL_LINING_FEATURE extends OpenTypeFeature {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1330932816;
}

/**
 * Gives varying-height figures fixed, equal widths.
 */
interface OpenTypeFeature_TABULAR_OLDSTYLE_FEATURE extends OpenTypeFeature {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1330933588;
}

/**
 * Applies the default figure style of the current font to figure glyphs.
 */
interface OpenTypeFeature_DEFAULT_FIGURE_STYLE_FEATURE extends OpenTypeFeature {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1330931268;
}

/**
 * Overlap swash.
 */
interface OpenTypeFeature_OVERLAP_SWASH extends OpenTypeFeature {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1330933590;
}

/**
 * Stylistic alternate.
 */
interface OpenTypeFeature_STYLISTIC_ALTERNATE extends OpenTypeFeature {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1330934612;
}

/**
 * Justification alternate.
 */
interface OpenTypeFeature_JUSTIFICATION_ALTERNATE extends OpenTypeFeature {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1330932309;
}

/**
 * Stretched alternate.
 */
interface OpenTypeFeature_STRETCHED_ALTERNATE extends OpenTypeFeature {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1330934610;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Supported OpenType feature options.
 */
export declare namespace OpenTypeFeature {
/**
 * Low.
 */
type LOW = OpenTypeFeature_LOW;

/**
 * Allows the use of optional discretionary ligatures.
 */
type DISCRETIONARY_LIGATURES_FEATURE = OpenTypeFeature_DISCRETIONARY_LIGATURES_FEATURE;

/**
 * Reformats numbers separated by a slash, such as 1/2, as fractions.
 *
 * Note: In some fonts, the fractions feature reformats only standard fractions. For
 * information on reformatting non-standard fractions such as 4/13, see denominator feature
 * and numerator feature.
 */
type FRACTIONS_FEATURE = OpenTypeFeature_FRACTIONS_FEATURE;

/**
 * Superscripts the alpha characters in ordinal numbers.
 */
type ORDINAL_FEATURE = OpenTypeFeature_ORDINAL_FEATURE;

/**
 * Provides regular and contextual swashes, which may include alternate caps and end-of-word alternatives.
 */
type SWASH_FEATURE = OpenTypeFeature_SWASH_FEATURE;

/**
 * Activates alternative characters used for uppercase titles.
 */
type TITLING_FEATURE = OpenTypeFeature_TITLING_FEATURE;

/**
 * Activates contextual ligatures and connecting alternates.
 */
type CONTEXTUAL_ALTERNATES_FEATURE = OpenTypeFeature_CONTEXTUAL_ALTERNATES_FEATURE;

/**
 * Provides authentic small caps rather than scaled-down versions of the font's regular caps.
 */
type ALL_SMALL_CAPS_FEATURE = OpenTypeFeature_ALL_SMALL_CAPS_FEATURE;

/**
 * Sizes raised glyphs correctly relative to the surrounding characters.
 */
type SUPERSCRIPT_FEATURE = OpenTypeFeature_SUPERSCRIPT_FEATURE;

/**
 * Sizes lowered glyphs correctly relative to the surrounding characters.
 */
type SUBSCRIPT_FEATURE = OpenTypeFeature_SUBSCRIPT_FEATURE;

/**
 * In a series of two numbers separated by a slash that form a non-standard fraction, such as 4/13, reformats the first number as a numerator.
 */
type NUMERATOR_FEATURE = OpenTypeFeature_NUMERATOR_FEATURE;

/**
 * In a series of two numbers separated by a slash that form a non-standard fraction, such as 4/13, reformats the second number as a denominator.
 */
type DENOMINATOR_FEATURE = OpenTypeFeature_DENOMINATOR_FEATURE;

/**
 * Gives full-height figures fixed, equal width.
 */
type TABULAR_LINING_FEATURE = OpenTypeFeature_TABULAR_LINING_FEATURE;

/**
 * Gives varying-height figures varying widths.
 */
type PROPORTIONAL_OLDSTYLE_FEATURE = OpenTypeFeature_PROPORTIONAL_OLDSTYLE_FEATURE;

/**
 * Gives full-height figures varying widths.
 */
type PROPORTIONAL_LINING_FEATURE = OpenTypeFeature_PROPORTIONAL_LINING_FEATURE;

/**
 * Gives varying-height figures fixed, equal widths.
 */
type TABULAR_OLDSTYLE_FEATURE = OpenTypeFeature_TABULAR_OLDSTYLE_FEATURE;

/**
 * Applies the default figure style of the current font to figure glyphs.
 */
type DEFAULT_FIGURE_STYLE_FEATURE = OpenTypeFeature_DEFAULT_FIGURE_STYLE_FEATURE;

/**
 * Overlap swash.
 */
type OVERLAP_SWASH = OpenTypeFeature_OVERLAP_SWASH;

/**
 * Stylistic alternate.
 */
type STYLISTIC_ALTERNATE = OpenTypeFeature_STYLISTIC_ALTERNATE;

/**
 * Justification alternate.
 */
type JUSTIFICATION_ALTERNATE = OpenTypeFeature_JUSTIFICATION_ALTERNATE;

/**
 * Stretched alternate.
 */
type STRETCHED_ALTERNATE = OpenTypeFeature_STRETCHED_ALTERNATE;

}
/**
 * Supported OpenType feature options.
 */
export declare const OpenTypeFeature: typeof Enumeration & {

  /**
   * Low.
   */
  readonly LOW: OpenTypeFeature_LOW;
  /**
   * Low.
   */
  readonly low: OpenTypeFeature_LOW;

  /**
   * Allows the use of optional discretionary ligatures.
   */
  readonly DISCRETIONARY_LIGATURES_FEATURE: OpenTypeFeature_DISCRETIONARY_LIGATURES_FEATURE;
  /**
   * Allows the use of optional discretionary ligatures.
   */
  readonly discretionaryLigaturesFeature: OpenTypeFeature_DISCRETIONARY_LIGATURES_FEATURE;
  /**
   * Allows the use of optional discretionary ligatures.
   */
  readonly discretionaryligaturesfeature: OpenTypeFeature_DISCRETIONARY_LIGATURES_FEATURE;

  /**
   * Reformats numbers separated by a slash, such as 1/2, as fractions.
   *
   * Note: In some fonts, the fractions feature reformats only standard fractions. For
   * information on reformatting non-standard fractions such as 4/13, see denominator feature
   * and numerator feature.
   */
  readonly FRACTIONS_FEATURE: OpenTypeFeature_FRACTIONS_FEATURE;
  /**
   * Reformats numbers separated by a slash, such as 1/2, as fractions.
   *
   * Note: In some fonts, the fractions feature reformats only standard fractions. For
   * information on reformatting non-standard fractions such as 4/13, see denominator feature
   * and numerator feature.
   */
  readonly fractionsFeature: OpenTypeFeature_FRACTIONS_FEATURE;
  /**
   * Reformats numbers separated by a slash, such as 1/2, as fractions.
   *
   * Note: In some fonts, the fractions feature reformats only standard fractions. For
   * information on reformatting non-standard fractions such as 4/13, see denominator feature
   * and numerator feature.
   */
  readonly fractionsfeature: OpenTypeFeature_FRACTIONS_FEATURE;

  /**
   * Superscripts the alpha characters in ordinal numbers.
   */
  readonly ORDINAL_FEATURE: OpenTypeFeature_ORDINAL_FEATURE;
  /**
   * Superscripts the alpha characters in ordinal numbers.
   */
  readonly ordinalFeature: OpenTypeFeature_ORDINAL_FEATURE;
  /**
   * Superscripts the alpha characters in ordinal numbers.
   */
  readonly ordinalfeature: OpenTypeFeature_ORDINAL_FEATURE;

  /**
   * Provides regular and contextual swashes, which may include alternate caps and end-of-word alternatives.
   */
  readonly SWASH_FEATURE: OpenTypeFeature_SWASH_FEATURE;
  /**
   * Provides regular and contextual swashes, which may include alternate caps and end-of-word alternatives.
   */
  readonly swashFeature: OpenTypeFeature_SWASH_FEATURE;
  /**
   * Provides regular and contextual swashes, which may include alternate caps and end-of-word alternatives.
   */
  readonly swashfeature: OpenTypeFeature_SWASH_FEATURE;

  /**
   * Activates alternative characters used for uppercase titles.
   */
  readonly TITLING_FEATURE: OpenTypeFeature_TITLING_FEATURE;
  /**
   * Activates alternative characters used for uppercase titles.
   */
  readonly titlingFeature: OpenTypeFeature_TITLING_FEATURE;
  /**
   * Activates alternative characters used for uppercase titles.
   */
  readonly titlingfeature: OpenTypeFeature_TITLING_FEATURE;

  /**
   * Activates contextual ligatures and connecting alternates.
   */
  readonly CONTEXTUAL_ALTERNATES_FEATURE: OpenTypeFeature_CONTEXTUAL_ALTERNATES_FEATURE;
  /**
   * Activates contextual ligatures and connecting alternates.
   */
  readonly contextualAlternatesFeature: OpenTypeFeature_CONTEXTUAL_ALTERNATES_FEATURE;
  /**
   * Activates contextual ligatures and connecting alternates.
   */
  readonly contextualalternatesfeature: OpenTypeFeature_CONTEXTUAL_ALTERNATES_FEATURE;

  /**
   * Provides authentic small caps rather than scaled-down versions of the font's regular caps.
   */
  readonly ALL_SMALL_CAPS_FEATURE: OpenTypeFeature_ALL_SMALL_CAPS_FEATURE;
  /**
   * Provides authentic small caps rather than scaled-down versions of the font's regular caps.
   */
  readonly allSmallCapsFeature: OpenTypeFeature_ALL_SMALL_CAPS_FEATURE;
  /**
   * Provides authentic small caps rather than scaled-down versions of the font's regular caps.
   */
  readonly allsmallcapsfeature: OpenTypeFeature_ALL_SMALL_CAPS_FEATURE;

  /**
   * Sizes raised glyphs correctly relative to the surrounding characters.
   */
  readonly SUPERSCRIPT_FEATURE: OpenTypeFeature_SUPERSCRIPT_FEATURE;
  /**
   * Sizes raised glyphs correctly relative to the surrounding characters.
   */
  readonly superscriptFeature: OpenTypeFeature_SUPERSCRIPT_FEATURE;
  /**
   * Sizes raised glyphs correctly relative to the surrounding characters.
   */
  readonly superscriptfeature: OpenTypeFeature_SUPERSCRIPT_FEATURE;

  /**
   * Sizes lowered glyphs correctly relative to the surrounding characters.
   */
  readonly SUBSCRIPT_FEATURE: OpenTypeFeature_SUBSCRIPT_FEATURE;
  /**
   * Sizes lowered glyphs correctly relative to the surrounding characters.
   */
  readonly subscriptFeature: OpenTypeFeature_SUBSCRIPT_FEATURE;
  /**
   * Sizes lowered glyphs correctly relative to the surrounding characters.
   */
  readonly subscriptfeature: OpenTypeFeature_SUBSCRIPT_FEATURE;

  /**
   * In a series of two numbers separated by a slash that form a non-standard fraction, such as 4/13, reformats the first number as a numerator.
   */
  readonly NUMERATOR_FEATURE: OpenTypeFeature_NUMERATOR_FEATURE;
  /**
   * In a series of two numbers separated by a slash that form a non-standard fraction, such as 4/13, reformats the first number as a numerator.
   */
  readonly numeratorFeature: OpenTypeFeature_NUMERATOR_FEATURE;
  /**
   * In a series of two numbers separated by a slash that form a non-standard fraction, such as 4/13, reformats the first number as a numerator.
   */
  readonly numeratorfeature: OpenTypeFeature_NUMERATOR_FEATURE;

  /**
   * In a series of two numbers separated by a slash that form a non-standard fraction, such as 4/13, reformats the second number as a denominator.
   */
  readonly DENOMINATOR_FEATURE: OpenTypeFeature_DENOMINATOR_FEATURE;
  /**
   * In a series of two numbers separated by a slash that form a non-standard fraction, such as 4/13, reformats the second number as a denominator.
   */
  readonly denominatorFeature: OpenTypeFeature_DENOMINATOR_FEATURE;
  /**
   * In a series of two numbers separated by a slash that form a non-standard fraction, such as 4/13, reformats the second number as a denominator.
   */
  readonly denominatorfeature: OpenTypeFeature_DENOMINATOR_FEATURE;

  /**
   * Gives full-height figures fixed, equal width.
   */
  readonly TABULAR_LINING_FEATURE: OpenTypeFeature_TABULAR_LINING_FEATURE;
  /**
   * Gives full-height figures fixed, equal width.
   */
  readonly tabularLiningFeature: OpenTypeFeature_TABULAR_LINING_FEATURE;
  /**
   * Gives full-height figures fixed, equal width.
   */
  readonly tabularliningfeature: OpenTypeFeature_TABULAR_LINING_FEATURE;

  /**
   * Gives varying-height figures varying widths.
   */
  readonly PROPORTIONAL_OLDSTYLE_FEATURE: OpenTypeFeature_PROPORTIONAL_OLDSTYLE_FEATURE;
  /**
   * Gives varying-height figures varying widths.
   */
  readonly proportionalOldstyleFeature: OpenTypeFeature_PROPORTIONAL_OLDSTYLE_FEATURE;
  /**
   * Gives varying-height figures varying widths.
   */
  readonly proportionaloldstylefeature: OpenTypeFeature_PROPORTIONAL_OLDSTYLE_FEATURE;

  /**
   * Gives full-height figures varying widths.
   */
  readonly PROPORTIONAL_LINING_FEATURE: OpenTypeFeature_PROPORTIONAL_LINING_FEATURE;
  /**
   * Gives full-height figures varying widths.
   */
  readonly proportionalLiningFeature: OpenTypeFeature_PROPORTIONAL_LINING_FEATURE;
  /**
   * Gives full-height figures varying widths.
   */
  readonly proportionalliningfeature: OpenTypeFeature_PROPORTIONAL_LINING_FEATURE;

  /**
   * Gives varying-height figures fixed, equal widths.
   */
  readonly TABULAR_OLDSTYLE_FEATURE: OpenTypeFeature_TABULAR_OLDSTYLE_FEATURE;
  /**
   * Gives varying-height figures fixed, equal widths.
   */
  readonly tabularOldstyleFeature: OpenTypeFeature_TABULAR_OLDSTYLE_FEATURE;
  /**
   * Gives varying-height figures fixed, equal widths.
   */
  readonly tabularoldstylefeature: OpenTypeFeature_TABULAR_OLDSTYLE_FEATURE;

  /**
   * Applies the default figure style of the current font to figure glyphs.
   */
  readonly DEFAULT_FIGURE_STYLE_FEATURE: OpenTypeFeature_DEFAULT_FIGURE_STYLE_FEATURE;
  /**
   * Applies the default figure style of the current font to figure glyphs.
   */
  readonly defaultFigureStyleFeature: OpenTypeFeature_DEFAULT_FIGURE_STYLE_FEATURE;
  /**
   * Applies the default figure style of the current font to figure glyphs.
   */
  readonly defaultfigurestylefeature: OpenTypeFeature_DEFAULT_FIGURE_STYLE_FEATURE;

  /**
   * Overlap swash.
   */
  readonly OVERLAP_SWASH: OpenTypeFeature_OVERLAP_SWASH;
  /**
   * Overlap swash.
   */
  readonly overlapSwash: OpenTypeFeature_OVERLAP_SWASH;
  /**
   * Overlap swash.
   */
  readonly overlapswash: OpenTypeFeature_OVERLAP_SWASH;

  /**
   * Stylistic alternate.
   */
  readonly STYLISTIC_ALTERNATE: OpenTypeFeature_STYLISTIC_ALTERNATE;
  /**
   * Stylistic alternate.
   */
  readonly stylisticAlternate: OpenTypeFeature_STYLISTIC_ALTERNATE;
  /**
   * Stylistic alternate.
   */
  readonly stylisticalternate: OpenTypeFeature_STYLISTIC_ALTERNATE;

  /**
   * Justification alternate.
   */
  readonly JUSTIFICATION_ALTERNATE: OpenTypeFeature_JUSTIFICATION_ALTERNATE;
  /**
   * Justification alternate.
   */
  readonly justificationAlternate: OpenTypeFeature_JUSTIFICATION_ALTERNATE;
  /**
   * Justification alternate.
   */
  readonly justificationalternate: OpenTypeFeature_JUSTIFICATION_ALTERNATE;

  /**
   * Stretched alternate.
   */
  readonly STRETCHED_ALTERNATE: OpenTypeFeature_STRETCHED_ALTERNATE;
  /**
   * Stretched alternate.
   */
  readonly stretchedAlternate: OpenTypeFeature_STRETCHED_ALTERNATE;
  /**
   * Stretched alternate.
   */
  readonly stretchedalternate: OpenTypeFeature_STRETCHED_ALTERNATE;

}
