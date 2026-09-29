/**
 * ImagePageBreakType.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ImagePageBreakType: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ImagePageBreakType extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ImagePageBreakType>): boolean;

  /**
   * @internal **WARNING:** `__ImagePageBreakType` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ImagePageBreakType]: never;
}


/**
 * Page break before image.
 */
interface ImagePageBreakType_PAGE_BREAK_BEFORE extends ImagePageBreakType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1114792550;
}

/**
 * Page break after image.
 */
interface ImagePageBreakType_PAGE_BREAK_AFTER extends ImagePageBreakType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1114792294;
}

/**
 * Page break before and after image.
 */
interface ImagePageBreakType_PAGE_BREAK_BEFORE_AND_AFTER extends ImagePageBreakType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1114792545;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * When to insert a page break relative to the image.
 */
export declare namespace ImagePageBreakType {
/**
 * Page break before image.
 */
type PAGE_BREAK_BEFORE = ImagePageBreakType_PAGE_BREAK_BEFORE;

/**
 * Page break after image.
 */
type PAGE_BREAK_AFTER = ImagePageBreakType_PAGE_BREAK_AFTER;

/**
 * Page break before and after image.
 */
type PAGE_BREAK_BEFORE_AND_AFTER = ImagePageBreakType_PAGE_BREAK_BEFORE_AND_AFTER;

}
/**
 * When to insert a page break relative to the image.
 */
export declare const ImagePageBreakType: typeof Enumeration & {

  /**
   * Page break before image.
   */
  readonly PAGE_BREAK_BEFORE: ImagePageBreakType_PAGE_BREAK_BEFORE;
  /**
   * Page break before image.
   */
  readonly pageBreakBefore: ImagePageBreakType_PAGE_BREAK_BEFORE;
  /**
   * Page break before image.
   */
  readonly pagebreakbefore: ImagePageBreakType_PAGE_BREAK_BEFORE;

  /**
   * Page break after image.
   */
  readonly PAGE_BREAK_AFTER: ImagePageBreakType_PAGE_BREAK_AFTER;
  /**
   * Page break after image.
   */
  readonly pageBreakAfter: ImagePageBreakType_PAGE_BREAK_AFTER;
  /**
   * Page break after image.
   */
  readonly pagebreakafter: ImagePageBreakType_PAGE_BREAK_AFTER;

  /**
   * Page break before and after image.
   */
  readonly PAGE_BREAK_BEFORE_AND_AFTER: ImagePageBreakType_PAGE_BREAK_BEFORE_AND_AFTER;
  /**
   * Page break before and after image.
   */
  readonly pageBreakBeforeAndAfter: ImagePageBreakType_PAGE_BREAK_BEFORE_AND_AFTER;
  /**
   * Page break before and after image.
   */
  readonly pagebreakbeforeandafter: ImagePageBreakType_PAGE_BREAK_BEFORE_AND_AFTER;

}
