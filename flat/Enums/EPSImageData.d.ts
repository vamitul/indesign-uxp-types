/**
 * EPSImageData.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __EPSImageData: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface EPSImageData extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<EPSImageData>): boolean;

  /**
   * @internal **WARNING:** `__EPSImageData` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__EPSImageData]: never;
}


/**
 * Exports high-resolution data. Note: Use when the file will be printed on a high-resolution output device.
 */
interface EPSImageData_ALL_IMAGE_DATA extends EPSImageData {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1853058416;
}

/**
 * Exports only screen-resolution versions (72 dpi) of placed bitmap images. Note: Use in conjunction with OPI image replacement or if the resulting file will be viewed on-screen.
 */
interface EPSImageData_PROXY_IMAGE_DATA extends EPSImageData {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1819243130;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for exporting image data to the EPS document.
 */
export declare namespace EPSImageData {
/**
 * Exports high-resolution data. Note: Use when the file will be printed on a high-resolution output device.
 */
type ALL_IMAGE_DATA = EPSImageData_ALL_IMAGE_DATA;

/**
 * Exports only screen-resolution versions (72 dpi) of placed bitmap images. Note: Use in conjunction with OPI image replacement or if the resulting file will be viewed on-screen.
 */
type PROXY_IMAGE_DATA = EPSImageData_PROXY_IMAGE_DATA;

}
/**
 * Options for exporting image data to the EPS document.
 */
export declare const EPSImageData: typeof Enumeration & {

  /**
   * Exports high-resolution data. Note: Use when the file will be printed on a high-resolution output device.
   */
  readonly ALL_IMAGE_DATA: EPSImageData_ALL_IMAGE_DATA;
  /**
   * Exports high-resolution data. Note: Use when the file will be printed on a high-resolution output device.
   */
  readonly allImageData: EPSImageData_ALL_IMAGE_DATA;
  /**
   * Exports high-resolution data. Note: Use when the file will be printed on a high-resolution output device.
   */
  readonly allimagedata: EPSImageData_ALL_IMAGE_DATA;

  /**
   * Exports only screen-resolution versions (72 dpi) of placed bitmap images. Note: Use in conjunction with OPI image replacement or if the resulting file will be viewed on-screen.
   */
  readonly PROXY_IMAGE_DATA: EPSImageData_PROXY_IMAGE_DATA;
  /**
   * Exports only screen-resolution versions (72 dpi) of placed bitmap images. Note: Use in conjunction with OPI image replacement or if the resulting file will be viewed on-screen.
   */
  readonly proxyImageData: EPSImageData_PROXY_IMAGE_DATA;
  /**
   * Exports only screen-resolution versions (72 dpi) of placed bitmap images. Note: Use in conjunction with OPI image replacement or if the resulting file will be viewed on-screen.
   */
  readonly proxyimagedata: EPSImageData_PROXY_IMAGE_DATA;

}
