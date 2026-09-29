/**
 * DynamicDocumentsJPEGQualityOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __DynamicDocumentsJPEGQualityOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface DynamicDocumentsJPEGQualityOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<DynamicDocumentsJPEGQualityOptions>): boolean;

  /**
   * @internal **WARNING:** `__DynamicDocumentsJPEGQualityOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__DynamicDocumentsJPEGQualityOptions]: never;
}


/**
 * Uses minimum JPEG compression.
 */
interface DynamicDocumentsJPEGQualityOptions_MINIMUM extends DynamicDocumentsJPEGQualityOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701727598;
}

/**
 * Uses low JPEG compression.
 */
interface DynamicDocumentsJPEGQualityOptions_LOW extends DynamicDocumentsJPEGQualityOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701727351;
}

/**
 * Uses medium JPEG compression.
 */
interface DynamicDocumentsJPEGQualityOptions_MEDIUM extends DynamicDocumentsJPEGQualityOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701727588;
}

/**
 * Uses high JPEG compression.
 */
interface DynamicDocumentsJPEGQualityOptions_HIGH extends DynamicDocumentsJPEGQualityOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701726313;
}

/**
 * Uses maximum JPEG compression.
 */
interface DynamicDocumentsJPEGQualityOptions_MAXIMUM extends DynamicDocumentsJPEGQualityOptions {
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
 * The JPEG compression quality used when exporting dynamic documents.
 */
export declare namespace DynamicDocumentsJPEGQualityOptions {
/**
 * Uses minimum JPEG compression.
 */
type MINIMUM = DynamicDocumentsJPEGQualityOptions_MINIMUM;

/**
 * Uses low JPEG compression.
 */
type LOW = DynamicDocumentsJPEGQualityOptions_LOW;

/**
 * Uses medium JPEG compression.
 */
type MEDIUM = DynamicDocumentsJPEGQualityOptions_MEDIUM;

/**
 * Uses high JPEG compression.
 */
type HIGH = DynamicDocumentsJPEGQualityOptions_HIGH;

/**
 * Uses maximum JPEG compression.
 */
type MAXIMUM = DynamicDocumentsJPEGQualityOptions_MAXIMUM;

}
/**
 * The JPEG compression quality used when exporting dynamic documents.
 */
export declare const DynamicDocumentsJPEGQualityOptions: typeof Enumeration & {

  /**
   * Uses minimum JPEG compression.
   */
  readonly MINIMUM: DynamicDocumentsJPEGQualityOptions_MINIMUM;
  /**
   * Uses minimum JPEG compression.
   */
  readonly minimum: DynamicDocumentsJPEGQualityOptions_MINIMUM;

  /**
   * Uses low JPEG compression.
   */
  readonly LOW: DynamicDocumentsJPEGQualityOptions_LOW;
  /**
   * Uses low JPEG compression.
   */
  readonly low: DynamicDocumentsJPEGQualityOptions_LOW;

  /**
   * Uses medium JPEG compression.
   */
  readonly MEDIUM: DynamicDocumentsJPEGQualityOptions_MEDIUM;
  /**
   * Uses medium JPEG compression.
   */
  readonly medium: DynamicDocumentsJPEGQualityOptions_MEDIUM;

  /**
   * Uses high JPEG compression.
   */
  readonly HIGH: DynamicDocumentsJPEGQualityOptions_HIGH;
  /**
   * Uses high JPEG compression.
   */
  readonly high: DynamicDocumentsJPEGQualityOptions_HIGH;

  /**
   * Uses maximum JPEG compression.
   */
  readonly MAXIMUM: DynamicDocumentsJPEGQualityOptions_MAXIMUM;
  /**
   * Uses maximum JPEG compression.
   */
  readonly maximum: DynamicDocumentsJPEGQualityOptions_MAXIMUM;

}
