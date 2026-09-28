/**
 * ImageDataTypes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ImageDataTypes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ImageDataTypes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ImageDataTypes>): boolean;

  /**
   * @internal **WARNING:** `__ImageDataTypes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ImageDataTypes]: never;
}


/**
 * Sends full-resolution data.
 */
interface ImageDataTypes_ALL_IMAGE_DATA extends ImageDataTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1853058416;
}

/**
 * Sends just enough data to print graphics at the best possible resolution for the output device.
 */
interface ImageDataTypes_OPTIMIZED_SUBSAMPLING extends ImageDataTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1869640563;
}

/**
 * Sends screen-resolution versions (72 dpi) of placed bitmap images.
 */
interface ImageDataTypes_PROXY_IMAGE_DATA extends ImageDataTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1819243130;
}

/**
 * Prints graphics frames with crossbars in place of graphics.
 */
interface ImageDataTypes_NONE extends ImageDataTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for sending image data to the printer or file.
 */
export declare namespace ImageDataTypes {
/**
 * Sends full-resolution data.
 */
type ALL_IMAGE_DATA = ImageDataTypes_ALL_IMAGE_DATA;

/**
 * Sends just enough data to print graphics at the best possible resolution for the output device.
 */
type OPTIMIZED_SUBSAMPLING = ImageDataTypes_OPTIMIZED_SUBSAMPLING;

/**
 * Sends screen-resolution versions (72 dpi) of placed bitmap images.
 */
type PROXY_IMAGE_DATA = ImageDataTypes_PROXY_IMAGE_DATA;

/**
 * Prints graphics frames with crossbars in place of graphics.
 */
type NONE = ImageDataTypes_NONE;

}
/**
 * Options for sending image data to the printer or file.
 */
export declare const ImageDataTypes: typeof Enumeration & {

  /**
   * Sends full-resolution data.
   */
  readonly ALL_IMAGE_DATA: ImageDataTypes_ALL_IMAGE_DATA;
  /**
   * Sends full-resolution data.
   */
  readonly allImageData: ImageDataTypes_ALL_IMAGE_DATA;
  /**
   * Sends full-resolution data.
   */
  readonly allimagedata: ImageDataTypes_ALL_IMAGE_DATA;

  /**
   * Sends just enough data to print graphics at the best possible resolution for the output device.
   */
  readonly OPTIMIZED_SUBSAMPLING: ImageDataTypes_OPTIMIZED_SUBSAMPLING;
  /**
   * Sends just enough data to print graphics at the best possible resolution for the output device.
   */
  readonly optimizedSubsampling: ImageDataTypes_OPTIMIZED_SUBSAMPLING;
  /**
   * Sends just enough data to print graphics at the best possible resolution for the output device.
   */
  readonly optimizedsubsampling: ImageDataTypes_OPTIMIZED_SUBSAMPLING;

  /**
   * Sends screen-resolution versions (72 dpi) of placed bitmap images.
   */
  readonly PROXY_IMAGE_DATA: ImageDataTypes_PROXY_IMAGE_DATA;
  /**
   * Sends screen-resolution versions (72 dpi) of placed bitmap images.
   */
  readonly proxyImageData: ImageDataTypes_PROXY_IMAGE_DATA;
  /**
   * Sends screen-resolution versions (72 dpi) of placed bitmap images.
   */
  readonly proxyimagedata: ImageDataTypes_PROXY_IMAGE_DATA;

  /**
   * Prints graphics frames with crossbars in place of graphics.
   */
  readonly NONE: ImageDataTypes_NONE;
  /**
   * Prints graphics frames with crossbars in place of graphics.
   */
  readonly none: ImageDataTypes_NONE;

}
