/**
 * PDFColorSpace.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PDFColorSpace: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PDFColorSpace extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PDFColorSpace>): boolean;

  /**
   * @internal **WARNING:** `__PDFColorSpace` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PDFColorSpace]: never;
}


/**
 * Represents all color values using the RGB color space. Best suited for documents that will be viewed onscreen.
 */
interface PDFColorSpace_RGB extends PDFColorSpace {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1666336578;
}

/**
 * Represents all color values using CYMK color space.
 */
interface PDFColorSpace_CMYK extends PDFColorSpace {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1129142603;
}

/**
 * Leaves each image in its original color space.
 */
interface PDFColorSpace_UNCHANGED_COLOR_SPACE extends PDFColorSpace {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1970161251;
}

/**
 * Repurposes RGB colors.
 */
interface PDFColorSpace_REPURPOSE_RGB extends PDFColorSpace {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1917994818;
}

/**
 * Repurposes CMYK colors.
 */
interface PDFColorSpace_REPURPOSE_CMYK extends PDFColorSpace {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1917013337;
}

/**
 * Converts all color values to high-quality black-and-white images. Gray levels of the converted objects represent the luminosity of the original objects. 
 */
interface PDFColorSpace_GRAY extends PDFColorSpace {
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
 * Options for specifying how to represent color information in the exported PDF.
 */
export declare namespace PDFColorSpace {
/**
 * Represents all color values using the RGB color space. Best suited for documents that will be viewed onscreen.
 */
type RGB = PDFColorSpace_RGB;

/**
 * Represents all color values using CYMK color space.
 */
type CMYK = PDFColorSpace_CMYK;

/**
 * Leaves each image in its original color space.
 */
type UNCHANGED_COLOR_SPACE = PDFColorSpace_UNCHANGED_COLOR_SPACE;

/**
 * Repurposes RGB colors.
 */
type REPURPOSE_RGB = PDFColorSpace_REPURPOSE_RGB;

/**
 * Repurposes CMYK colors.
 */
type REPURPOSE_CMYK = PDFColorSpace_REPURPOSE_CMYK;

/**
 * Converts all color values to high-quality black-and-white images. Gray levels of the converted objects represent the luminosity of the original objects. 
 */
type GRAY = PDFColorSpace_GRAY;

}
/**
 * Options for specifying how to represent color information in the exported PDF.
 */
export declare const PDFColorSpace: typeof Enumeration & {

  /**
   * Represents all color values using the RGB color space. Best suited for documents that will be viewed onscreen.
   */
  readonly RGB: PDFColorSpace_RGB;
  /**
   * Represents all color values using the RGB color space. Best suited for documents that will be viewed onscreen.
   */
  readonly rgb: PDFColorSpace_RGB;

  /**
   * Represents all color values using CYMK color space.
   */
  readonly CMYK: PDFColorSpace_CMYK;
  /**
   * Represents all color values using CYMK color space.
   */
  readonly cmyk: PDFColorSpace_CMYK;

  /**
   * Leaves each image in its original color space.
   */
  readonly UNCHANGED_COLOR_SPACE: PDFColorSpace_UNCHANGED_COLOR_SPACE;
  /**
   * Leaves each image in its original color space.
   */
  readonly unchangedColorSpace: PDFColorSpace_UNCHANGED_COLOR_SPACE;
  /**
   * Leaves each image in its original color space.
   */
  readonly unchangedcolorspace: PDFColorSpace_UNCHANGED_COLOR_SPACE;

  /**
   * Repurposes RGB colors.
   */
  readonly REPURPOSE_RGB: PDFColorSpace_REPURPOSE_RGB;
  /**
   * Repurposes RGB colors.
   */
  readonly repurposeRgb: PDFColorSpace_REPURPOSE_RGB;
  /**
   * Repurposes RGB colors.
   */
  readonly repurposergb: PDFColorSpace_REPURPOSE_RGB;

  /**
   * Repurposes CMYK colors.
   */
  readonly REPURPOSE_CMYK: PDFColorSpace_REPURPOSE_CMYK;
  /**
   * Repurposes CMYK colors.
   */
  readonly repurposeCmyk: PDFColorSpace_REPURPOSE_CMYK;
  /**
   * Repurposes CMYK colors.
   */
  readonly repurposecmyk: PDFColorSpace_REPURPOSE_CMYK;

  /**
   * Converts all color values to high-quality black-and-white images. Gray levels of the converted objects represent the luminosity of the original objects. 
   */
  readonly GRAY: PDFColorSpace_GRAY;
  /**
   * Converts all color values to high-quality black-and-white images. Gray levels of the converted objects represent the luminosity of the original objects. 
   */
  readonly gray: PDFColorSpace_GRAY;

}
