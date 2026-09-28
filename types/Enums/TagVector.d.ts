/**
 * TagVector.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __TagVector: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface TagVector extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<TagVector>): boolean;

  /**
   * @internal **WARNING:** `__TagVector` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__TagVector]: never;
}


/**
 * Grays out the image.
 */
interface TagVector_GRAY_OUT extends TagVector {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1917284985;
}

/**
 * Displays a low-resolution proxy version of the image.
 */
interface TagVector_PROXY extends TagVector {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1917874808;
}

/**
 * Displays a high-resolution version of the image.
 */
interface TagVector_HIGH_RESOLUTION extends TagVector {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1917348177;
}

/**
 * Uses the default setting. For information, see display performance preferences.
 */
interface TagVector_DEFAULT_VALUE extends TagVector {
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
 * The display method for vector images.
 */
export declare namespace TagVector {
/**
 * Grays out the image.
 */
type GRAY_OUT = TagVector_GRAY_OUT;

/**
 * Displays a low-resolution proxy version of the image.
 */
type PROXY = TagVector_PROXY;

/**
 * Displays a high-resolution version of the image.
 */
type HIGH_RESOLUTION = TagVector_HIGH_RESOLUTION;

/**
 * Uses the default setting. For information, see display performance preferences.
 */
type DEFAULT_VALUE = TagVector_DEFAULT_VALUE;

}
/**
 * The display method for vector images.
 */
export declare const TagVector: typeof Enumeration & {

  /**
   * Grays out the image.
   */
  readonly GRAY_OUT: TagVector_GRAY_OUT;
  /**
   * Grays out the image.
   */
  readonly grayOut: TagVector_GRAY_OUT;
  /**
   * Grays out the image.
   */
  readonly grayout: TagVector_GRAY_OUT;

  /**
   * Displays a low-resolution proxy version of the image.
   */
  readonly PROXY: TagVector_PROXY;
  /**
   * Displays a low-resolution proxy version of the image.
   */
  readonly proxy: TagVector_PROXY;

  /**
   * Displays a high-resolution version of the image.
   */
  readonly HIGH_RESOLUTION: TagVector_HIGH_RESOLUTION;
  /**
   * Displays a high-resolution version of the image.
   */
  readonly highResolution: TagVector_HIGH_RESOLUTION;
  /**
   * Displays a high-resolution version of the image.
   */
  readonly highresolution: TagVector_HIGH_RESOLUTION;

  /**
   * Uses the default setting. For information, see display performance preferences.
   */
  readonly DEFAULT_VALUE: TagVector_DEFAULT_VALUE;
  /**
   * Uses the default setting. For information, see display performance preferences.
   */
  readonly defaultValue: TagVector_DEFAULT_VALUE;
  /**
   * Uses the default setting. For information, see display performance preferences.
   */
  readonly defaultvalue: TagVector_DEFAULT_VALUE;

}
