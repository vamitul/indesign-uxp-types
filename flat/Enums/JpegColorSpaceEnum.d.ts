/**
 * JpegColorSpaceEnum.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __JpegColorSpaceEnum: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface JpegColorSpaceEnum extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<JpegColorSpaceEnum>): boolean;

  /**
   * @internal **WARNING:** `__JpegColorSpaceEnum` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__JpegColorSpaceEnum]: never;
}


/**
 * Represents all color values using the RGB color space. Best suited for documents that will be viewed on-screen.
 */
interface JpegColorSpaceEnum_RGB extends JpegColorSpaceEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1666336578;
}

/**
 * Represents all color values using the CMYK color space.
 */
interface JpegColorSpaceEnum_CMYK extends JpegColorSpaceEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1129142603;
}

/**
 * Converts all color values to high-quality black-and-white images. Gray levels of the converted objects represent the luminosity of the original objects. 
 */
interface JpegColorSpaceEnum_GRAY extends JpegColorSpaceEnum {
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
 * Color space options for representing color in the exported JPEG.
 */
export declare namespace JpegColorSpaceEnum {
/**
 * Represents all color values using the RGB color space. Best suited for documents that will be viewed on-screen.
 */
type RGB = JpegColorSpaceEnum_RGB;

/**
 * Represents all color values using the CMYK color space.
 */
type CMYK = JpegColorSpaceEnum_CMYK;

/**
 * Converts all color values to high-quality black-and-white images. Gray levels of the converted objects represent the luminosity of the original objects. 
 */
type GRAY = JpegColorSpaceEnum_GRAY;

}
/**
 * Color space options for representing color in the exported JPEG.
 */
export declare const JpegColorSpaceEnum: typeof Enumeration & {

  /**
   * Represents all color values using the RGB color space. Best suited for documents that will be viewed on-screen.
   */
  readonly RGB: JpegColorSpaceEnum_RGB;
  /**
   * Represents all color values using the RGB color space. Best suited for documents that will be viewed on-screen.
   */
  readonly rgb: JpegColorSpaceEnum_RGB;

  /**
   * Represents all color values using the CMYK color space.
   */
  readonly CMYK: JpegColorSpaceEnum_CMYK;
  /**
   * Represents all color values using the CMYK color space.
   */
  readonly cmyk: JpegColorSpaceEnum_CMYK;

  /**
   * Converts all color values to high-quality black-and-white images. Gray levels of the converted objects represent the luminosity of the original objects. 
   */
  readonly GRAY: JpegColorSpaceEnum_GRAY;
  /**
   * Converts all color values to high-quality black-and-white images. Gray levels of the converted objects represent the luminosity of the original objects. 
   */
  readonly gray: JpegColorSpaceEnum_GRAY;

}
