/**
 * ImageAlignmentType.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ImageAlignmentType: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ImageAlignmentType extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ImageAlignmentType>): boolean;

  /**
   * @internal **WARNING:** `__ImageAlignmentType` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ImageAlignmentType]: never;
}


/**
 * Aligns the image to the left.
 */
interface ImageAlignmentType_ALIGN_LEFT extends ImageAlignmentType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1097616486;
}

/**
 * Aligns the image to the center.
 */
interface ImageAlignmentType_ALIGN_CENTER extends ImageAlignmentType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1097614194;
}

/**
 * Aligns the image to the right.
 */
interface ImageAlignmentType_ALIGN_RIGHT extends ImageAlignmentType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1097618036;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Horizontal alignment of an image within its container.
 */
export declare namespace ImageAlignmentType {
/**
 * Aligns the image to the left.
 */
type ALIGN_LEFT = ImageAlignmentType_ALIGN_LEFT;

/**
 * Aligns the image to the center.
 */
type ALIGN_CENTER = ImageAlignmentType_ALIGN_CENTER;

/**
 * Aligns the image to the right.
 */
type ALIGN_RIGHT = ImageAlignmentType_ALIGN_RIGHT;

}
/**
 * Horizontal alignment of an image within its container.
 */
export declare const ImageAlignmentType: typeof Enumeration & {

  /**
   * Aligns the image to the left.
   */
  readonly ALIGN_LEFT: ImageAlignmentType_ALIGN_LEFT;
  /**
   * Aligns the image to the left.
   */
  readonly alignLeft: ImageAlignmentType_ALIGN_LEFT;
  /**
   * Aligns the image to the left.
   */
  readonly alignleft: ImageAlignmentType_ALIGN_LEFT;

  /**
   * Aligns the image to the center.
   */
  readonly ALIGN_CENTER: ImageAlignmentType_ALIGN_CENTER;
  /**
   * Aligns the image to the center.
   */
  readonly alignCenter: ImageAlignmentType_ALIGN_CENTER;
  /**
   * Aligns the image to the center.
   */
  readonly aligncenter: ImageAlignmentType_ALIGN_CENTER;

  /**
   * Aligns the image to the right.
   */
  readonly ALIGN_RIGHT: ImageAlignmentType_ALIGN_RIGHT;
  /**
   * Aligns the image to the right.
   */
  readonly alignRight: ImageAlignmentType_ALIGN_RIGHT;
  /**
   * Aligns the image to the right.
   */
  readonly alignright: ImageAlignmentType_ALIGN_RIGHT;

}
