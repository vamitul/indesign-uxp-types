/**
 * ImageExportOption.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ImageExportOption: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ImageExportOption extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ImageExportOption>): boolean;

  /**
   * @internal **WARNING:** `__ImageExportOption` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ImageExportOption]: never;
}


/**
 * Exports the original image.
 */
interface ImageExportOption_ORIGINAL_IMAGE extends ImageExportOption {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700949874;
}

/**
 * Exports an optimized image.
 */
interface ImageExportOption_OPTIMIZED_IMAGE extends ImageExportOption {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700949872;
}

/**
 * Links to the image on the server instead of exporting it.
 */
interface ImageExportOption_LINK_TO_SERVER extends ImageExportOption {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700949107;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Choices for export image.
 */
export declare namespace ImageExportOption {
/**
 * Exports the original image.
 */
type ORIGINAL_IMAGE = ImageExportOption_ORIGINAL_IMAGE;

/**
 * Exports an optimized image.
 */
type OPTIMIZED_IMAGE = ImageExportOption_OPTIMIZED_IMAGE;

/**
 * Links to the image on the server instead of exporting it.
 */
type LINK_TO_SERVER = ImageExportOption_LINK_TO_SERVER;

}
/**
 * Choices for export image.
 */
export declare const ImageExportOption: typeof Enumeration & {

  /**
   * Exports the original image.
   */
  readonly ORIGINAL_IMAGE: ImageExportOption_ORIGINAL_IMAGE;
  /**
   * Exports the original image.
   */
  readonly originalImage: ImageExportOption_ORIGINAL_IMAGE;
  /**
   * Exports the original image.
   */
  readonly originalimage: ImageExportOption_ORIGINAL_IMAGE;

  /**
   * Exports an optimized image.
   */
  readonly OPTIMIZED_IMAGE: ImageExportOption_OPTIMIZED_IMAGE;
  /**
   * Exports an optimized image.
   */
  readonly optimizedImage: ImageExportOption_OPTIMIZED_IMAGE;
  /**
   * Exports an optimized image.
   */
  readonly optimizedimage: ImageExportOption_OPTIMIZED_IMAGE;

  /**
   * Links to the image on the server instead of exporting it.
   */
  readonly LINK_TO_SERVER: ImageExportOption_LINK_TO_SERVER;
  /**
   * Links to the image on the server instead of exporting it.
   */
  readonly linkToServer: ImageExportOption_LINK_TO_SERVER;
  /**
   * Links to the image on the server instead of exporting it.
   */
  readonly linktoserver: ImageExportOption_LINK_TO_SERVER;

}
