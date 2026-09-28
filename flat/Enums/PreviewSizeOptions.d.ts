/**
 * PreviewSizeOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PreviewSizeOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PreviewSizeOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PreviewSizeOptions>): boolean;

  /**
   * @internal **WARNING:** `__PreviewSizeOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PreviewSizeOptions]: never;
}


/**
 * Small preview (128 x 128).
 */
interface PreviewSizeOptions_SMALL extends PreviewSizeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1399672946;
}

/**
 * Medium preview (256 x 256).
 */
interface PreviewSizeOptions_MEDIUM extends PreviewSizeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701727588;
}

/**
 * Large preview (512 x 512).
 */
interface PreviewSizeOptions_LARGE extends PreviewSizeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1281446002;
}

/**
 * Extra large preview (1024 x 1024).
 */
interface PreviewSizeOptions_EXTRA_LARGE extends PreviewSizeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1162629234;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The pixel size of the preview image saved inside a document.
 */
export declare namespace PreviewSizeOptions {
/**
 * Small preview (128 x 128).
 */
type SMALL = PreviewSizeOptions_SMALL;

/**
 * Medium preview (256 x 256).
 */
type MEDIUM = PreviewSizeOptions_MEDIUM;

/**
 * Large preview (512 x 512).
 */
type LARGE = PreviewSizeOptions_LARGE;

/**
 * Extra large preview (1024 x 1024).
 */
type EXTRA_LARGE = PreviewSizeOptions_EXTRA_LARGE;

}
/**
 * The pixel size of the preview image saved inside a document.
 */
export declare const PreviewSizeOptions: typeof Enumeration & {

  /**
   * Small preview (128 x 128).
   */
  readonly SMALL: PreviewSizeOptions_SMALL;
  /**
   * Small preview (128 x 128).
   */
  readonly small: PreviewSizeOptions_SMALL;

  /**
   * Medium preview (256 x 256).
   */
  readonly MEDIUM: PreviewSizeOptions_MEDIUM;
  /**
   * Medium preview (256 x 256).
   */
  readonly medium: PreviewSizeOptions_MEDIUM;

  /**
   * Large preview (512 x 512).
   */
  readonly LARGE: PreviewSizeOptions_LARGE;
  /**
   * Large preview (512 x 512).
   */
  readonly large: PreviewSizeOptions_LARGE;

  /**
   * Extra large preview (1024 x 1024).
   */
  readonly EXTRA_LARGE: PreviewSizeOptions_EXTRA_LARGE;
  /**
   * Extra large preview (1024 x 1024).
   */
  readonly extraLarge: PreviewSizeOptions_EXTRA_LARGE;
  /**
   * Extra large preview (1024 x 1024).
   */
  readonly extralarge: PreviewSizeOptions_EXTRA_LARGE;

}
