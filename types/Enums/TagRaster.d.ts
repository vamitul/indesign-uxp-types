/**
 * TagRaster.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __TagRaster: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface TagRaster extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<TagRaster>): boolean;

  /**
   * @internal **WARNING:** `__TagRaster` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__TagRaster]: never;
}


/**
 * Grays out raster images.
 */
interface TagRaster_GRAY_OUT extends TagRaster {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1917284985;
}

/**
 * Displays a low-resolution proxy image appropriate for identifying and positioning an image.
 */
interface TagRaster_PROXY extends TagRaster {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1917874808;
}

/**
 * Displays a high-resolution version of the image.
 */
interface TagRaster_HIGH_RESOLUTION extends TagRaster {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1917348177;
}

/**
 * Uses the default setting. For information, see display performance preferences.
 */
interface TagRaster_DEFAULT_VALUE extends TagRaster {
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
 * The display method for raster images.
 */
export declare namespace TagRaster {
/**
 * Grays out raster images.
 */
type GRAY_OUT = TagRaster_GRAY_OUT;

/**
 * Displays a low-resolution proxy image appropriate for identifying and positioning an image.
 */
type PROXY = TagRaster_PROXY;

/**
 * Displays a high-resolution version of the image.
 */
type HIGH_RESOLUTION = TagRaster_HIGH_RESOLUTION;

/**
 * Uses the default setting. For information, see display performance preferences.
 */
type DEFAULT_VALUE = TagRaster_DEFAULT_VALUE;

}
/**
 * The display method for raster images.
 */
export declare const TagRaster: typeof Enumeration & {

  /**
   * Grays out raster images.
   */
  readonly GRAY_OUT: TagRaster_GRAY_OUT;
  /**
   * Grays out raster images.
   */
  readonly grayOut: TagRaster_GRAY_OUT;
  /**
   * Grays out raster images.
   */
  readonly grayout: TagRaster_GRAY_OUT;

  /**
   * Displays a low-resolution proxy image appropriate for identifying and positioning an image.
   */
  readonly PROXY: TagRaster_PROXY;
  /**
   * Displays a low-resolution proxy image appropriate for identifying and positioning an image.
   */
  readonly proxy: TagRaster_PROXY;

  /**
   * Displays a high-resolution version of the image.
   */
  readonly HIGH_RESOLUTION: TagRaster_HIGH_RESOLUTION;
  /**
   * Displays a high-resolution version of the image.
   */
  readonly highResolution: TagRaster_HIGH_RESOLUTION;
  /**
   * Displays a high-resolution version of the image.
   */
  readonly highresolution: TagRaster_HIGH_RESOLUTION;

  /**
   * Uses the default setting. For information, see display performance preferences.
   */
  readonly DEFAULT_VALUE: TagRaster_DEFAULT_VALUE;
  /**
   * Uses the default setting. For information, see display performance preferences.
   */
  readonly defaultValue: TagRaster_DEFAULT_VALUE;
  /**
   * Uses the default setting. For information, see display performance preferences.
   */
  readonly defaultvalue: TagRaster_DEFAULT_VALUE;

}
