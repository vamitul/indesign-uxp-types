/**
 * EPSColorSpace.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __EPSColorSpace: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface EPSColorSpace extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<EPSColorSpace>): boolean;

  /**
   * @internal **WARNING:** `__EPSColorSpace` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__EPSColorSpace]: never;
}


/**
 * Represents all color values using the RGB color space. Best suited for documents that will be viewed on-screen.
 */
interface EPSColorSpace_RGB extends EPSColorSpace {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1666336578;
}

/**
 * Creates a separable file by representing all color values using the gamut of CYMK process color inks.
 */
interface EPSColorSpace_CMYK extends EPSColorSpace {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1129142603;
}

/**
 * Converts all color values to high-quality black-and-white images. Gray levels of the converted objects represent the luminosity of the original objects. 
 */
interface EPSColorSpace_GRAY extends EPSColorSpace {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1766290041;
}

/**
 * Leaves each image in its original color space. 
 */
interface EPSColorSpace_UNCHANGED_COLOR_SPACE extends EPSColorSpace {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1970161251;
}

/**
 * Uses PostScript color management (includes profiles).
 */
interface EPSColorSpace_POSTSCRIPT_COLOR_MANAGEMENT extends EPSColorSpace {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1164208483;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Color space options for representing color in the exported EPS.
 */
export declare namespace EPSColorSpace {
/**
 * Represents all color values using the RGB color space. Best suited for documents that will be viewed on-screen.
 */
type RGB = EPSColorSpace_RGB;

/**
 * Creates a separable file by representing all color values using the gamut of CYMK process color inks.
 */
type CMYK = EPSColorSpace_CMYK;

/**
 * Converts all color values to high-quality black-and-white images. Gray levels of the converted objects represent the luminosity of the original objects. 
 */
type GRAY = EPSColorSpace_GRAY;

/**
 * Leaves each image in its original color space. 
 */
type UNCHANGED_COLOR_SPACE = EPSColorSpace_UNCHANGED_COLOR_SPACE;

/**
 * Uses PostScript color management (includes profiles).
 */
type POSTSCRIPT_COLOR_MANAGEMENT = EPSColorSpace_POSTSCRIPT_COLOR_MANAGEMENT;

}
/**
 * Color space options for representing color in the exported EPS.
 */
export declare const EPSColorSpace: typeof Enumeration & {

  /**
   * Represents all color values using the RGB color space. Best suited for documents that will be viewed on-screen.
   */
  readonly RGB: EPSColorSpace_RGB;
  /**
   * Represents all color values using the RGB color space. Best suited for documents that will be viewed on-screen.
   */
  readonly rgb: EPSColorSpace_RGB;

  /**
   * Creates a separable file by representing all color values using the gamut of CYMK process color inks.
   */
  readonly CMYK: EPSColorSpace_CMYK;
  /**
   * Creates a separable file by representing all color values using the gamut of CYMK process color inks.
   */
  readonly cmyk: EPSColorSpace_CMYK;

  /**
   * Converts all color values to high-quality black-and-white images. Gray levels of the converted objects represent the luminosity of the original objects. 
   */
  readonly GRAY: EPSColorSpace_GRAY;
  /**
   * Converts all color values to high-quality black-and-white images. Gray levels of the converted objects represent the luminosity of the original objects. 
   */
  readonly gray: EPSColorSpace_GRAY;

  /**
   * Leaves each image in its original color space. 
   */
  readonly UNCHANGED_COLOR_SPACE: EPSColorSpace_UNCHANGED_COLOR_SPACE;
  /**
   * Leaves each image in its original color space. 
   */
  readonly unchangedColorSpace: EPSColorSpace_UNCHANGED_COLOR_SPACE;
  /**
   * Leaves each image in its original color space. 
   */
  readonly unchangedcolorspace: EPSColorSpace_UNCHANGED_COLOR_SPACE;

  /**
   * Uses PostScript color management (includes profiles).
   */
  readonly POSTSCRIPT_COLOR_MANAGEMENT: EPSColorSpace_POSTSCRIPT_COLOR_MANAGEMENT;
  /**
   * Uses PostScript color management (includes profiles).
   */
  readonly postscriptColorManagement: EPSColorSpace_POSTSCRIPT_COLOR_MANAGEMENT;
  /**
   * Uses PostScript color management (includes profiles).
   */
  readonly postscriptcolormanagement: EPSColorSpace_POSTSCRIPT_COLOR_MANAGEMENT;

}
