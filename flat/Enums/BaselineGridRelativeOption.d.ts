/**
 * BaselineGridRelativeOption.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __BaselineGridRelativeOption: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface BaselineGridRelativeOption extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<BaselineGridRelativeOption>): boolean;

  /**
   * @internal **WARNING:** `__BaselineGridRelativeOption` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__BaselineGridRelativeOption]: never;
}


/**
 * The baseline grid offset zero point is at the top of the page.
 */
interface BaselineGridRelativeOption_TOP_OF_PAGE_OF_BASELINE_GRID_RELATIVE_OPTION extends BaselineGridRelativeOption {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1162766196;
}

/**
 * The baseline grid offset zero point is at the top page margin.
 */
interface BaselineGridRelativeOption_TOP_OF_MARGIN_OF_BASELINE_GRID_RELATIVE_OPTION extends BaselineGridRelativeOption {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1162766189;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The zero point for the baseline grid offset.
 */
export declare namespace BaselineGridRelativeOption {
/**
 * The baseline grid offset zero point is at the top of the page.
 */
type TOP_OF_PAGE_OF_BASELINE_GRID_RELATIVE_OPTION = BaselineGridRelativeOption_TOP_OF_PAGE_OF_BASELINE_GRID_RELATIVE_OPTION;

/**
 * The baseline grid offset zero point is at the top page margin.
 */
type TOP_OF_MARGIN_OF_BASELINE_GRID_RELATIVE_OPTION = BaselineGridRelativeOption_TOP_OF_MARGIN_OF_BASELINE_GRID_RELATIVE_OPTION;

}
/**
 * The zero point for the baseline grid offset.
 */
export declare const BaselineGridRelativeOption: typeof Enumeration & {

  /**
   * The baseline grid offset zero point is at the top of the page.
   */
  readonly TOP_OF_PAGE_OF_BASELINE_GRID_RELATIVE_OPTION: BaselineGridRelativeOption_TOP_OF_PAGE_OF_BASELINE_GRID_RELATIVE_OPTION;
  /**
   * The baseline grid offset zero point is at the top of the page.
   */
  readonly topOfPageOfBaselineGridRelativeOption: BaselineGridRelativeOption_TOP_OF_PAGE_OF_BASELINE_GRID_RELATIVE_OPTION;
  /**
   * The baseline grid offset zero point is at the top of the page.
   */
  readonly topofpageofbaselinegridrelativeoption: BaselineGridRelativeOption_TOP_OF_PAGE_OF_BASELINE_GRID_RELATIVE_OPTION;

  /**
   * The baseline grid offset zero point is at the top page margin.
   */
  readonly TOP_OF_MARGIN_OF_BASELINE_GRID_RELATIVE_OPTION: BaselineGridRelativeOption_TOP_OF_MARGIN_OF_BASELINE_GRID_RELATIVE_OPTION;
  /**
   * The baseline grid offset zero point is at the top page margin.
   */
  readonly topOfMarginOfBaselineGridRelativeOption: BaselineGridRelativeOption_TOP_OF_MARGIN_OF_BASELINE_GRID_RELATIVE_OPTION;
  /**
   * The baseline grid offset zero point is at the top page margin.
   */
  readonly topofmarginofbaselinegridrelativeoption: BaselineGridRelativeOption_TOP_OF_MARGIN_OF_BASELINE_GRID_RELATIVE_OPTION;

}
