/**
 * ColorSpace.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ColorSpace: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ColorSpace extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ColorSpace>): boolean;

  /**
   * @internal **WARNING:** `__ColorSpace` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ColorSpace]: never;
}


/**
 * RGB.
 */
interface ColorSpace_RGB extends ColorSpace {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1666336578;
}

/**
 * CMYK.
 */
interface ColorSpace_CMYK extends ColorSpace {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1129142603;
}

/**
 * LAB.
 */
interface ColorSpace_LAB extends ColorSpace {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1665941826;
}

/**
 * Mixed ink.
 */
interface ColorSpace_MIXEDINK extends ColorSpace {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1666009432;
}

/**
 * HSB.
 */
interface ColorSpace_HSB extends ColorSpace {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1665684290;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Color space options.
 */
export declare namespace ColorSpace {
/**
 * RGB.
 */
type RGB = ColorSpace_RGB;

/**
 * CMYK.
 */
type CMYK = ColorSpace_CMYK;

/**
 * LAB.
 */
type LAB = ColorSpace_LAB;

/**
 * Mixed ink.
 */
type MIXEDINK = ColorSpace_MIXEDINK;

/**
 * HSB.
 */
type HSB = ColorSpace_HSB;

}
/**
 * Color space options.
 */
export declare const ColorSpace: typeof Enumeration & {

  /**
   * RGB.
   */
  readonly RGB: ColorSpace_RGB;
  /**
   * RGB.
   */
  readonly rgb: ColorSpace_RGB;

  /**
   * CMYK.
   */
  readonly CMYK: ColorSpace_CMYK;
  /**
   * CMYK.
   */
  readonly cmyk: ColorSpace_CMYK;

  /**
   * LAB.
   */
  readonly LAB: ColorSpace_LAB;
  /**
   * LAB.
   */
  readonly lab: ColorSpace_LAB;

  /**
   * Mixed ink.
   */
  readonly MIXEDINK: ColorSpace_MIXEDINK;
  /**
   * Mixed ink.
   */
  readonly mixedink: ColorSpace_MIXEDINK;

  /**
   * HSB.
   */
  readonly HSB: ColorSpace_HSB;
  /**
   * HSB.
   */
  readonly hsb: ColorSpace_HSB;

}
