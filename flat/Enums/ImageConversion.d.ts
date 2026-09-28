/**
 * ImageConversion.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";
import type { ImageFormat } from './ImageFormat';



declare const __ImageConversion: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ImageConversion extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ImageConversion>): boolean;

  /**
   * @internal **WARNING:** `__ImageConversion` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ImageConversion]: never;
}


/**
 * Uses the best format based on the image.
 */
interface ImageConversion_AUTOMATIC extends ImageConversion {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1768059764;
}

/**
 * Uses JPEG format for all images.
 */
interface ImageConversion_JPEG extends ImageConversion {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1785751398;
}

/**
 * Uses GIF format for all images.
 */
interface ImageConversion_GIF extends ImageConversion {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1734960742;
}

/**
 * Uses PNG format for all images.
 */
interface ImageConversion_PNG extends ImageConversion {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1397059687;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The image format an export converts to, or `AUTOMATIC` to let InDesign choose per image. {@link ImageFormat} is the same list without the automatic option. 
 */
export declare namespace ImageConversion {
/**
 * Uses the best format based on the image.
 */
type AUTOMATIC = ImageConversion_AUTOMATIC;

/**
 * Uses JPEG format for all images.
 */
type JPEG = ImageConversion_JPEG;

/**
 * Uses GIF format for all images.
 */
type GIF = ImageConversion_GIF;

/**
 * Uses PNG format for all images.
 */
type PNG = ImageConversion_PNG;

}
export declare const ImageConversion: typeof Enumeration & {

  /**
   * Uses the best format based on the image.
   */
  readonly AUTOMATIC: ImageConversion_AUTOMATIC;
  /**
   * Uses the best format based on the image.
   */
  readonly automatic: ImageConversion_AUTOMATIC;

  /**
   * Uses JPEG format for all images.
   */
  readonly JPEG: ImageConversion_JPEG;
  /**
   * Uses JPEG format for all images.
   */
  readonly jpeg: ImageConversion_JPEG;

  /**
   * Uses GIF format for all images.
   */
  readonly GIF: ImageConversion_GIF;
  /**
   * Uses GIF format for all images.
   */
  readonly gif: ImageConversion_GIF;

  /**
   * Uses PNG format for all images.
   */
  readonly PNG: ImageConversion_PNG;
  /**
   * Uses PNG format for all images.
   */
  readonly png: ImageConversion_PNG;

}
