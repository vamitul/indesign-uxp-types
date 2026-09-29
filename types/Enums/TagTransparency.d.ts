/**
 * TagTransparency.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __TagTransparency: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface TagTransparency extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<TagTransparency>): boolean;

  /**
   * @internal **WARNING:** `__TagTransparency` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__TagTransparency]: never;
}


/**
 * Turns off the on-screen display of transparency. Note: Does not turn off transparency when printing or exporting the file.
 */
interface TagTransparency_OFF extends TagTransparency {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1330005536;
}

/**
 * Displays basic transparency (opacity and blend modes) and shows transparency effects such
 * as drop shadow and feathering in a low-resolution approximation.
 *
 * Note: Does not isolate page content from the background. Objects with blend modes other
 * than Normal might appear different in other applications and output.
 */
interface TagTransparency_LOW_QUALITY extends TagTransparency {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1481666146;
}

/**
 * Displays drop shadows and feathering in low resolution.
 */
interface TagTransparency_MEDIUM_QUALITY extends TagTransparency {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1481663597;
}

/**
 * Displays higher-resolution (144 dpi) drop shadows and feathers, CMYK mattes, and spread isolation.
 */
interface TagTransparency_HIGH_QUALITY extends TagTransparency {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1346922866;
}

/**
 * Uses the default setting. For information, see display performance preferences.
 */
interface TagTransparency_DEFAULT_VALUE extends TagTransparency {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1147563124;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * How on-screen transparency effects are rendered — off, or at low, medium, high, or the
 * display-performance default quality.
 */
export declare namespace TagTransparency {
/**
 * Turns off the on-screen display of transparency. Note: Does not turn off transparency when printing or exporting the file.
 */
type OFF = TagTransparency_OFF;

/**
 * Displays basic transparency (opacity and blend modes) and shows transparency effects such
 * as drop shadow and feathering in a low-resolution approximation.
 *
 * Note: Does not isolate page content from the background. Objects with blend modes other
 * than Normal might appear different in other applications and output.
 */
type LOW_QUALITY = TagTransparency_LOW_QUALITY;

/**
 * Displays drop shadows and feathering in low resolution.
 */
type MEDIUM_QUALITY = TagTransparency_MEDIUM_QUALITY;

/**
 * Displays higher-resolution (144 dpi) drop shadows and feathers, CMYK mattes, and spread isolation.
 */
type HIGH_QUALITY = TagTransparency_HIGH_QUALITY;

/**
 * Uses the default setting. For information, see display performance preferences.
 */
type DEFAULT_VALUE = TagTransparency_DEFAULT_VALUE;

}
/**
 * How on-screen transparency effects are rendered — off, or at low, medium, high, or the
 * display-performance default quality.
 */
export declare const TagTransparency: typeof Enumeration & {

  /**
   * Turns off the on-screen display of transparency. Note: Does not turn off transparency when printing or exporting the file.
   */
  readonly OFF: TagTransparency_OFF;
  /**
   * Turns off the on-screen display of transparency. Note: Does not turn off transparency when printing or exporting the file.
   */
  readonly off: TagTransparency_OFF;

  /**
   * Displays basic transparency (opacity and blend modes) and shows transparency effects such
   * as drop shadow and feathering in a low-resolution approximation.
   *
   * Note: Does not isolate page content from the background. Objects with blend modes other
   * than Normal might appear different in other applications and output.
   */
  readonly LOW_QUALITY: TagTransparency_LOW_QUALITY;
  /**
   * Displays basic transparency (opacity and blend modes) and shows transparency effects such
   * as drop shadow and feathering in a low-resolution approximation.
   *
   * Note: Does not isolate page content from the background. Objects with blend modes other
   * than Normal might appear different in other applications and output.
   */
  readonly lowQuality: TagTransparency_LOW_QUALITY;
  /**
   * Displays basic transparency (opacity and blend modes) and shows transparency effects such
   * as drop shadow and feathering in a low-resolution approximation.
   *
   * Note: Does not isolate page content from the background. Objects with blend modes other
   * than Normal might appear different in other applications and output.
   */
  readonly lowquality: TagTransparency_LOW_QUALITY;

  /**
   * Displays drop shadows and feathering in low resolution.
   */
  readonly MEDIUM_QUALITY: TagTransparency_MEDIUM_QUALITY;
  /**
   * Displays drop shadows and feathering in low resolution.
   */
  readonly mediumQuality: TagTransparency_MEDIUM_QUALITY;
  /**
   * Displays drop shadows and feathering in low resolution.
   */
  readonly mediumquality: TagTransparency_MEDIUM_QUALITY;

  /**
   * Displays higher-resolution (144 dpi) drop shadows and feathers, CMYK mattes, and spread isolation.
   */
  readonly HIGH_QUALITY: TagTransparency_HIGH_QUALITY;
  /**
   * Displays higher-resolution (144 dpi) drop shadows and feathers, CMYK mattes, and spread isolation.
   */
  readonly highQuality: TagTransparency_HIGH_QUALITY;
  /**
   * Displays higher-resolution (144 dpi) drop shadows and feathers, CMYK mattes, and spread isolation.
   */
  readonly highquality: TagTransparency_HIGH_QUALITY;

  /**
   * Uses the default setting. For information, see display performance preferences.
   */
  readonly DEFAULT_VALUE: TagTransparency_DEFAULT_VALUE;
  /**
   * Uses the default setting. For information, see display performance preferences.
   */
  readonly defaultValue: TagTransparency_DEFAULT_VALUE;
  /**
   * Uses the default setting. For information, see display performance preferences.
   */
  readonly defaultvalue: TagTransparency_DEFAULT_VALUE;

}
