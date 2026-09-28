/**
 * PDFJPEGQualityOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PDFJPEGQualityOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PDFJPEGQualityOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PDFJPEGQualityOptions>): boolean;

  /**
   * @internal **WARNING:** `__PDFJPEGQualityOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PDFJPEGQualityOptions]: never;
}


/**
 * Uses minimum JPEG compression.
 */
interface PDFJPEGQualityOptions_MINIMUM extends PDFJPEGQualityOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701727598;
}

/**
 * Uses low JPEG compression.
 */
interface PDFJPEGQualityOptions_LOW extends PDFJPEGQualityOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701727351;
}

/**
 * Uses medium JPEG compression.
 */
interface PDFJPEGQualityOptions_MEDIUM extends PDFJPEGQualityOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701727588;
}

/**
 * Uses high JPEG compression.
 */
interface PDFJPEGQualityOptions_HIGH extends PDFJPEGQualityOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701726313;
}

/**
 * Uses maximum JPEG compression.
 */
interface PDFJPEGQualityOptions_MAXIMUM extends PDFJPEGQualityOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701727608;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * How hard JPEG compression is applied to images in the exported PDF, trading file size against
 * image quality.
 */
export declare namespace PDFJPEGQualityOptions {
/**
 * Uses minimum JPEG compression.
 */
type MINIMUM = PDFJPEGQualityOptions_MINIMUM;

/**
 * Uses low JPEG compression.
 */
type LOW = PDFJPEGQualityOptions_LOW;

/**
 * Uses medium JPEG compression.
 */
type MEDIUM = PDFJPEGQualityOptions_MEDIUM;

/**
 * Uses high JPEG compression.
 */
type HIGH = PDFJPEGQualityOptions_HIGH;

/**
 * Uses maximum JPEG compression.
 */
type MAXIMUM = PDFJPEGQualityOptions_MAXIMUM;

}
/**
 * How hard JPEG compression is applied to images in the exported PDF, trading file size against
 * image quality.
 */
export declare const PDFJPEGQualityOptions: typeof Enumeration & {

  /**
   * Uses minimum JPEG compression.
   */
  readonly MINIMUM: PDFJPEGQualityOptions_MINIMUM;
  /**
   * Uses minimum JPEG compression.
   */
  readonly minimum: PDFJPEGQualityOptions_MINIMUM;

  /**
   * Uses low JPEG compression.
   */
  readonly LOW: PDFJPEGQualityOptions_LOW;
  /**
   * Uses low JPEG compression.
   */
  readonly low: PDFJPEGQualityOptions_LOW;

  /**
   * Uses medium JPEG compression.
   */
  readonly MEDIUM: PDFJPEGQualityOptions_MEDIUM;
  /**
   * Uses medium JPEG compression.
   */
  readonly medium: PDFJPEGQualityOptions_MEDIUM;

  /**
   * Uses high JPEG compression.
   */
  readonly HIGH: PDFJPEGQualityOptions_HIGH;
  /**
   * Uses high JPEG compression.
   */
  readonly high: PDFJPEGQualityOptions_HIGH;

  /**
   * Uses maximum JPEG compression.
   */
  readonly MAXIMUM: PDFJPEGQualityOptions_MAXIMUM;
  /**
   * Uses maximum JPEG compression.
   */
  readonly maximum: PDFJPEGQualityOptions_MAXIMUM;

}
