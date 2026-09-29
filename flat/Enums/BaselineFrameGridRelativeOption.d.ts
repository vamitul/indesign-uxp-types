/**
 * BaselineFrameGridRelativeOption.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __BaselineFrameGridRelativeOption: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface BaselineFrameGridRelativeOption extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<BaselineFrameGridRelativeOption>): boolean;

  /**
   * @internal **WARNING:** `__BaselineFrameGridRelativeOption` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__BaselineFrameGridRelativeOption]: never;
}


/**
 * Offsets the grid from the top of the page.
 */
interface BaselineFrameGridRelativeOption_TOP_OF_PAGE extends BaselineFrameGridRelativeOption {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1163161458;
}

/**
 * Offsets the grid from the top margin of the page.
 */
interface BaselineFrameGridRelativeOption_TOP_OF_MARGIN extends BaselineFrameGridRelativeOption {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1163161453;
}

/**
 * Offsets the grid from the top of the text frame.
 */
interface BaselineFrameGridRelativeOption_TOP_OF_FRAME extends BaselineFrameGridRelativeOption {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1163161446;
}

/**
 * Offsets the grid from the top inset of the text frame.
 */
interface BaselineFrameGridRelativeOption_TOP_OF_INSET extends BaselineFrameGridRelativeOption {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1163161449;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The starting point used to calculate the baseline frame grid offset.
 */
export declare namespace BaselineFrameGridRelativeOption {
/**
 * Offsets the grid from the top of the page.
 */
type TOP_OF_PAGE = BaselineFrameGridRelativeOption_TOP_OF_PAGE;

/**
 * Offsets the grid from the top margin of the page.
 */
type TOP_OF_MARGIN = BaselineFrameGridRelativeOption_TOP_OF_MARGIN;

/**
 * Offsets the grid from the top of the text frame.
 */
type TOP_OF_FRAME = BaselineFrameGridRelativeOption_TOP_OF_FRAME;

/**
 * Offsets the grid from the top inset of the text frame.
 */
type TOP_OF_INSET = BaselineFrameGridRelativeOption_TOP_OF_INSET;

}
/**
 * The starting point used to calculate the baseline frame grid offset.
 */
export declare const BaselineFrameGridRelativeOption: typeof Enumeration & {

  /**
   * Offsets the grid from the top of the page.
   */
  readonly TOP_OF_PAGE: BaselineFrameGridRelativeOption_TOP_OF_PAGE;
  /**
   * Offsets the grid from the top of the page.
   */
  readonly topOfPage: BaselineFrameGridRelativeOption_TOP_OF_PAGE;
  /**
   * Offsets the grid from the top of the page.
   */
  readonly topofpage: BaselineFrameGridRelativeOption_TOP_OF_PAGE;

  /**
   * Offsets the grid from the top margin of the page.
   */
  readonly TOP_OF_MARGIN: BaselineFrameGridRelativeOption_TOP_OF_MARGIN;
  /**
   * Offsets the grid from the top margin of the page.
   */
  readonly topOfMargin: BaselineFrameGridRelativeOption_TOP_OF_MARGIN;
  /**
   * Offsets the grid from the top margin of the page.
   */
  readonly topofmargin: BaselineFrameGridRelativeOption_TOP_OF_MARGIN;

  /**
   * Offsets the grid from the top of the text frame.
   */
  readonly TOP_OF_FRAME: BaselineFrameGridRelativeOption_TOP_OF_FRAME;
  /**
   * Offsets the grid from the top of the text frame.
   */
  readonly topOfFrame: BaselineFrameGridRelativeOption_TOP_OF_FRAME;
  /**
   * Offsets the grid from the top of the text frame.
   */
  readonly topofframe: BaselineFrameGridRelativeOption_TOP_OF_FRAME;

  /**
   * Offsets the grid from the top inset of the text frame.
   */
  readonly TOP_OF_INSET: BaselineFrameGridRelativeOption_TOP_OF_INSET;
  /**
   * Offsets the grid from the top inset of the text frame.
   */
  readonly topOfInset: BaselineFrameGridRelativeOption_TOP_OF_INSET;
  /**
   * Offsets the grid from the top inset of the text frame.
   */
  readonly topofinset: BaselineFrameGridRelativeOption_TOP_OF_INSET;

}
