/**
 * ImageFormat.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";
import type { ImageConversion } from './ImageConversion';



declare const __ImageFormat: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ImageFormat extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ImageFormat>): boolean;

  /**
   * @internal **WARNING:** `__ImageFormat` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ImageFormat]: never;
}


/**
 * Uses JPEG format for the selected object.
 */
interface ImageFormat_JPEG extends ImageFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1785751398;
}

/**
 * Uses GIF format for the selected object.
 */
interface ImageFormat_GIF extends ImageFormat {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1734960742;
}

/**
 * Uses PNG format for the selected object.
 */
interface ImageFormat_PNG extends ImageFormat {
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
 * The image format an export converts to, chosen explicitly. {@link ImageConversion} is the same list plus an automatic option.
 */
export declare namespace ImageFormat {
/**
 * Uses JPEG format for the selected object.
 */
type JPEG = ImageFormat_JPEG;

/**
 * Uses GIF format for the selected object.
 */
type GIF = ImageFormat_GIF;

/**
 * Uses PNG format for the selected object.
 */
type PNG = ImageFormat_PNG;

}
export declare const ImageFormat: typeof Enumeration & {

  /**
   * Uses JPEG format for the selected object.
   */
  readonly JPEG: ImageFormat_JPEG;
  /**
   * Uses JPEG format for the selected object.
   */
  readonly jpeg: ImageFormat_JPEG;

  /**
   * Uses GIF format for the selected object.
   */
  readonly GIF: ImageFormat_GIF;
  /**
   * Uses GIF format for the selected object.
   */
  readonly gif: ImageFormat_GIF;

  /**
   * Uses PNG format for the selected object.
   */
  readonly PNG: ImageFormat_PNG;
  /**
   * Uses PNG format for the selected object.
   */
  readonly png: ImageFormat_PNG;

}
