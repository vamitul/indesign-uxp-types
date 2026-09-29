/**
 * BlendingSpace.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __BlendingSpace: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface BlendingSpace extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<BlendingSpace>): boolean;

  /**
   * @internal **WARNING:** `__BlendingSpace` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__BlendingSpace]: never;
}


/**
 * Defaults to the current color profile.
 */
interface BlendingSpace_DEFAULT_VALUE extends BlendingSpace {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1147563124;
}

/**
 * Uses the RGB color profile.
 */
interface BlendingSpace_RGB extends BlendingSpace {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1666336578;
}

/**
 * Uses the CMYK profile.
 */
interface BlendingSpace_CMYK extends BlendingSpace {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1129142603;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Transparency blending space options.
 */
export declare namespace BlendingSpace {
/**
 * Defaults to the current color profile.
 */
type DEFAULT_VALUE = BlendingSpace_DEFAULT_VALUE;

/**
 * Uses the RGB color profile.
 */
type RGB = BlendingSpace_RGB;

/**
 * Uses the CMYK profile.
 */
type CMYK = BlendingSpace_CMYK;

}
/**
 * Transparency blending space options.
 */
export declare const BlendingSpace: typeof Enumeration & {

  /**
   * Defaults to the current color profile.
   */
  readonly DEFAULT_VALUE: BlendingSpace_DEFAULT_VALUE;
  /**
   * Defaults to the current color profile.
   */
  readonly defaultValue: BlendingSpace_DEFAULT_VALUE;
  /**
   * Defaults to the current color profile.
   */
  readonly defaultvalue: BlendingSpace_DEFAULT_VALUE;

  /**
   * Uses the RGB color profile.
   */
  readonly RGB: BlendingSpace_RGB;
  /**
   * Uses the RGB color profile.
   */
  readonly rgb: BlendingSpace_RGB;

  /**
   * Uses the CMYK profile.
   */
  readonly CMYK: BlendingSpace_CMYK;
  /**
   * Uses the CMYK profile.
   */
  readonly cmyk: BlendingSpace_CMYK;

}
