/**
 * ImageSizeOption.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ImageSizeOption: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ImageSizeOption extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ImageSizeOption>): boolean;

  /**
   * @internal **WARNING:** `__ImageSizeOption` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ImageSizeOption]: never;
}


/**
 * No CSS size is used.
 */
interface ImageSizeOption_SIZE_NONE extends ImageSizeOption {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1399746414;
}

/**
 * Uses an absolute image size.
 */
interface ImageSizeOption_SIZE_FIXED extends ImageSizeOption {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1182295162;
}

/**
 * Uses an image size relative to the text flow.
 */
interface ImageSizeOption_SIZE_RELATIVE_TO_TEXT_FLOW extends ImageSizeOption {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1383486566;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Image size option for a converted object.
 */
export declare namespace ImageSizeOption {
/**
 * No CSS size is used.
 */
type SIZE_NONE = ImageSizeOption_SIZE_NONE;

/**
 * Uses an absolute image size.
 */
type SIZE_FIXED = ImageSizeOption_SIZE_FIXED;

/**
 * Uses an image size relative to the text flow.
 */
type SIZE_RELATIVE_TO_TEXT_FLOW = ImageSizeOption_SIZE_RELATIVE_TO_TEXT_FLOW;

}
/**
 * Image size option for a converted object.
 */
export declare const ImageSizeOption: typeof Enumeration & {

  /**
   * No CSS size is used.
   */
  readonly SIZE_NONE: ImageSizeOption_SIZE_NONE;
  /**
   * No CSS size is used.
   */
  readonly sizeNone: ImageSizeOption_SIZE_NONE;
  /**
   * No CSS size is used.
   */
  readonly sizenone: ImageSizeOption_SIZE_NONE;

  /**
   * Uses an absolute image size.
   */
  readonly SIZE_FIXED: ImageSizeOption_SIZE_FIXED;
  /**
   * Uses an absolute image size.
   */
  readonly sizeFixed: ImageSizeOption_SIZE_FIXED;
  /**
   * Uses an absolute image size.
   */
  readonly sizefixed: ImageSizeOption_SIZE_FIXED;

  /**
   * Uses an image size relative to the text flow.
   */
  readonly SIZE_RELATIVE_TO_TEXT_FLOW: ImageSizeOption_SIZE_RELATIVE_TO_TEXT_FLOW;
  /**
   * Uses an image size relative to the text flow.
   */
  readonly sizeRelativeToTextFlow: ImageSizeOption_SIZE_RELATIVE_TO_TEXT_FLOW;
  /**
   * Uses an image size relative to the text flow.
   */
  readonly sizerelativetotextflow: ImageSizeOption_SIZE_RELATIVE_TO_TEXT_FLOW;

}
