/**
 * PNGColorSpaceEnum.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PNGColorSpaceEnum: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PNGColorSpaceEnum extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PNGColorSpaceEnum>): boolean;

  /**
   * @internal **WARNING:** `__PNGColorSpaceEnum` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PNGColorSpaceEnum]: never;
}


/**
 * Represents all color values using the RGB color space. Best suited for documents that will be viewed on-screen.
 */
interface PNGColorSpaceEnum_RGB extends PNGColorSpaceEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1666336578;
}

/**
 * Converts all color values to high-quality black-and-white images. Gray levels of the converted objects represent the luminosity of the original objects. 
 */
interface PNGColorSpaceEnum_GRAY extends PNGColorSpaceEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1766290041;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Color space options for representing color in the exported PNG.
 */
export declare namespace PNGColorSpaceEnum {
/**
 * Represents all color values using the RGB color space. Best suited for documents that will be viewed on-screen.
 */
type RGB = PNGColorSpaceEnum_RGB;

/**
 * Converts all color values to high-quality black-and-white images. Gray levels of the converted objects represent the luminosity of the original objects. 
 */
type GRAY = PNGColorSpaceEnum_GRAY;

}
/**
 * Color space options for representing color in the exported PNG.
 */
export declare const PNGColorSpaceEnum: typeof Enumeration & {

  /**
   * Represents all color values using the RGB color space. Best suited for documents that will be viewed on-screen.
   */
  readonly RGB: PNGColorSpaceEnum_RGB;
  /**
   * Represents all color values using the RGB color space. Best suited for documents that will be viewed on-screen.
   */
  readonly rgb: PNGColorSpaceEnum_RGB;

  /**
   * Converts all color values to high-quality black-and-white images. Gray levels of the converted objects represent the luminosity of the original objects. 
   */
  readonly GRAY: PNGColorSpaceEnum_GRAY;
  /**
   * Converts all color values to high-quality black-and-white images. Gray levels of the converted objects represent the luminosity of the original objects. 
   */
  readonly gray: PNGColorSpaceEnum_GRAY;

}
