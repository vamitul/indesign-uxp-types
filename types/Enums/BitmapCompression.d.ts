/**
 * BitmapCompression.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __BitmapCompression: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface BitmapCompression extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<BitmapCompression>): boolean;

  /**
   * @internal **WARNING:** `__BitmapCompression` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__BitmapCompression]: never;
}


/**
 * Uses no compression.
 */
interface BitmapCompression_NONE extends BitmapCompression {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}

/**
 * Uses JPEG compression and automatically determines the best quality type. Valid only when acrobat compatibility is acrobat 6 or higher.
 */
interface BitmapCompression_AUTO_COMPRESSION extends BitmapCompression {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1631808880;
}

/**
 * Uses JPEG compression.
 */
interface BitmapCompression_JPEG extends BitmapCompression {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1785751398;
}

/**
 * Uses ZIP compression.
 */
interface BitmapCompression_ZIP extends BitmapCompression {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2053730371;
}

/**
 * Uses JPEG 2000 compression. Valid only when acrobat compatibility is acrobat 6 or higher.
 */
interface BitmapCompression_JPEG_2000 extends BitmapCompression {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1785751346;
}

/**
 * Uses JPEG 2000 compression and automatically determines the best quality type.
 */
interface BitmapCompression_AUTOMATIC_JPEG_2000 extends BitmapCompression {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1634365490;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The type of compression for bitmap images.
 */
export declare namespace BitmapCompression {
/**
 * Uses no compression.
 */
type NONE = BitmapCompression_NONE;

/**
 * Uses JPEG compression and automatically determines the best quality type. Valid only when acrobat compatibility is acrobat 6 or higher.
 */
type AUTO_COMPRESSION = BitmapCompression_AUTO_COMPRESSION;

/**
 * Uses JPEG compression.
 */
type JPEG = BitmapCompression_JPEG;

/**
 * Uses ZIP compression.
 */
type ZIP = BitmapCompression_ZIP;

/**
 * Uses JPEG 2000 compression. Valid only when acrobat compatibility is acrobat 6 or higher.
 */
type JPEG_2000 = BitmapCompression_JPEG_2000;

/**
 * The Automatic JPEG 2000 compression method.
 */
type AUTOMATIC_JPEG_2000 = BitmapCompression_AUTOMATIC_JPEG_2000;

}
/**
 * The type of compression for bitmap images.
 */
export declare const BitmapCompression: typeof Enumeration & {

  /**
   * Uses no compression.
   */
  readonly NONE: BitmapCompression_NONE;
  /**
   * Uses no compression.
   */
  readonly none: BitmapCompression_NONE;

  /**
   * Uses JPEG compression and automatically determines the best quality type. Valid only when acrobat compatibility is acrobat 6 or higher.
   */
  readonly AUTO_COMPRESSION: BitmapCompression_AUTO_COMPRESSION;
  /**
   * Uses JPEG compression and automatically determines the best quality type. Valid only when acrobat compatibility is acrobat 6 or higher.
   */
  readonly autoCompression: BitmapCompression_AUTO_COMPRESSION;
  /**
   * Uses JPEG compression and automatically determines the best quality type. Valid only when acrobat compatibility is acrobat 6 or higher.
   */
  readonly autocompression: BitmapCompression_AUTO_COMPRESSION;

  /**
   * Uses JPEG compression.
   */
  readonly JPEG: BitmapCompression_JPEG;
  /**
   * Uses JPEG compression.
   */
  readonly jpeg: BitmapCompression_JPEG;

  /**
   * Uses ZIP compression.
   */
  readonly ZIP: BitmapCompression_ZIP;
  /**
   * Uses ZIP compression.
   */
  readonly zip: BitmapCompression_ZIP;

  /**
   * Uses JPEG 2000 compression. Valid only when acrobat compatibility is acrobat 6 or higher.
   */
  readonly JPEG_2000: BitmapCompression_JPEG_2000;
  /**
   * Uses JPEG 2000 compression. Valid only when acrobat compatibility is acrobat 6 or higher.
   */
  readonly jpeg2000: BitmapCompression_JPEG_2000;

  /**
   * Uses JPEG 2000 compression and automatically determines the best quality type.
   */
  readonly AUTOMATIC_JPEG_2000: BitmapCompression_AUTOMATIC_JPEG_2000;
  /**
   * Uses JPEG 2000 compression and automatically determines the best quality type.
   */
  readonly automaticJpeg2000: BitmapCompression_AUTOMATIC_JPEG_2000;
  /**
   * Uses JPEG 2000 compression and automatically determines the best quality type.
   */
  readonly automaticjpeg2000: BitmapCompression_AUTOMATIC_JPEG_2000;

}
